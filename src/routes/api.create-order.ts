import { createFileRoute } from "@tanstack/react-router";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.VITE_RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

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

          const order = await razorpay.orders.create(options);

          return new Response(JSON.stringify(order), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error: any) {
          console.error("Error creating Razorpay order:", error);
          return new Response(
            JSON.stringify({ error: error.message || "Internal Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
