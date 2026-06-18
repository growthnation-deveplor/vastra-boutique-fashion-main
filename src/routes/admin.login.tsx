import React, { useState, useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Lock, Mail, ArrowRight, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { adminLogin, checkAdminAuth } from "../lib/api/products.functions";

export const Route = createFileRoute("/admin/login")({
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Redirect to /admin if already logged in
  useEffect(() => {
    checkAdminAuth()
      .then((res) => {
        if (res.isAuthenticated) {
          navigate({ to: "/admin" });
        }
      })
      .catch((err) => console.error(err));
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Please enter both email and password.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Authenticating admin...");
    try {
      const result = await adminLogin({ data: { email, password } });
      if (result.success) {
        toast.success("Login successful! Welcome back, Admin.", { id: toastId });
        // Hard refresh or direct navigate to ensure layout guard runs with fresh cookies
        window.location.href = "/admin";
      } else {
        toast.error(result.error || "Invalid login credentials", { id: toastId });
      }
    } catch (err: any) {
      console.error(err);
      toast.error("An error occurred during login. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-brand-pearl px-4 py-12">
      <Card className="luxury-panel max-w-md w-full rounded-[2rem] p-8 border-border/50 bg-card/60 flex flex-col gap-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/80 via-primary to-primary/80" />
        
        <div className="text-center mt-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
            <Lock className="h-5 w-5 text-primary" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Boutique Management</p>
          <h1 className="text-2xl font-extrabold text-foreground mt-1 tracking-tight">Admin Console</h1>
          <p className="text-xs text-muted-foreground mt-2">Sign in with your secure boutique admin credentials.</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="adminEmail" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Admin Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="adminEmail"
                type="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 rounded-xl h-11 text-sm font-medium border-border/70"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="adminPassword" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Secure Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="adminPassword"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 rounded-xl h-11 text-sm font-medium border-border/70"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button 
            type="submit" 
            variant="hero" 
            className="w-full mt-4 rounded-full h-11 text-xs font-bold gap-2 hover:scale-[1.01] transition-transform"
            disabled={loading}
          >
            {loading ? "Authenticating..." : "Sign In to Admin"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      </Card>
    </div>
  );
}
