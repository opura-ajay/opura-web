"use client";

import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import type { Route } from "next"; // ✅ for typed route casting

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12 pb-12 border-b border-border/50">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href={"/" as Route} className="flex items-center gap-3 mb-4">
              <Image
                src={logoImg}
                alt="Opura AI"
                className="h-8 w-8 object-contain translate-y-0.5"
              />
              <span
                className="text-lg"
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                  lineHeight: "1",
                }}
              >
                opura{" "}
                <span className="bg-gradient-to-r from-[hsl(175,80%,44%)] to-[hsl(190,95%,50%)] bg-clip-text text-transparent">
                  ai
                </span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming online shopping with intelligent AI-powered solutions.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={"/products" as Route}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Solutions
                </a>
              </li>
              <li>
                <Link
                  href={"/pricing" as Route}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={"/about" as Route}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Security", href: "/security" },
                { label: "Cookie Policy", href: "/cookies" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href as Route}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2025 Opura AI Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">Twitter</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
