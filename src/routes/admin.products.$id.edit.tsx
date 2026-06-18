import React, { useState } from "react";
import { createFileRoute, Link, useNavigate, redirect } from "@tanstack/react-router";
import { updateProduct, getDbProducts, getDbProductById } from "../lib/api/products.functions";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Upload, 
  Image as ImageIcon,
  Settings,
  Search
} from "lucide-react";
import { toast } from "sonner";
import { useStore } from "../hooks/use-store";

export const Route = createFileRoute("/admin/products/$id/edit")({
  loader: async ({ params }) => {
    try {
      const product = await getDbProductById({ data: { id: Number(params.id) } });
      if (!product) {
        throw redirect({ to: "/admin/products" });
      }
      return { product };
    } catch (e) {
      console.error(e);
      // Re-throw redirect
      if (e && typeof e === "object" && "to" in e) throw e;
      throw redirect({ to: "/admin/products" });
    }
  },
  component: EditProductPage,
});

const PRESET_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const PRESET_CATEGORIES = [
  { id: "party-wear", name: "Party Wear Dresses" },
  { id: "western-wear", name: "Western Dresses" },
  { id: "ethnic-wear", name: "Ethnic Wear" },
  { id: "boutique-collection", name: "Boutique Collection" },
  { id: "traditional-wear", name: "Traditional Wear" },
  { id: "casual-wear", name: "Casual Wear" },
  { id: "trendy-fashion", name: "Trendy Fashion" },
  { id: "girls-14-plus", name: "14+ Girls Collection" },
];

