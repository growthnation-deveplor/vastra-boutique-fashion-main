import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { getDbProducts, getDbOrders, getDbEnquiries } from "../lib/api/products.functions";
import { Card } from "../components/ui/card";
import {
  ShoppingBag,
  ShoppingCart,
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle,
  Plus,
  ArrowRight,
} from "lucide-react";
import { formatPrice } from "../lib/products-db";

export const Route = createFileRoute("/admin/")({
  loader: async () => {
    try {
      const [products, orders, enquiries] = await Promise.all([
        getDbProducts(),
        getDbOrders(),
        getDbEnquiries(),
      ]);
      return { products, orders, enquiries };
    } catch (e) {
      console.error(e);
      return { products: [], orders: [], enquiries: [] };
    }
  },
  component: AdminDashboard,
});

function AdminDashboard() {
  const { products, orders, enquiries } = Route.useLoaderData();

  // Metrics calculation
  const totalProducts = products.length;
  const totalOrders = orders.length;
  const totalEnquiries = enquiries.length;

  const pendingOrders = orders.filter((o) => o.orderStatus === "Pending" || o.orderStatus === "Processing").length;
  const completedOrders = orders.filter((o) => o.orderStatus === "Delivered").length;
  
  const recentOrders = orders.slice(0, 5);
  const recentEnquiries = enquiries.slice(0, 5);

  const totalRevenue = orders
    .filter((o) => o.paymentStatus === "Paid" || o.orderStatus === "Delivered")
    .reduce((sum, o) => sum + o.totalAmount, 0);

  const stats = [
    {
      label: "Total Products",
      value: totalProducts,
      icon: <ShoppingBag className="h-5 w-5 text-blue-500" />,
      description: "Items in boutique",
      bg: "bg-blue-500/10",
    },
    {
      label: "Total Orders",
      value: totalOrders,
      icon: <ShoppingCart className="h-5 w-5 text-indigo-500" />,
      description: `Revenue: ${formatPrice(totalRevenue)}`,
      bg: "bg-indigo-500/10",
    },
    {
      label: "Pending Orders",
      value: pendingOrders,
      icon: <Clock className="h-5 w-5 text-yellow-600" />,
      description: "Require attention",
      bg: "bg-yellow-500/10",
    },
    {
      label: "Total Enquiries",
      value: totalEnquiries,
      icon: <MessageSquare className="h-5 w-5 text-pink-500" />,
      description: "Customer questions",
      bg: "bg-pink-500/10",
    },
  ];

  const quickActions = [
    { label: "Add Product", href: "/admin/products/new", desc: "List new outfit item", icon: <Plus className="h-4 w-4" /> },
    { label: "Manage Products", href: "/admin/products", desc: "Update stocks or images", icon: <ShoppingBag className="h-4 w-4" /> },
    { label: "Manage Orders", href: "/admin/orders", desc: "Update shipping status", icon: <ShoppingCart className="h-4 w-4" /> },
    { label: "Manage Enquiries", href: "/admin/enquiries", desc: "Review customer chats", icon: <MessageSquare className="h-4 w-4" /> },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-xs text-muted-foreground mt-1">Real-time statistics and summary of your boutique boutique store.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, idx) => (
          <Card key={idx} className="luxury-panel p-5 border-border/40 flex items-center justify-between gap-4 bg-card/40">
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{s.label}</p>
              <h3 className="text-2xl font-extrabold text-foreground mt-1 tracking-tight">{s.value}</h3>
              <p className="text-xs text-muted-foreground mt-1.5 font-medium">{s.description}</p>
            </div>
            <div className={`w-12 h-12 rounded-full ${s.bg} flex items-center justify-center shrink-0`}>
              {s.icon}
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions Panel */}
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, idx) => (
            <Link
              key={idx}
              to={action.href}
              className="p-5 border border-border/40 bg-card/25 rounded-2xl flex flex-col gap-3 group hover:border-primary/50 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                {action.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                  {action.label}
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-primary" />
                </h4>
                <p className="text-xs text-muted-foreground mt-1">{action.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Lists Grid */}
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* Recent Orders Card */}
        <Card className="luxury-panel p-6 border-border/40 bg-card/30 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-foreground flex items-center gap-2">
              <ShoppingCart className="h-4 w-4 text-primary" />
              Recent Orders
            </h3>
            <Link to="/admin/orders" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="flex flex-col gap-3.5">
            {recentOrders.length === 0 ? (
              <div className="text-center py-8 text-xs text-muted-foreground font-medium">
                No orders placed yet.
              </div>
            ) : (
              recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="p-4 rounded-xl border border-border/20 bg-card/50 flex items-center justify-between gap-4 text-xs font-semibold"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-extrabold text-foreground">{order.id}</span>
                    <span className="text-[10px] text-muted-foreground">{order.name} ({order.phone})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-foreground">{formatPrice(order.totalAmount)}</span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        order.orderStatus === "Delivered"
                          ? "bg-green-500/10 text-green-500"
                          : order.orderStatus === "Cancelled"
                            ? "bg-red-500/10 text-red-500"
                            : "bg-yellow-500/10 text-yellow-600"
                      }`}
                    >
                      {order.orderStatus}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>

        {/* Recent Enquiries Card */}
        <Card className="luxury-panel p-6 border-border/40 bg-card/30 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-foreground flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              Recent Enquiries
            </h3>
            <Link to="/admin/enquiries" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="flex flex-col gap-3.5">
            {recentEnquiries.length === 0 ? (
              <div className="text-center py-8 text-xs text-muted-foreground font-medium">
                No enquiries received.
              </div>
            ) : (
              recentEnquiries.map((enquiry) => (
                <div
                  key={enquiry.id}
                  className="p-4 rounded-xl border border-border/20 bg-card/50 flex flex-col gap-2.5 text-xs"
                >
                  <div className="flex items-center justify-between gap-4 font-semibold">
                    <span className="font-bold text-foreground">{enquiry.name}</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                        enquiry.status === "Closed"
                          ? "bg-green-500/10 text-green-500"
                          : enquiry.status === "Contacted"
                            ? "bg-blue-500/10 text-blue-500"
                            : "bg-yellow-500/10 text-yellow-600 animate-pulse"
                      }`}
                    >
                      {enquiry.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-medium line-clamp-1 italic">
                    "{enquiry.message}"
                  </p>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
