import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

import { createDbEnquiry } from "../lib/api/products.functions";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const toastId = toast.loading("Sending your message...");
    try {
      const res = await createDbEnquiry({
        data: {
          name,
          email,
          phone,
          message: `Subject: ${subject}\n\n${message}`,
        }
      });

      if (res.success) {
        toast.success(`Thank you, ${name}! Your message has been sent successfully.`, { id: toastId });
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        toast.error("Failed to send message. Please try again.", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to connect to server.", { id: toastId });
    }
  };

  const contactCards = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Our Boutique Studio",
      content: (
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          Shop No. 111 Centre Plaza,<br />
          kashida Gali, main market,<br />
          Sanganer, Jaipur — 302033
        </p>
      ),
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call & WhatsApp Support",
      content: (
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed flex flex-col gap-1 font-semibold">
          <span>Mobile: <a href="tel:+917976396802" className="text-primary hover:underline">+91 7976396802</a></span>
          <span>WhatsApp: <a href="https://wa.me/917976396802" className="text-primary hover:underline">+91 7976396802</a></span>
        </p>
      ),
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Support",
      content: (
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed flex flex-col gap-1 font-semibold">
          <span>Inquiries: <a href="mailto:Lekhrajsharma2129@gmail.com" className="text-foreground hover:text-primary transition-colors">Lekhrajsharma2129@gmail.com</a></span>
          <span>Order Support: <a href="mailto:support@vastraboutique.in" className="text-foreground hover:text-primary transition-colors">support@vastraboutique.in</a></span>
        </p>
      ),
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Boutique Hours",
      content: (
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed flex flex-col font-medium">
          <span>Monday — Saturday: 10:00 AM – 8:00 PM</span>
          <span>Sunday: 11:00 AM – 6:00 PM</span>
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-16 animate-fade-rise">
      {/* Page Hero Header */}
      <div className="bg-card/40 border-b border-border/50 py-10">
        <div className="container-shell text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Get In Touch
          </p>
          <h1 className="text-4xl font-semibold text-foreground mt-3 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted-foreground max-w-xl mx-auto">
            Have a question about fabric, custom styling sizing, or shipping? Reach out to us or visit our studio in Jaipur. We are here to help you.
          </p>
        </div>
      </div>

      <div className="container-shell mt-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          {/* Left Column: Info cards */}
          <div className="flex flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Information</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-tight">
              Connect With Store Owner Soniya Sharma
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
              Visit our flagship boutique location in the heart of Jaipur or chat with us online for immediate assistance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {contactCards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-5 border border-border/40 bg-card/25 rounded-2xl flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{card.title}</h4>
                    {card.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact form */}
          <Card className="luxury-panel rounded-[2rem] p-6 sm:p-8 border-border/50 flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Message Us</p>
              <h3 className="text-2xl font-bold text-foreground mt-1.5">Send a Message</h3>
            </div>

            <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="contactName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name *</Label>
                  <Input
                    id="contactName"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl h-10 text-sm font-medium"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="contactEmail" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address *</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl h-10 text-sm font-medium"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contactPhone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number (Optional)</Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  placeholder="Your mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-xl h-10 text-sm font-medium"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contactSubject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject *</Label>
                <Input
                  id="contactSubject"
                  type="text"
                  placeholder="What is this regarding?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="rounded-xl h-10 text-sm font-medium"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contactMessage" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message Content *</Label>
                <Textarea
                  id="contactMessage"
                  placeholder="Write details about your custom styling inquiry or shipping question..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-xl min-h-[120px] text-sm"
                  required
                />
              </div>

              <Button type="submit" variant="hero" className="w-full mt-2 rounded-full h-11 text-xs font-bold gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* Embedded Location Map */}
      <div className="container-shell mt-16 rounded-[2rem] overflow-hidden border border-border/50 h-[400px] shadow-md bg-brand-pearl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.511877685637!2d75.8239023150537!3d26.92095598312389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db14022a10df3%3A0xe54e3d3b6a9ad797!2sHawa%20Mahal!5e0!3m2!1sen!2sin!4v1623690000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.1) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          title="Vastra Butique Studio Jaipur Location"
        />
      </div>
    </div>
  );
}