function EditProductPage() {
  const { product } = Route.useLoaderData();
  const navigate = useNavigate();
  const { setProducts } = useStore();
  const [loading, setLoading] = useState(false);

  // Form Fields State (initialized with loader data)
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [categoryName, setCategoryName] = useState(product.categoryName);
  const [price, setPrice] = useState(String(product.price));
  const [discountPrice, setDiscountPrice] = useState(String(product.discountPrice));
  const [fabric, setFabric] = useState(product.fabric);
  const [description, setDescription] = useState(product.description);
  const [sku, setSku] = useState(product.sku || "");
  const [stock, setStock] = useState(String(product.stock));
  const [inStock, setInStock] = useState(product.inStock);
  const [badge, setBadge] = useState(product.badge || "");
  
  const [isFeatured, setIsFeatured] = useState(product.isFeatured);
  const [isNewArrival, setIsNewArrival] = useState(product.isNewArrival);
  const [isBestseller, setIsBestseller] = useState(product.isBestseller);
  const [sortPriority, setSortPriority] = useState(String(product.sortPriority));
  const [seoTitle, setSeoTitle] = useState(product.seoTitle || "");
  const [seoDescription, setSeoDescription] = useState(product.seoDescription || "");

  // Variants Lists
  const [sizes, setSizes] = useState<string[]>(product.sizes);
  const [colors, setColors] = useState<{ name: string; hex: string }[]>(
    (product.colors as any) || []
  );
  const [images, setImages] = useState<string[]>(product.images);

  // Input states for adding colors / URLs
  const [customColorName, setCustomColorName] = useState("");
  const [customColorHex, setCustomColorHex] = useState("#FF0000");
  const [imageUrlInput, setImageUrlInput] = useState("");

  const handleCategoryChange = (catId: string) => {
    setCategory(catId);
    const matched = PRESET_CATEGORIES.find((c) => c.id === catId);
    if (matched) {
      setCategoryName(matched.name);
    }
  };

  const handleSizeToggle = (size: string) => {
    if (sizes.includes(size)) {
      setSizes(sizes.filter((s) => s !== size));
    } else {
      setSizes([...sizes, size]);
    }
  };

  const handleAddColor = () => {
    if (!customColorName.trim()) {
      toast.error("Please enter a color name");
      return;
    }
    if (colors.some((c) => c.name.toLowerCase() === customColorName.toLowerCase().trim())) {
      toast.error("Color name already exists");
      return;
    }
    setColors([...colors, { name: customColorName.trim(), hex: customColorHex }]);
    setCustomColorName("");
  };

  const handleRemoveColor = (index: number) => {
    setColors(colors.filter((_, idx) => idx !== index));
  };

  const handleAddImageUrl = () => {
    if (!imageUrlInput.trim()) return;
    setImages([...images, imageUrlInput.trim()]);
    setImageUrlInput("");
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, idx) => idx !== index));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const toastId = toast.loading("Processing image upload...");
    let loaded = 0;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImages((prev) => [...prev, reader.result as string]);
        }
        loaded++;
        if (loaded === files.length) {
          toast.success("Images processed successfully!", { id: toastId });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return toast.error("Product Name is required");
    if (!price || isNaN(Number(price))) return toast.error("Please enter a valid price");
    if (!discountPrice || isNaN(Number(discountPrice))) return toast.error("Please enter a valid discount price");
    if (Number(discountPrice) > Number(price)) return toast.error("Discount price cannot be higher than regular price");
    if (images.length === 0) return toast.error("Please add at least one product image");
    if (sizes.length === 0) return toast.error("Please select at least one size");
    if (colors.length === 0) return toast.error("Please add at least one color");

    setLoading(true);
    const toastId = toast.loading("Updating product listing...");
    try {
      const res = await updateProduct({
        data: {
          id: product.id,
          name,
          category,
          categoryName,
          price: Number(price),
          discountPrice: Number(discountPrice),
          fabric: fabric.trim() || "Premium Fabric",
          description: description.trim(),
          shortDescription: description.slice(0, 100),
          sku: sku.trim() || undefined,
          stock: Number(stock),
          inStock,
          badge: badge.trim() || null,
          isFeatured,
          isNewArrival,
          isBestseller,
          sortPriority: Number(sortPriority),
          seoTitle: seoTitle.trim() || undefined,
          seoDescription: seoDescription.trim() || undefined,
          sizes,
          colors,
          images,
        },
      });

      if (res.success) {
        toast.success("Outfit listing updated successfully!", { id: toastId });
        // Refresh products list in store provider
        const list = await getDbProducts();
        setProducts(list);
        navigate({ to: "/admin/products" });
      } else {
        toast.error("Failed to update product", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during update", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      {/* Top breadcrumb header */}
      <div className="flex items-center gap-3">
        <Link to="/admin/products" className="p-2 border border-border/50 bg-card rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Products CRUD</span>
          <h1 className="text-xl font-bold tracking-tight mt-0.5">Edit Outfit Listing</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Main info panel */}
          <Card className="luxury-panel p-6 border-border/40 bg-card/30 flex flex-col gap-5 md:col-span-2">
            <h3 className="font-bold text-sm text-foreground border-b border-border/30 pb-2 flex items-center gap-2">
              <Settings className="h-4 w-4 text-primary" />
              General Information
            </h3>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="prodName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Product Title *</Label>
              <Input
                id="prodName"
                placeholder="e.g. Georgette Silk Anarkali Gown"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl border-border/50 bg-card/50"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="prodCategory" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Category Selection *</Label>
                <select
                  id="prodCategory"
                  value={category}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="h-10 rounded-xl border border-border/50 bg-card/50 px-3 text-xs font-bold text-foreground focus:outline-none focus:ring-1 focus:ring-primary uppercase tracking-wide"
                >
                  {PRESET_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="prodFabric" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Fabric / Material *</Label>
                <Input
                  id="prodFabric"
                  placeholder="e.g. Georgette with Lining"
                  value={fabric}
                  onChange={(e) => setFabric(e.target.value)}
                  className="rounded-xl border-border/50 bg-card/50"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="prodPrice" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Regular Price (₹) *</Label>
                <Input
                  id="prodPrice"
                  type="number"
                  placeholder="4999"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="rounded-xl border-border/50 bg-card/50 font-bold"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="prodDiscount" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sale / Discount Price (₹) *</Label>
                <Input
                  id="prodDiscount"
                  type="number"
                  placeholder="3499"
                  value={discountPrice}
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  className="rounded-xl border-border/50 bg-card/50 font-bold text-green-500"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="prodDesc" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Detailed Description *</Label>
              <Textarea
                id="prodDesc"
                placeholder="Explain fabric detailing, embroidery style, fit, wash care instruction..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="rounded-xl border-border/50 bg-card/50 min-h-[140px]"
                required
              />
            </div>

            {/* Sizes selector */}
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Available Sizes *</Label>
              <div className="flex flex-wrap gap-2.5">
                {PRESET_SIZES.map((size) => {
                  const active = sizes.includes(size);
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => handleSizeToggle(size)}
                      className={`h-10 px-4 rounded-xl border text-xs font-bold tracking-wider transition-colors ${
                        active
                          ? "bg-primary/10 border-primary text-primary shadow-sm"
                          : "bg-card/40 border-border/50 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Colors picker */}
            <div className="flex flex-col gap-3">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Available Color Swatches *</Label>
              
              {/* Color addition input */}
              <div className="flex flex-wrap gap-3 items-end p-4 border border-border/30 bg-secondary/10 rounded-2xl">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">Color Name</span>
                  <Input
                    placeholder="e.g. Ruby Red"
                    value={customColorName}
                    onChange={(e) => setCustomColorName(e.target.value)}
                    className="h-9 text-xs rounded-xl bg-card"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">HEX Code</span>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="color"
                      value={customColorHex}
                      onChange={(e) => setCustomColorHex(e.target.value)}
                      className="h-9 w-9 rounded-xl border border-border/40 p-0.5 cursor-pointer bg-card"
                    />
                    <Input
                      placeholder="#FF0000"
                      value={customColorHex}
                      onChange={(e) => setCustomColorHex(e.target.value)}
                      className="h-9 text-xs rounded-xl bg-card w-20"
                    />
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={handleAddColor}
                  className="h-9 rounded-xl text-xs font-bold gap-1 px-3 border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Color
                </Button>
              </div>

              {/* Colors list preview */}
              <div className="flex flex-wrap gap-2 mt-1">
                {colors.map((c, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 pl-2.5 pr-1.5 py-1 rounded-full border border-border/50 bg-card/65 text-[11px] font-semibold"
                  >
                    <span className="h-3.5 w-3.5 rounded-full border border-black/10" style={{ backgroundColor: c.hex }} />
                    <span className="text-foreground">{c.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveColor(index)}
                      className="text-red-400 hover:text-red-500 hover:bg-red-500/10 p-1 rounded-full shrink-0"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Right sidebar form sections */}
          <div className="flex flex-col gap-6">
            {/* Image management */}
            <Card className="luxury-panel p-5 border-border/40 bg-card/30 flex flex-col gap-4">
              <h3 className="font-bold text-sm text-foreground border-b border-border/30 pb-2 flex items-center gap-2">
                <ImageIcon className="h-4 w-4 text-primary" />
                Product Media *
              </h3>

              {/* Upload controls */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">Upload Files (converts to Base64)</span>
                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-border/70 hover:border-primary/50 transition-colors p-4 rounded-xl cursor-pointer bg-card/30 group">
                    <Upload className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:scale-105 transition-all" />
                    <span className="text-[10px] font-bold text-muted-foreground mt-2">Select Outfit Photos</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">Or Paste Hosted Image URL</span>
                  <div className="flex gap-1.5">
                    <Input
                      placeholder="https://images.unsplash.com/..."
                      value={imageUrlInput}
                      onChange={(e) => setImageUrlInput(e.target.value)}
                      className="h-9 text-xs rounded-xl bg-card"
                    />
                    <Button
                      type="button"
                      onClick={handleAddImageUrl}
                      className="h-9 px-3 rounded-xl text-xs font-bold"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>

              {/* Images preview array */}
              <div className="grid grid-cols-3 gap-2.5 mt-2">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/5] rounded-lg border overflow-hidden bg-brand-pearl group"
                  >
                    <img
                      src={img}
                      alt="Product preview"
                      className="w-full h-full object-cover object-top"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                    <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/75 text-[8px] font-bold text-white uppercase tracking-wider">
                      #{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Catalog details */}
            <Card className="luxury-panel p-5 border-border/40 bg-card/30 flex flex-col gap-4">
              <h3 className="font-bold text-sm text-foreground border-b border-border/30 pb-2 flex items-center gap-2">
                <Settings className="h-4 w-4 text-primary" />
                Catalog & Badge
              </h3>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="prodSku" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">SKU / Code</Label>
                  <Input
                    id="prodSku"
                    placeholder="VB-S01"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                    className="rounded-xl h-9 text-xs bg-card"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="prodStock" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Stock Qty *</Label>
                  <Input
                    id="prodStock"
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="rounded-xl h-9 text-xs bg-card font-bold"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="prodBadge" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Badge Label</Label>
                <select
                  id="prodBadge"
                  value={badge}
                  onChange={(e) => setBadge(e.target.value)}
                  className="h-9 rounded-xl border border-border/50 bg-card px-2.5 text-xs font-bold text-foreground focus:outline-none focus:ring-1 focus:ring-primary uppercase tracking-wide"
                >
                  <option value="">No Badge</option>
                  <option value="new">New</option>
                  <option value="trending">Trending</option>
                  <option value="hot">Hot</option>
                  <option value="sale">Sale</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="prodPriority" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sort Priority</Label>
                <Input
                  id="prodPriority"
                  type="number"
                  value={sortPriority}
                  onChange={(e) => setSortPriority(e.target.value)}
                  className="rounded-xl h-9 text-xs bg-card"
                />
              </div>

              {/* Status toggles */}
              <div className="flex flex-col gap-3.5 border-t border-border/30 pt-3.5">
                <label className="flex items-center justify-between gap-4 cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-foreground">In Stock status</span>
                    <span className="text-[10px] text-muted-foreground">Visible on public catalog</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(e) => setInStock(e.target.checked)}
                    className="h-4 w-4 accent-primary"
                  />
                </label>

                <label className="flex items-center justify-between gap-4 cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-foreground">Featured Outfit</span>
                    <span className="text-[10px] text-muted-foreground">Show in trending sections</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                    className="h-4 w-4 accent-primary"
                  />
                </label>

                <label className="flex items-center justify-between gap-4 cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-foreground">New Arrival</span>
                    <span className="text-[10px] text-muted-foreground">Tag as new collection</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={isNewArrival}
                    onChange={(e) => setIsNewArrival(e.target.checked)}
                    className="h-4 w-4 accent-primary"
                  />
                </label>

                <label className="flex items-center justify-between gap-4 cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-foreground">Bestseller outfit</span>
                    <span className="text-[10px] text-muted-foreground">High rating priority</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={isBestseller}
                    onChange={(e) => setIsBestseller(e.target.checked)}
                    className="h-4 w-4 accent-primary"
                  />
                </label>
              </div>
            </Card>

            {/* SEO Settings */}
            <Card className="luxury-panel p-5 border-border/40 bg-card/30 flex flex-col gap-4">
              <h3 className="font-bold text-sm text-foreground border-b border-border/30 pb-2 flex items-center gap-2">
                <Search className="h-4 w-4 text-primary" />
                SEO Metadata
              </h3>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="seoTitle" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">SEO Title</Label>
                <Input
                  id="seoTitle"
                  placeholder="Vastra Butique | Premium Gown"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  className="rounded-xl h-9 text-xs bg-card"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="seoDesc" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">SEO Description</Label>
                <Textarea
                  id="seoDesc"
                  placeholder="Intricate handwork, silk lining. Shop now."
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value)}
                  className="rounded-xl text-xs bg-card min-h-[60px]"
                />
              </div>
            </Card>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-end gap-3 border-t border-border/40 pt-6">
          <Link to="/admin/products">
            <Button
              type="button"
              variant="ghost"
              className="rounded-full px-6 h-11 border text-xs font-bold"
              disabled={loading}
            >
              Cancel
            </Button>
          </Link>
          <Button
            type="submit"
            variant="hero"
            className="rounded-full px-8 h-11 text-xs font-bold"
            disabled={loading}
          >
            {loading ? "Saving changes..." : "Save Outfit Listing"}
          </Button>
        </div>
      </form>
    </div>
  );
}
