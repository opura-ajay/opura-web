"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
    const pathname = usePathname();
    console.log(pathname)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src={logoImg} 
              alt="Opura AI" 
              className="h-8 w-8 object-contain translate-y-0.5"
            />
            <span className="text-lg" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 300, letterSpacing: '0.15em', lineHeight: '1' }}>
              opura <span className="bg-gradient-to-r from-[hsl(175,80%,44%)] to-[hsl(190,95%,50%)] bg-clip-text text-transparent">ai</span>
            </span>
          </Link>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <Link href="/" className="text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors font-medium">
              Home
            </Link>
            
            {/* Solutions - Direct Link */}
            <Link href="/solutions" className="text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors font-medium">
              Solutions
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors font-medium"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {productsOpen && (
                <div 
                  className="absolute top-full right-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <div className="px-4 py-2 text-xs text-muted-foreground font-semibold uppercase">Customer Suite</div>
                  <Link 
                    href="/customer/discovery" 
                    className="block px-4 py-2 text-base text-foreground hover:bg-accent hover:text-[hsl(var(--peacock-cyan))] transition-colors"
                  >
                    Intelligent Discovery
                  </Link>
                  <Link 
                    href="/customer/assistant" 
                    className="block px-4 py-2 text-base text-foreground hover:bg-accent hover:text-[hsl(var(--peacock-cyan))] transition-colors"
                  >
                    Shopping Assistant
                  </Link>
                  
                  <div className="border-t border-border my-2"></div>
                  
                  <div className="px-4 py-2 text-xs text-muted-foreground font-semibold uppercase">Merchant Suite</div>
                  <Link 
                    href="/merchant/merchandising" 
                    className="block px-4 py-2 text-base text-foreground hover:bg-accent hover:text-[hsl(var(--peacock-cyan))] transition-colors"
                  >
                    Smart Merchandising
                  </Link>
                  <Link 
                    href="/merchant/analytics" 
                    className="block px-4 py-2 text-base text-foreground hover:bg-accent hover:text-[hsl(var(--peacock-cyan))] transition-colors"
                  >
                    Predictive Analytics
                  </Link>
                  
                  <div className="border-t border-border my-2"></div>
                  
                  <Link 
                    href="/products/future-vision" 
                    className="block px-4 py-2 text-base text-[hsl(var(--peacock-cyan))] hover:bg-accent transition-colors font-medium"
                  >
                    Future Vision →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/resources" className="text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors font-medium">
              Resources
            </Link>
            <Link href="/about" className="text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors font-medium">
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4 ml-8">
            <Link 
              href="/login"
              className="px-5 py-2.5 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] hover:opacity-90 text-black text-base font-semibold rounded-lg transition-all duration-300"
            >
              Log In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                href="/solutions" 
                className="text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              
              <div className="text-base text-foreground font-semibold">Products</div>
              <div className="pl-4 space-y-3">
                <div className="text-xs text-muted-foreground uppercase">Customer Suite</div>
                <Link 
                  href="/customer/discovery" 
                  className="block text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Intelligent Discovery
                </Link>
                <Link 
                  href="/customer/assistant" 
                  className="block text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Shopping Assistant
                </Link>
                
                <div className="text-xs text-muted-foreground uppercase pt-2">Merchant Suite</div>
                <Link 
                  href="/merchant/merchandising" 
                  className="block text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Smart Merchandising
                </Link>
                <Link 
                  href="/merchant/analytics" 
                  className="block text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Predictive Analytics
                </Link>
                
                <Link 
                  href="/products/future-vision" 
                  className="block text-base text-[hsl(var(--peacock-cyan))] hover:underline transition-colors font-medium pt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Future Vision →
                </Link>
              </div>
              
              <Link 
                href="/pricing" 
                className="text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/resources" 
                className="text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/about" 
                className="text-base text-foreground hover:text-[hsl(var(--peacock-cyan))] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/login"
                className="px-5 py-2.5 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] hover:opacity-90 text-black text-base font-semibold rounded-lg transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
