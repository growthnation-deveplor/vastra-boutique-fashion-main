import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { prisma } from "../db";
import {
  getAdminSession,
  setAdminSession,
  clearAdminSession,
  signToken,
} from "../auth.server";
import { PRODUCTS } from "../products-db";

// Helper for admin authorization checks
async function assertAdmin() {
  const session = await getAdminSession();
  if (!session || !session.isAdmin) {
    throw new Error("Unauthorized: Admin access required");
  }
  return session;
}

// Helper: Slug generator
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

// ----------------------------------------
// AUTH FUNCTIONS
// ----------------------------------------

export const adminLogin = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      email: z.string().email(),
      password: z.string().min(1),
    })
  )
  .handler(async ({ data }) => {
    const adminEmail = process.env.ADMIN_EMAIL || "Lekhrajsharma2129@gmail.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "admin0099";

    if (data.email.toLowerCase() === adminEmail.toLowerCase() && data.password === adminPassword) {
      const token = signToken({ email: data.email, isAdmin: true });
      await setAdminSession(token);
      return { success: true };
    }
    return { success: false, error: "Invalid credentials" };
  });

export const adminLogout = createServerFn({ method: "POST" })
  .handler(async () => {
    await clearAdminSession();
    return { success: true };
  });

export const checkAdminAuth = createServerFn({ method: "GET" })
  .handler(async () => {
    const session = await getAdminSession();
    return { isAuthenticated: !!session };
  });

// ----------------------------------------
// SEEDING FUNCTION
// ----------------------------------------

export const seedDatabase = createServerFn({ method: "POST" })
  .handler(async () => {
    // Assert admin can seed, or run automatically if DB empty
    const count = await prisma.product.count();
    if (count > 0) {
      return { success: true, message: "Database already seeded", count };
    }

    let seededCount = 0;
    for (const p of PRODUCTS) {
      const slug = `${slugify(p.name)}-${p.id}`;
      await prisma.product.create({
        data: {
          name: p.name,
          slug,
          category: p.category,
          categoryName: p.categoryName || p.category,
          price: p.price,
          discountPrice: p.discountPrice,
          images: p.images,
          sizes: p.sizes,
          colors: p.colors as any,
          fabric: p.fabric || "Premium Fabric",
          description: p.description || "",
          shortDescription: p.description ? p.description.slice(0, 100) : "",
          badge: p.badge,
          inStock: p.inStock,
          stock: p.inStock ? 15 : 0,
          rating: p.rating || 4.5,
          reviews: p.reviews || 0,
          isFeatured: p.badge === "trending" || p.badge === "hot",
          isNewArrival: p.badge === "new",
          isBestseller: p.reviews && p.reviews > 100 ? true : false,
          sortPriority: p.id,
        },
      });
      seededCount++;
    }

    return { success: true, message: `Seeded ${seededCount} products successfully`, count: seededCount };
  });

// ----------------------------------------
// PUBLIC DATA RETRIEVAL
// ----------------------------------------

export const getDbProducts = createServerFn({ method: "GET" })
  .handler(async () => {
    // Attempt auto-seeding if empty
    const count = await prisma.product.count();
    if (count === 0) {
      await prisma.product.createMany({
        data: PRODUCTS.map((p) => ({
          name: p.name,
          slug: `${slugify(p.name)}-${p.id}`,
          category: p.category,
          categoryName: p.categoryName || p.category,
          price: p.price,
          discountPrice: p.discountPrice,
          images: p.images,
          sizes: p.sizes,
          colors: p.colors as any,
          fabric: p.fabric || "Premium Fabric",
          description: p.description || "",
          shortDescription: p.description ? p.description.slice(0, 100) : "",
          badge: p.badge,
          inStock: p.inStock,
          stock: p.inStock ? 15 : 0,
          rating: p.rating || 4.5,
          reviews: p.reviews || 0,
          isFeatured: p.badge === "trending" || p.badge === "hot",
          isNewArrival: p.badge === "new",
          isBestseller: p.reviews && p.reviews > 100 ? true : false,
          sortPriority: p.id,
        })),
      });
    }

    return await prisma.product.findMany({
      orderBy: { sortPriority: "asc" },
    });
  });

// ----------------------------------------
// PRODUCT CRUD (ADMIN)
// ----------------------------------------

export const createProduct = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1),
      category: z.string().min(1),
      categoryName: z.string().min(1),
      price: z.number().positive(),
      discountPrice: z.number().nonnegative(),
      images: z.array(z.string()),
      sizes: z.array(z.string()),
      colors: z.array(
        z.object({
          name: z.string(),
          hex: z.string(),
        })
      ),
      fabric: z.string().min(1),
      description: z.string().min(1),
      shortDescription: z.string().optional(),
      sku: z.string().optional(),
      stock: z.number().int().nonnegative(),
      inStock: z.boolean(),
      badge: z.string().nullable(),
      isFeatured: z.boolean(),
      isNewArrival: z.boolean(),
      isBestseller: z.boolean(),
      sortPriority: z.number().int(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
    })
  )
  .handler(async ({ data }) => {
    await assertAdmin();
    const slugBase = slugify(data.name);
    const uniqueId = Math.floor(1000 + Math.random() * 9000);
    const slug = `${slugBase}-${uniqueId}`;

    const newProduct = await prisma.product.create({
      data: {
        ...data,
        slug,
        colors: data.colors as any,
      },
    });

    return { success: true, product: newProduct };
  });

