import { createFileRoute } from "@tanstack/react-router";
import crypto from "crypto";

export const Route = createFileRoute("/api/verify-payment")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

          if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return new Response(
              JSON.stringify({ error: "Missing required payment details" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          const secret = process.env.RAZORPAY_KEY_SECRET || "";
          const generated_signature = crypto
            .createHmac("sha256", secret)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

          if (generated_signature === razorpay_signature) {
            return new Response(
              JSON.stringify({ success: true, message: "Payment verified successfully" }),
              { status: 200, headers: { "Content-Type": "application/json" } }
            );
          } else {
            return new Response(
              JSON.stringify({ success: false, error: "Invalid payment signature" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }
        } catch (error: any) {
          console.error("Error verifying payment:", error);
          return new Response(
            JSON.stringify({ error: error.message || "Internal Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
