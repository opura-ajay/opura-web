"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Route } from "next"; // ✅ for typed route support

const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(175,80%,44%)] to-[hsl(190,95%,50%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight pb-4">
            Your Store.{" "}
            <span className="block text-gradient mt-4 pb-2">
              Smarter. Faster. Limitless.
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Build shopping experiences that think ahead. From discovery to
            decision, Opura’s AI adapts, learns, and accelerates your growth —
            all in one platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            {/* ✅ Typed hrefs so Next.js 15 doesn't complain */}
            <Link href={"/get-started" as Route} className="w-full sm:w-[220px]">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[hsl(175,80%,44%)] to-[hsl(190,95%,50%)] text-black hover:opacity-90 transition-all text-base font-semibold px-8 py-6 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href={"/book-demo" as Route} className="w-full sm:w-[220px]">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary/30 hover:bg-primary/10 text-foreground font-semibold px-8 py-6"
              >
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
