import React, { useState } from "react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { getDbProducts, deleteProduct, updateProduct } from "../lib/api/products.functions";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Star, 
  AlertCircle,
  TrendingUp,
  Sparkles,
  Award
} from "lucide-react";
import { formatPrice } from "../lib/products-db";
import { toast } from "sonner";
import { useStore } from "../hooks/use-store";

export const Route = createFileRoute("/admin/products/")({
  loader: async () => {
    try {
      const products = await getDbProducts();
      return { products };
    } catch (e) {
      console.error(e);
      return { products: [] };
    }
  },
  component: AdminProductsList,
});

function AdminProductsList() {
  const { products } = Route.useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const router = useRouter();
  const { setProducts } = useStore();

  // Categories list computed dynamically
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // Filtering products
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.sku?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = async (id: number) => {
    const toastId = toast.loading("Deleting product...");
    try {
      const res = await deleteProduct({ data: { id } });
      if (res.success) {
        toast.success("Product deleted successfully!", { id: toastId });
        setDeletingId(null);
        // Refresh router data
        router.invalidate().then(() => {
          // Re-fetch and update store context
          getDbProducts().then((list) => setProducts(list));
        });
      } else {
        toast.error("Failed to delete product.", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred.", { id: toastId });
    }
  };

  const handleToggleStock = async (product: typeof products[0]) => {
    const toastId = toast.loading("Updating availability...");
    try {
      const res = await updateProduct({
        data: {
          id: product.id,
          name: product.name,
          category: product.category,
          categoryName: product.categoryName,
          price: product.price,
          discountPrice: product.discountPrice,
          images: product.images,
          sizes: product.sizes,
          colors: product.colors as any,
          fabric: product.fabric,
          description: product.description,
          shortDescription: product.shortDescription || "",
          sku: product.sku || "",
          stock: product.inStock ? 0 : 15,
          inStock: !product.inStock,
          badge: product.badge,
          isFeatured: product.isFeatured,
          isNewArrival: product.isNewArrival,
          isBestseller: product.isBestseller,
          sortPriority: product.sortPriority,
          seoTitle: product.seoTitle || "",
          seoDescription: product.seoDescription || "",
        }
      });

      if (res.success) {
        toast.success(`Product is now ${!product.inStock ? "In Stock" : "Out of Stock"}.`, { id: toastId });
        router.invalidate().then(() => {
          getDbProducts().then((list) => setProducts(list));
        });
      } else {
        toast.error("Failed to update status", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred.", { id: toastId });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header and Add Action */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Manage Products</h1>
          <p className="text-xs text-muted-foreground mt-1">Add, edit, or delete items in your catalog.</p>
        </div>
        <Link to="/admin/products/new">
          <Button variant="hero" className="rounded-full h-11 text-xs font-bold gap-2">
            <Plus className="h-4 w-4" />
            Add New Product
          </Button>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <Card className="luxury-panel p-4 border-border/40 bg-card/30 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, SKU or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 rounded-xl border-border/50 h-10 text-xs font-medium bg-card/60"
          />
        </div>

        <div className="flex items-center gap-2 self-stretch md:self-auto justify-end">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground shrink-0">Category:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="h-10 rounded-xl border border-border/50 bg-card/60 px-3 text-xs font-bold text-foreground focus:outline-none focus:ring-1 focus:ring-primary uppercase tracking-wide min-w-[150px]"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c.replace("-", " ")}
              </option>
            ))}
          </select>
        </div>
      </Card>

      {/* Products Catalog Table */}
      <Card className="luxury-panel border-border/40 bg-card/25 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/50 bg-secondary/15 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <th className="p-4 sm:p-5">Product Info</th>
                <th className="p-4 sm:p-5">Category</th>
                <th className="p-4 sm:p-5">Pricing</th>
                <th className="p-4 sm:p-5">Badges</th>
                <th className="p-4 sm:p-5">Stock</th>
                <th className="p-4 sm:p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/20 text-xs">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-16 text-muted-foreground font-semibold">
                    <div className="flex flex-col items-center gap-2">
                      <AlertCircle className="h-6 w-6 text-muted-foreground/60" />
                      <span>No products found matching your search.</span>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-secondary/10 transition-colors">
                    {/* Info */}
                    <td className="p-4 sm:p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-15 rounded-lg overflow-hidden shrink-0 border border-border/40 bg-brand-pearl p-0.5">
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-full h-full object-cover object-top rounded-md"
                          />
                        </div>
                        <div className="flex flex-col gap-0.5 max-w-[200px] sm:max-w-xs">
                          <span className="font-extrabold text-foreground leading-snug line-clamp-1">{p.name}</span>
                          <span className="text-[10px] text-muted-foreground font-medium">SKU: {p.sku || `VB-${p.id}`}</span>
                          <span className="text-[10px] text-muted-foreground font-semibold italic">{p.fabric}</span>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="p-4 sm:p-5 uppercase tracking-wider text-[10px] font-bold text-muted-foreground">
                      {p.categoryName || p.category.replace("-", " ")}
                    </td>

                    {/* Pricing */}
                    <td className="p-4 sm:p-5">
                      <div className="flex flex-col gap-0.5 font-bold">
                        <span className="text-foreground">{formatPrice(p.discountPrice)}</span>
                        <span className="text-[10px] text-muted-foreground line-through font-medium">{formatPrice(p.price)}</span>
                      </div>
                    </td>

                    {/* Badges */}
                    <td className="p-4 sm:p-5">
                      <div className="flex flex-wrap gap-1">
                        {p.isFeatured && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 uppercase tracking-wider">
                            <TrendingUp className="h-2.5 w-2.5" /> Featured
                          </span>
                        )}
                        {p.isNewArrival && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-teal-500/10 text-teal-500 border border-teal-500/20 uppercase tracking-wider">
                            <Sparkles className="h-2.5 w-2.5" /> New
                          </span>
                        )}
                        {p.isBestseller && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 uppercase tracking-wider">
                            <Award className="h-2.5 w-2.5" /> Bestseller
                          </span>
                        )}
                        {p.badge && !p.isFeatured && !p.isNewArrival && !p.isBestseller && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-secondary text-foreground uppercase tracking-wider">
                            {p.badge}
                          </span>
                        )}
                        {!p.isFeatured && !p.isNewArrival && !p.isBestseller && !p.badge && (
                          <span className="text-[10px] text-muted-foreground font-semibold">none</span>
                        )}
                      </div>
                    </td>

                    {/* Stock & Availability */}
                    <td className="p-4 sm:p-5">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-bold text-foreground">{p.stock} units</span>
                        <button
                          onClick={() => handleToggleStock(p)}
                          className={`inline-flex items-center gap-1 self-start px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest border transition-colors ${
                            p.inStock
                              ? "bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20"
                              : "bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20"
                          }`}
                        >
                          {p.inStock ? <Eye className="h-2.5 w-2.5" /> : <EyeOff className="h-2.5 w-2.5" />}
                          {p.inStock ? "Active" : "Hidden"}
                        </button>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="p-4 sm:p-5 text-right">
                      {deletingId === p.id ? (
                        <div className="flex items-center justify-end gap-1.5">
                          <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider mr-1">Confirm?</span>
                          <Button
                            onClick={() => handleDelete(p.id)}
                            variant="destructive"
                            size="icon"
                            className="h-7 w-7 rounded-lg"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                          <Button
                            onClick={() => setDeletingId(null)}
                            variant="ghost"
                            className="h-7 px-2 text-[10px] font-bold rounded-lg border"
                          >
                            No
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-end gap-1">
                          <Link to="/admin/products/$id/edit" params={{ id: String(p.id) }}>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                              title="Edit listing"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button
                            onClick={() => setDeletingId(p.id)}
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-lg text-red-400 hover:text-red-500 hover:bg-red-500/10"
                            title="Delete listing"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
