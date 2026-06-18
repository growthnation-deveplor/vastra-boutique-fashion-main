import crypto from "crypto";

const JWT_SECRET = process.env.JWT_SECRET || "default_vastra_secret_key_123456";

// Pure JWT signing via crypto
export function signToken(payload: { email: string; isAdmin: boolean }): string {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const data = Buffer.from(JSON.stringify({ ...payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 })).toString("base64url");
  const signature = crypto
    .createHmac("sha256", JWT_SECRET)
    .update(`${header}.${data}`)
    .digest("base64url");
  return `${header}.${data}.${signature}`;
}

// Pure JWT verification via crypto
export function verifyToken(token: string): { email: string; isAdmin: boolean } | null {
  try {
    const [header, data, signature] = token.split(".");
    if (!header || !data || !signature) return null;
    
    const expectedSignature = crypto
      .createHmac("sha256", JWT_SECRET)
      .update(`${header}.${data}`)
      .digest("base64url");
      
    if (signature !== expectedSignature) return null;
    
    const payload = JSON.parse(Buffer.from(data, "base64url").toString("utf8"));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null; // Expired
    }
    return payload;
  } catch (e) {
    return null;
  }
}

import { getCookie, setCookie, deleteCookie } from "@tanstack/react-start/server";

// Cookie Helper: Write
export async function setAdminSession(token: string) {
  try {
    const isProd = process.env.NODE_ENV === "production";
    setCookie("admin_token", token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: isProd,
      maxAge: 60 * 60 * 24, // 24 hours
    });
  } catch (e) {
    console.error("Failed to set cookie in environment", e);
  }
}

// Cookie Helper: Read
export async function getAdminSession(): Promise<{ email: string; isAdmin: boolean } | null> {
  try {
    const token = getCookie("admin_token");
    if (!token) return null;
    return verifyToken(token);
  } catch (e) {
    console.error("Failed to read cookie in environment", e);
    return null;
  }
}

// Cookie Helper: Clear
export async function clearAdminSession() {
  try {
    deleteCookie("admin_token", {
      path: "/",
    });
  } catch (e) {
    console.error("Failed to clear cookie in environment", e);
  }
}

