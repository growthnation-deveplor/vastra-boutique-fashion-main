import React, { useState } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { getDbOrders, updateOrderStatus } from "../lib/api/products.functions";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { 
  Search, 
  ShoppingCart, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  DollarSign,
  AlertCircle,
  FileText,
  User
} from "lucide-react";
import { formatPrice } from "../lib/products-db";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/orders")({
  loader: async () => {
    try {
      const orders = await getDbOrders();
      return { orders };
    } catch (e) {
      console.error(e);
      return { orders: [] };
    }
  },
  component: AdminOrdersList,
});

const STATUS_OPTIONS = ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"];
const PAYMENT_STATUS_OPTIONS = ["Pending", "Paid"];

function AdminOrdersList() {
  const { orders } = Route.useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null);
  
  // Note state for updating notes
  const [adminNotes, setAdminNotes] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [updating, setUpdating] = useState(false);

  const router = useRouter();

  // Filtering orders
  const filteredOrders = orders.filter((o) => {
    const matchesSearch = 
      o.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
      o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.phone.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || o.orderStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSelectOrder = (order: typeof orders[0]) => {
    setSelectedOrder(order);
    setAdminNotes(order.adminNotes || "");
    setOrderStatus(order.orderStatus);
    setPaymentStatus(order.paymentStatus);
  };

  const handleUpdate = async () => {
    if (!selectedOrder) return;
    setUpdating(true);
    const toastId = toast.loading("Updating order status...");
    try {
      const res = await updateOrderStatus({
        data: {
          id: selectedOrder.id,
          orderStatus,
          paymentStatus,
          adminNotes: adminNotes.trim() || undefined,
        }
      });

      if (res.success) {
        toast.success("Order updated successfully!", { id: toastId });
        // Refresh router data
        router.invalidate().then(() => {
          // Re-fetch current order state from loader data
          const updatedOrder = orders.find(o => o.id === selectedOrder.id);
          if (updatedOrder) {
            setSelectedOrder({
              ...updatedOrder,
              orderStatus,
              paymentStatus,
              adminNotes
            });
          } else {
            setSelectedOrder(null);
          }
        });
      } else {
        toast.error("Failed to update order status.", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred.", { id: toastId });
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Order Management</h1>
        <p className="text-xs text-muted-foreground mt-1">Track customer orders, verify payments, and manage shipping dispatch.</p>
      </div>

      {/* Filter and Search Bar */}
      <Card className="luxury-panel p-4 border-border/40 bg-card/30 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by order ID, name, email or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 rounded-xl border-border/50 h-10 text-xs font-medium bg-card/60"
          />
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground shrink-0">Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-10 rounded-xl border border-border/50 bg-card/60 px-3 text-xs font-bold text-foreground focus:outline-none focus:ring-1 focus:ring-primary uppercase tracking-wide min-w-[140px]"
          >
            <option value="all">All Orders</option>
            {STATUS_OPTIONS.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>
      </Card>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
        {/* Orders List Card */}
        <Card className="luxury-panel border-border/40 bg-card/25 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/50 bg-secondary/15 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <th className="p-4 sm:p-5">Order ID & Date</th>
                  <th className="p-4 sm:p-5">Customer info</th>
                  <th className="p-4 sm:p-5">Total</th>
                  <th className="p-4 sm:p-5">Status</th>
                  <th className="p-4 sm:p-5 text-right">View</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 text-xs">
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-16 text-muted-foreground font-semibold">
                      <div className="flex flex-col items-center gap-2">
                        <AlertCircle className="h-6 w-6 text-muted-foreground/60" />
                        <span>No orders found matching your search.</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((o) => (
                    <tr 
                      key={o.id} 
                      onClick={() => handleSelectOrder(o)}
                      className={`hover:bg-secondary/10 transition-colors cursor-pointer ${
                        selectedOrder?.id === o.id ? "bg-primary/5 border-l-4 border-primary" : ""
                      }`}
                    >
                      {/* ID & Date */}
                      <td className="p-4 sm:p-5 flex flex-col gap-0.5">
                        <span className="font-extrabold text-foreground">{o.id}</span>
                        <span className="text-[10px] text-muted-foreground font-semibold flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(o.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                          })}
                        </span>
                      </td>

                      {/* Customer Info */}
                      <td className="p-4 sm:p-5">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-foreground">{o.name}</span>
                          <span className="text-[10px] text-muted-foreground">{o.phone}</span>
                        </div>
                      </td>

                      {/* Total */}
                      <td className="p-4 sm:p-5 font-extrabold text-foreground">
                        {formatPrice(o.totalAmount)}
                      </td>

                      {/* Status */}
                      <td className="p-4 sm:p-5">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                            o.orderStatus === "Delivered"
                              ? "bg-green-500/10 text-green-500"
                              : o.orderStatus === "Cancelled"
                                ? "bg-red-500/10 text-red-500"
                                : "bg-yellow-500/10 text-yellow-600"
                          }`}
                        >
                          {o.orderStatus}
                        </span>
                      </td>

                      {/* View Button */}
                      <td className="p-4 sm:p-5 text-right">
                        <Button
                          variant="ghost"
                          className="h-8 px-2 text-[10px] font-bold rounded-lg border hover:bg-secondary/40"
                        >
                          Details
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Selected Order Details Panel */}
        {selectedOrder ? (
          <Card className="luxury-panel p-6 border-border/40 bg-card/35 flex flex-col gap-5 sticky top-6">
            <div className="border-b border-border/30 pb-3 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <ShoppingCart className="h-4.5 w-4.5 text-primary animate-pulse" />
                  Order Detail: {selectedOrder.id}
                </h3>
                <p className="text-[10px] text-muted-foreground font-semibold mt-0.5">
                  Placed on {new Date(selectedOrder.createdAt).toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* Customer information */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-primary" /> Customer Info
              </h4>
              <div className="p-3 bg-secondary/10 rounded-xl flex flex-col gap-1.5 text-xs font-semibold">
                <div className="flex justify-between"><span className="text-muted-foreground">Name:</span><span className="text-foreground">{selectedOrder.name}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Phone:</span><a href={`tel:${selectedOrder.phone}`} className="text-primary hover:underline">{selectedOrder.phone}</a></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Email:</span><a href={`mailto:${selectedOrder.email}`} className="text-primary hover:underline">{selectedOrder.email}</a></div>
              </div>
            </div>

            {/* Delivery address */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Shipping Address
              </h4>
              <p className="p-3 bg-secondary/10 rounded-xl text-xs font-medium leading-relaxed text-foreground">
                {selectedOrder.addressLine},<br />
                {selectedOrder.city}, {selectedOrder.state} — {selectedOrder.pincode}
              </p>
            </div>

            {/* Order Items */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Items Ordered</h4>
              <div className="flex flex-col gap-2.5 max-h-[180px] overflow-y-auto pr-1">
                {selectedOrder.items.map((item: any) => (
                  <div key={item.id} className="flex gap-3 items-center text-xs p-2 rounded-xl bg-card/60 border border-border/20">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-12 rounded object-cover object-top border border-border/40"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="font-extrabold text-foreground block truncate">{item.name}</span>
                      <span className="text-[10px] text-muted-foreground font-semibold flex items-center gap-2 mt-0.5">
                        <span>Size: <strong className="text-foreground">{item.size}</strong></span>
                        <span>Color: <strong className="text-foreground">{item.colorName}</strong></span>
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-bold text-foreground block">{formatPrice(item.price)}</span>
                      <span className="text-[10px] text-muted-foreground font-medium block">Qty: {item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Details */}
            <div className="flex justify-between items-center p-3 border-t border-b border-border/30 text-xs font-bold">
              <span className="text-muted-foreground flex items-center gap-1.5"><DollarSign className="h-4 w-4 text-primary" /> Total Amount:</span>
              <span className="text-base font-extrabold text-foreground">{formatPrice(selectedOrder.totalAmount)}</span>
            </div>

            {/* Update Panel */}
            <div className="flex flex-col gap-3.5 border-t border-border/30 pt-3.5">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-primary" /> Update Shipping & Payment
              </h4>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase">Order Status</span>
                  <select
                    value={orderStatus}
                    onChange={(e) => setOrderStatus(e.target.value)}
                    className="h-9 rounded-xl border border-border/50 bg-card px-2 text-xs font-bold text-foreground focus:outline-none focus:ring-1 focus:ring-primary uppercase tracking-wide"
                  >
                    {STATUS_OPTIONS.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase">Payment Status</span>
                  <select
                    value={paymentStatus}
                    onChange={(e) => setPaymentStatus(e.target.value)}
                    className="h-9 rounded-xl border border-border/50 bg-card px-2 text-xs font-bold text-foreground focus:outline-none focus:ring-1 focus:ring-primary uppercase tracking-wide"
                  >
                    {PAYMENT_STATUS_OPTIONS.map((pst) => (
                      <option key={pst} value={pst}>
                        {pst}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold text-muted-foreground uppercase">Internal Admin Notes</span>
                <Textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="Add logistics details or custom sizing notes here..."
                  className="rounded-xl min-h-[60px] text-xs"
                />
              </div>

              <Button
                onClick={handleUpdate}
                disabled={updating}
                className="w-full rounded-full h-10 text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 mt-1"
              >
                {updating ? "Saving Changes..." : "Save Order Changes"}
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="luxury-panel p-10 border-border/40 bg-card/15 text-center text-xs text-muted-foreground font-semibold flex flex-col items-center justify-center gap-2">
            <ShoppingCart className="h-8 w-8 text-muted-foreground/50" />
            <span>Select an order from the list to view full details and update shipping status.</span>
          </Card>
        )}
      </div>
    </div>
  );
}
