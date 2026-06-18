import React from "react";
import { createFileRoute, Outlet, redirect, Link, useRouter, useLocation } from "@tanstack/react-router";
import { checkAdminAuth, adminLogout } from "../lib/api/products.functions";
import { LayoutDashboard, ShoppingBag, ShoppingCart, MessageSquare, LogOut, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  beforeLoad: async ({ location }) => {
    if (location.pathname.replace(/\/$/, "") === "/admin/login") {
      return;
    }
    try {
      const auth = await checkAdminAuth();
      if (!auth.isAuthenticated) {
        throw redirect({
          to: "/admin/login",
        });
      }
    } catch (e) {
      // If redirect was thrown, rethrow it
      if (e && typeof e === "object" && "to" in e) throw e;
      
      throw redirect({
        to: "/admin/login",
      });
    }
  },
  component: AdminLayout,
});

function AdminLayout() {
  const location = useLocation();
  const router = useRouter();

  if (location.pathname.replace(/\/$/, "") === "/admin/login") {
    return <Outlet />;
  }

  const handleLogout = async () => {
    try {
      await adminLogout();
      toast.success("Logged out successfully");
      window.location.href = "/admin/login";
    } catch (err) {
      console.error(err);
      toast.error("Failed to logout");
    }
  };

  const navItems = [
    { label: "Dashboard", to: "/admin", icon: <LayoutDashboard className="h-4 w-4" />, exact: true },
    { label: "Products", to: "/admin/products", icon: <ShoppingBag className="h-4 w-4" /> },
    { label: "Orders", to: "/admin/orders", icon: <ShoppingCart className="h-4 w-4" /> },
    { label: "Enquiries", to: "/admin/enquiries", icon: <MessageSquare className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-brand-pearl text-foreground flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-card border-b md:border-b-0 md:border-r border-border/50 flex flex-col shrink-0">
        {/* Brand header */}
        <div className="p-6 border-b border-border/50 flex items-center justify-between">
          <div>
            <h2 className="font-extrabold text-foreground tracking-tight text-base">Vastra Butique</h2>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-0.5">Admin Portal</p>
          </div>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors" title="Back to site">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 p-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors [&.active]:text-primary [&.active]:bg-primary/10 [&.active]:border-l-4 [&.active]:border-primary"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logout action */}
        <div className="p-4 border-t border-border/50">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start text-xs font-bold text-red-500 hover:text-red-600 hover:bg-red-500/10 rounded-xl px-4 py-3 gap-3 h-auto"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 flex flex-col min-h-0 bg-brand-pearl">
        <header className="h-16 border-b border-border/50 bg-card/40 flex items-center justify-between px-6 sm:px-8 shrink-0">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Live Connection Status: Stable</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-muted-foreground hidden sm:inline">Lekhrajsharma2129@gmail.com</span>
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-xs text-primary">
              AD
            </div>
          </div>
        </header>

        <div className="flex-1 p-6 sm:p-8 min-h-0 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
