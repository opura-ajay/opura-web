"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(`Not found page visited: ${pathname}`);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center text-foreground">
      <div>
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          We couldn&apos;t find <span className="font-mono">{pathname}</span>.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-lg bg-foreground px-5 py-3 text-background transition hover:opacity-90"
      >
        Go back home
      </Link>
    </div>
  );
}