export const updateProduct = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      id: z.number().int(),
      name: z.string().min(1),
      category: z.string().min(1),
      categoryName: z.string().min(1),
      price: z.number().positive(),
      discountPrice: z.number().nonnegative(),
      images: z.array(z.string()),
      sizes: z.array(z.string()),
      colors: z.array(
        z.object({
          name: z.string(),
          hex: z.string(),
        })
      ),
      fabric: z.string().min(1),
      description: z.string().min(1),
      shortDescription: z.string().optional(),
      sku: z.string().optional(),
      stock: z.number().int().nonnegative(),
      inStock: z.boolean(),
      badge: z.string().nullable(),
      isFeatured: z.boolean(),
      isNewArrival: z.boolean(),
      isBestseller: z.boolean(),
      sortPriority: z.number().int(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
    })
  )
  .handler(async ({ data }) => {
    await assertAdmin();
    const { id, ...updateData } = data;

    // Check if name changed to regenerate slug
    const existing = await prisma.product.findUnique({ where: { id } });
    let slug = existing?.slug;
    if (existing && existing.name !== data.name) {
      slug = `${slugify(data.name)}-${id}`;
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        ...updateData,
        slug,
        colors: updateData.colors as any,
      },
    });

    return { success: true, product: updatedProduct };
  });

export const deleteProduct = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.number().int() }))
  .handler(async ({ data }) => {
    await assertAdmin();
    await prisma.product.delete({
      where: { id: data.id },
    });
    return { success: true };
  });

// ----------------------------------------
// ORDER MANAGEMENT (PUBLIC & ADMIN)
// ----------------------------------------

export const createDbOrder = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      id: z.string(), // VB-XXXXXX format
      email: z.string().email(),
      phone: z.string().min(10),
      name: z.string().min(1),
      addressLine: z.string().min(1),
      city: z.string().min(1),
      state: z.string().min(1),
      pincode: z.string().min(6),
      totalAmount: z.number(),
      paymentMethod: z.string(),
      paymentStatus: z.string(),
      items: z.array(
        z.object({
          productId: z.number(),
          name: z.string(),
          price: z.number(),
          image: z.string(),
          size: z.string(),
          colorName: z.string(),
          colorHex: z.string(),
          quantity: z.number(),
        })
      ),
    })
  )
  .handler(async ({ data }) => {
    const { items, ...orderData } = data;
    const newOrder = await prisma.order.create({
      data: {
        ...orderData,
        orderStatus: "Pending",
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            image: item.image,
            size: item.size,
            colorName: item.colorName,
            colorHex: item.colorHex,
            quantity: item.quantity,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    // Reduce stock quantities
    for (const item of items) {
      try {
        const product = await prisma.product.findUnique({ where: { id: item.productId } });
        if (product) {
          const newStock = Math.max(0, product.stock - item.quantity);
          await prisma.product.update({
            where: { id: item.productId },
            data: {
              stock: newStock,
              inStock: newStock > 0,
            },
          });
        }
      } catch (err) {
        console.error("Failed to reduce stock for product", item.productId, err);
      }
    }

    return { success: true, order: newOrder };
  });

export const getDbOrders = createServerFn({ method: "GET" })
  .handler(async () => {
    await assertAdmin();
    return await prisma.order.findMany({
      include: {
        items: true,
      },
      orderBy: { createdAt: "desc" },
    });
  });

export const getDbOrdersByEmail = createServerFn({ method: "POST" })
  .inputValidator(z.object({ email: z.string().email() }))
  .handler(async ({ data }) => {
    return await prisma.order.findMany({
      where: {
        email: {
          equals: data.email,
          mode: "insensitive",
        },
      },
      include: {
        items: true,
      },
      orderBy: { createdAt: "desc" },
    });
  });


export const updateOrderStatus = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      id: z.string(),
      orderStatus: z.string(),
      paymentStatus: z.string().optional(),
      adminNotes: z.string().optional(),
    })
  )
  .handler(async ({ data }) => {
    await assertAdmin();
    const { id, ...updateFields } = data;
    const updated = await prisma.order.update({
      where: { id },
      data: updateFields,
    });
    return { success: true, order: updated };
  });

// ----------------------------------------
// ENQUIRY MANAGEMENT (PUBLIC & ADMIN)
// ----------------------------------------

export const createDbEnquiry = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1),
      email: z.string().email(),
      phone: z.string().min(10),
      message: z.string().min(1),
      productReference: z.string().optional(),
    })
  )
  .handler(async ({ data }) => {
    const newEnquiry = await prisma.enquiry.create({
      data: {
        ...data,
        status: "New",
      },
    });
    return { success: true, enquiry: newEnquiry };
  });

export const getDbEnquiries = createServerFn({ method: "GET" })
  .handler(async () => {
    await assertAdmin();
    return await prisma.enquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
  });

export const updateEnquiryStatus = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      id: z.number().int(),
      status: z.string(),
      adminNotes: z.string().optional(),
    })
  )
  .handler(async ({ data }) => {
    await assertAdmin();
    const { id, ...updateFields } = data;
    const updated = await prisma.enquiry.update({
      where: { id },
      data: updateFields,
    });
    return { success: true, enquiry: updated };
  });

export const deleteEnquiry = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.number().int() }))
  .handler(async ({ data }) => {
    await assertAdmin();
    await prisma.enquiry.delete({
      where: { id: data.id },
    });
    return { success: true };
  });

export const getDbProductById = createServerFn({ method: "GET" })
  .inputValidator(z.object({ id: z.number().int() }))
  .handler(async ({ data }) => {
    return await prisma.product.findUnique({
      where: { id: data.id },
    });
  });

