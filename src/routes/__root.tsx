import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const siteUrl = "https://vastrabutique.shop";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn&apos;t load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

import { getDbProducts } from "../lib/api/products.functions";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vastra Butique | Girls Fashion Boutique" },
      {
        name: "description",
        content:
          "Vastra Butique offers trendy dresses, ethnic wear, western outfits, party wear and boutique fashion for stylish girls.",
      },
      { name: "author", content: "Vastra Butique" },
      { name: "keywords", content: "girls fashion boutique, trendy dresses for girls, ethnic wear, western wear, party wear, Vastra Butique" },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Vastra Butique | Girls Fashion Boutique" },
      {
        property: "og:description",
        content:
          "Discover premium boutique outfits for girls with stylish ethnic, western, party and casual collections.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vastra Butique | Girls Fashion Boutique" },
      {
        name: "twitter:description",
        content:
          "Luxury-inspired boutique fashion for girls with secure checkout and stylish curated collections.",
      },
      { name: "description", content: "Vastra Butique Showcase is a premium single-page website for a girls' fashion boutique." },
      { property: "og:description", content: "Vastra Butique Showcase is a premium single-page website for a girls' fashion boutique." },
      { name: "twitter:description", content: "Vastra Butique Showcase is a premium single-page website for a girls' fashion boutique." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/918a8cd6-e293-4477-94f8-4b2d2fe09f2f/id-preview-293e85c4--273ffc1c-6193-4f79-b86a-47fb0cfbcb15.lovable.app-1781179064005.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/918a8cd6-e293-4477-94f8-4b2d2fe09f2f/id-preview-293e85c4--273ffc1c-6193-4f79-b86a-47fb0cfbcb15.lovable.app-1781179064005.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "canonical", href: siteUrl },
    ],
  }),
  loader: async () => {
    try {
      const products = await getDbProducts();
      return { products };
    } catch (e) {
      console.error("Failed to load products in root loader:", e);
      return { products: [] };
    }
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { StoreProvider } from "../hooks/use-store";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/sonner";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { products } = Route.useLoaderData();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider initialProducts={products}>
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
        <Toaster />
      </StoreProvider>
    </QueryClientProvider>
  );
}


