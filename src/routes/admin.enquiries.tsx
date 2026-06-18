import React, { useState } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { getDbEnquiries, updateEnquiryStatus, deleteEnquiry } from "../lib/api/products.functions";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { 
  Search, 
  MessageSquare, 
  Phone, 
  Mail, 
  Calendar,
  AlertCircle,
  FileText,
  User,
  Trash2,
  Tag
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/enquiries")({
  loader: async () => {
    try {
      const enquiries = await getDbEnquiries();
      return { enquiries };
    } catch (e) {
      console.error(e);
      return { enquiries: [] };
    }
  },
  component: AdminEnquiriesList,
});

const ENQUIRY_STATUSES = ["New", "Contacted", "Closed"];

function AdminEnquiriesList() {
  const { enquiries } = Route.useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedEnquiry, setSelectedEnquiry] = useState<typeof enquiries[0] | null>(null);
  
  // Note state for updating notes
  const [adminNotes, setAdminNotes] = useState("");
  const [status, setStatus] = useState("");
  const [updating, setUpdating] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const router = useRouter();

  // Filtering enquiries
  const filteredEnquiries = enquiries.filter((e) => {
    const matchesSearch = 
      e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.phone.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || e.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSelectEnquiry = (enquiry: typeof enquiries[0]) => {
    setSelectedEnquiry(enquiry);
    setAdminNotes(enquiry.adminNotes || "");
    setStatus(enquiry.status);
  };

  const handleUpdate = async () => {
    if (!selectedEnquiry) return;
    setUpdating(true);
    const toastId = toast.loading("Updating enquiry status...");
    try {
      const res = await updateEnquiryStatus({
        data: {
          id: selectedEnquiry.id,
          status,
          adminNotes: adminNotes.trim() || undefined,
        }
      });

      if (res.success) {
        toast.success("Enquiry updated successfully!", { id: toastId });
        router.invalidate().then(() => {
          const updated = enquiries.find(e => e.id === selectedEnquiry.id);
          if (updated) {
            setSelectedEnquiry({
              ...updated,
              status,
              adminNotes
            });
          } else {
            setSelectedEnquiry(null);
          }
        });
      } else {
        toast.error("Failed to update status.", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred.", { id: toastId });
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (id: number) => {
    const toastId = toast.loading("Deleting enquiry...");
    try {
      const res = await deleteEnquiry({ data: { id } });
      if (res.success) {
        toast.success("Enquiry deleted successfully!", { id: toastId });
        setDeletingId(null);
        setSelectedEnquiry(null);
        router.invalidate();
      } else {
        toast.error("Failed to delete enquiry.", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred.", { id: toastId });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Customer Enquiries</h1>
        <p className="text-xs text-muted-foreground mt-1">Review contact submissions, custom styling requests, and product sizing help calls.</p>
      </div>

      {/* Filter and Search Bar */}
      <Card className="luxury-panel p-4 border-border/40 bg-card/30 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by customer name, email or message..."
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
            <option value="all">All Messages</option>
            {ENQUIRY_STATUSES.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>
      </Card>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
        {/* Enquiries List Card */}
        <Card className="luxury-panel border-border/40 bg-card/25 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/50 bg-secondary/15 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <th className="p-4 sm:p-5">Customer & Date</th>
                  <th className="p-4 sm:p-5">Message Snippet</th>
                  <th className="p-4 sm:p-5">Status</th>
                  <th className="p-4 sm:p-5 text-right">View</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 text-xs">
                {filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-16 text-muted-foreground font-semibold">
                      <div className="flex flex-col items-center gap-2">
                        <AlertCircle className="h-6 w-6 text-muted-foreground/60" />
                        <span>No enquiries found matching your search.</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((e) => (
                    <tr 
                      key={e.id} 
                      onClick={() => handleSelectEnquiry(e)}
                      className={`hover:bg-secondary/10 transition-colors cursor-pointer ${
                        selectedEnquiry?.id === e.id ? "bg-primary/5 border-l-4 border-primary" : ""
                      }`}
                    >
                      {/* Name & Date */}
                      <td className="p-4 sm:p-5 flex flex-col gap-0.5">
                        <span className="font-bold text-foreground">{e.name}</span>
                        <span className="text-[10px] text-muted-foreground font-semibold flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(e.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short"
                          })}
                        </span>
                      </td>

                      {/* Message Snippet */}
                      <td className="p-4 sm:p-5 max-w-[200px] truncate font-medium text-muted-foreground">
                        {e.message}
                      </td>

                      {/* Status */}
                      <td className="p-4 sm:p-5">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                            e.status === "Closed"
                              ? "bg-green-500/10 text-green-500"
                              : e.status === "Contacted"
                                ? "bg-blue-500/10 text-blue-500"
                                : "bg-yellow-500/10 text-yellow-600 animate-pulse"
                          }`}
                        >
                          {e.status}
                        </span>
                      </td>

                      {/* View Button */}
                      <td className="p-4 sm:p-5 text-right">
                        <Button
                          variant="ghost"
                          className="h-8 px-2 text-[10px] font-bold rounded-lg border hover:bg-secondary/40"
                        >
                          Read
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Selected Enquiry Panel */}
        {selectedEnquiry ? (
          <Card className="luxury-panel p-6 border-border/40 bg-card/35 flex flex-col gap-5 sticky top-6">
            <div className="border-b border-border/30 pb-3 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <MessageSquare className="h-4.5 w-4.5 text-primary animate-pulse" />
                  Read Enquiry
                </h3>
                <p className="text-[10px] text-muted-foreground font-semibold mt-0.5">
                  Submitted on {new Date(selectedEnquiry.createdAt).toLocaleString("en-IN")}
                </p>
              </div>

              {deletingId === selectedEnquiry.id ? (
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[9px] font-bold text-red-500 uppercase">Sure?</span>
                  <Button
                    onClick={() => handleDelete(selectedEnquiry.id)}
                    variant="destructive"
                    className="h-7 px-2 text-[10px] font-bold rounded-lg"
                  >
                    Yes
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
                <Button
                  onClick={() => setDeletingId(selectedEnquiry.id)}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-lg text-red-400 hover:text-red-500 hover:bg-red-500/10 shrink-0"
                  title="Delete spam message"
                >
                  <Trash2 className="h-4.5 w-4.5" />
                </Button>
              )}
            </div>

            {/* Customer Details */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-primary" /> Sender Details
              </h4>
              <div className="p-3 bg-secondary/10 rounded-xl flex flex-col gap-1.5 text-xs font-semibold">
                <div className="flex justify-between"><span className="text-muted-foreground">Name:</span><span className="text-foreground">{selectedEnquiry.name}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Phone:</span>{selectedEnquiry.phone ? <a href={`tel:${selectedEnquiry.phone}`} className="text-primary hover:underline">{selectedEnquiry.phone}</a> : <span className="text-muted-foreground italic">none provided</span>}</div>
                <div className="flex justify-between"><span className="text-muted-foreground">Email:</span><a href={`mailto:${selectedEnquiry.email}`} className="text-primary hover:underline">{selectedEnquiry.email}</a></div>
              </div>
            </div>

            {/* Product Reference tag */}
            {selectedEnquiry.productReference && (
              <div className="flex flex-col gap-3">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Tag className="h-3.5 w-3.5 text-primary" /> Product Reference
                </h4>
                <div className="p-2.5 rounded-xl border border-primary/20 bg-primary/5 text-xs font-bold text-primary">
                  {selectedEnquiry.productReference}
                </div>
              </div>
            )}

            {/* Message Body */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Customer Message</h4>
              <p className="p-4 bg-secondary/10 rounded-xl text-xs font-medium leading-relaxed text-foreground whitespace-pre-wrap italic">
                "{selectedEnquiry.message}"
              </p>
            </div>

            {/* Update Panel */}
            <div className="flex flex-col gap-3.5 border-t border-border/30 pt-3.5">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-primary" /> Manage Inquiry
              </h4>

              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold text-muted-foreground uppercase">Response Status</span>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="h-9 rounded-xl border border-border/50 bg-card px-2.5 text-xs font-bold text-foreground focus:outline-none focus:ring-1 focus:ring-primary uppercase tracking-wide"
                >
                  {ENQUIRY_STATUSES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold text-muted-foreground uppercase">Internal Admin Notes</span>
                <Textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="e.g. Called customer at 2 PM, requested size chart, closed."
                  className="rounded-xl min-h-[60px] text-xs"
                />
              </div>

              <Button
                onClick={handleUpdate}
                disabled={updating}
                className="w-full rounded-full h-10 text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 mt-1"
              >
                {updating ? "Saving Notes..." : "Update Enquiry Status"}
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="luxury-panel p-10 border-border/40 bg-card/15 text-center text-xs text-muted-foreground font-semibold flex flex-col items-center justify-center gap-2">
            <MessageSquare className="h-8 w-8 text-muted-foreground/50" />
            <span>Select a customer message from the inbox to read, link product tags, and write admin notes.</span>
          </Card>
        )}
      </div>
    </div>
  );
}
