import { createFileRoute } from "@tanstack/react-router";
import Razorpay from "razorpay";

let razorpayInstance: Razorpay | null = null;
function getRazorpay() {
  if (!razorpayInstance) {
    const key_id = process.env.VITE_RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    if (!key_id || !key_secret) {
      throw new Error("Razorpay credentials (VITE_RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET) are not configured.");
    }
    razorpayInstance = new Razorpay({
      key_id,
      key_secret,
    });
  }
  return razorpayInstance;
}

export const Route = createFileRoute("/api/create-order")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { amount, currency = "INR", receipt } = body;

          if (!amount || typeof amount !== "number") {
            return new Response(
              JSON.stringify({ error: "Invalid or missing amount" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          const options = {
            amount: Math.round(amount), // amount in the smallest currency unit (paise)
            currency,
            receipt: receipt || `receipt_${Date.now()}`,
          };

          const order = await getRazorpay().orders.create(options);

          return new Response(JSON.stringify(order), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error: any) {
          console.error("Error creating Razorpay order:", error);
          const errorMessage =
            error.error?.description ||
            error.description ||
            error.message ||
            "Internal Server Error";
          return new Response(
            JSON.stringify({ error: errorMessage }),
            { 
              status: error.statusCode || 500, 
              headers: { "Content-Type": "application/json" } 
            }
          );
        }
      },
    },
  },
});
