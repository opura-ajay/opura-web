import Link from "next/link";
import { Search, MessageCircle, LayoutGrid, TrendingUp, ArrowRight, Sparkles } from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--peacock-cyan))]/10 border border-[hsl(var(--peacock-cyan))]/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[hsl(var(--peacock-cyan))]" />
              <span className="text-sm text-[hsl(var(--peacock-cyan))]">Complete AI Commerce Suite</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Journey to <span className="text-gradient">Intelligent Commerce</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From discovery to analytics, our four interconnected products create a seamless AI-powered shopping ecosystem that transforms how customers shop and merchants sell.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Journey Section */}
      <section className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto relative">
            
            {/* Visible Central Line - Desktop Only */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(var(--peacock-cyan))] via-[hsl(var(--peacock-green))] via-purple-500 to-blue-500 hidden lg:block -translate-x-1/2 opacity-30"></div>

            {/* Product 1: Intelligent Discovery */}
            <div className="relative mb-40">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Text */}
                <div className="lg:pr-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[hsl(var(--peacock-cyan))]/10 border border-[hsl(var(--peacock-cyan))]/20 rounded-full mb-4">
                    <span className="text-xs font-semibold text-[hsl(var(--peacock-cyan))]">STEP 1 • CUSTOMER SUITE</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">Intelligent Discovery</h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    The journey begins when a customer lands on your store. Our AI-powered search and discovery engine understands intent, not just keywords, delivering exactly what customers are looking for before they even finish typing.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Search className="w-5 h-5 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Natural Language Search</h4>
                        <p className="text-sm text-gray-400">Customers search how they speak, AI understands intent</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Search className="w-5 h-5 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Visual Discovery</h4>
                        <p className="text-sm text-gray-400">Upload an image, find similar products instantly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Search className="w-5 h-5 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Smart Filters</h4>
                        <p className="text-sm text-gray-400">Dynamic filters that adapt to user behavior</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-300">
                      <strong className="text-white">Merchant Benefit:</strong> 32% increase in product discovery, 45% reduction in zero-result searches
                    </p>
                  </div>

                  <Link 
                   href="/customer/discovery"
                    className="inline-flex items-center gap-2 text-[hsl(var(--peacock-cyan))] hover:gap-3 transition-all font-semibold"
                  >
                    <span>Explore Intelligent Discovery</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right Side - Visual + Dot */}
                <div className="relative lg:pl-12">
                  {/* Cyan Dot on the line */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[hsl(var(--peacock-cyan))] rounded-full border-4 border-background shadow-lg hidden lg:block z-20 pulse-dot"></div>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
                    <div className="w-16 h-16 bg-[hsl(var(--peacock-cyan))]/10 rounded-xl flex items-center justify-center mb-6">
                      <Search className="w-8 h-8 text-[hsl(var(--peacock-cyan))]" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-700 rounded w-full"></div>
                      <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                      <div className="grid grid-cols-3 gap-3 mt-6">
                        <div className="aspect-square bg-gray-700 rounded"></div>
                        <div className="aspect-square bg-gray-700 rounded"></div>
                        <div className="aspect-square bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2: Shopping Assistant */}
            <div className="relative mb-40">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Visual + Dot */}
                <div className="order-2 lg:order-1 relative lg:pr-12">
                  {/* Green Dot on the line */}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[hsl(var(--peacock-green))] rounded-full border-4 border-background shadow-lg hidden lg:block z-20 pulse-dot"></div>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
                    <div className="w-16 h-16 bg-[hsl(var(--peacock-green))]/10 rounded-xl flex items-center justify-center mb-6">
                      <MessageCircle className="w-8 h-8 text-[hsl(var(--peacock-green))]" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                        <div className="flex-1 bg-gray-700 rounded-lg h-12"></div>
                      </div>
                      <div className="flex gap-2 justify-end">
                        <div className="w-2/3 bg-[hsl(var(--peacock-green))]/20 rounded-lg h-12"></div>
                        <div className="w-8 h-8 bg-[hsl(var(--peacock-green))] rounded-full"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                        <div className="flex-1 bg-gray-700 rounded-lg h-12"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Text */}
                <div className="order-1 lg:order-2 lg:pl-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[hsl(var(--peacock-green))]/10 border border-[hsl(var(--peacock-green))]/20 rounded-full mb-4">
                    <span className="text-xs font-semibold text-[hsl(var(--peacock-green))]">STEP 2 • CUSTOMER SUITE</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">Shopping Assistant</h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Once they've found products, customers often have questions. Our AI shopping assistant provides instant, personalized guidance—answering questions, offering recommendations, and helping customers make confident purchase decisions.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">24/7 Conversational AI</h4>
                        <p className="text-sm text-gray-400">Natural conversations that feel human</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Product Comparisons</h4>
                        <p className="text-sm text-gray-400">Side-by-side analysis to help customers decide</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Personalized Recommendations</h4>
                        <p className="text-sm text-gray-400">Suggests products based on preferences and behavior</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-300">
                      <strong className="text-white">Merchant Benefit:</strong> 58% reduction in cart abandonment, 2.4x increase in average order value
                    </p>
                  </div>

                  <Link 
                   href="/customer/assistant"
                    className="inline-flex items-center gap-2 text-[hsl(var(--peacock-green))] hover:gap-3 transition-all font-semibold"
                  >
                    <span>Explore Shopping Assistant</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 3: Smart Merchandising */}
            <div className="relative mb-40">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Text */}
                <div className="lg:pr-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
                    <span className="text-xs font-semibold text-purple-400">STEP 3 • MERCHANT SUITE</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">Smart Merchandising</h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Behind the scenes, merchants need control. Our smart merchandising tools automatically optimize product displays, manage inventory visibility, run promotions, and personalize the shopping experience at scale—all powered by AI.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <LayoutGrid className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Automated Merchandising</h4>
                        <p className="text-sm text-gray-400">AI arranges products for maximum conversion</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <LayoutGrid className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Dynamic Promotions</h4>
                        <p className="text-sm text-gray-400">Real-time pricing and promotion optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <LayoutGrid className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Inventory Intelligence</h4>
                        <p className="text-sm text-gray-400">Smart visibility rules based on stock levels</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-300">
                      <strong className="text-white">Merchant Benefit:</strong> 40% time saved on merchandising, 28% revenue increase from optimization
                    </p>
                  </div>

                  <Link 
                   href="/merchant/merchandising"
                    className="inline-flex items-center gap-2 text-purple-400 hover:gap-3 transition-all font-semibold"
                  >
                    <span>Explore Smart Merchandising</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right Side - Visual + Dot */}
                <div className="relative lg:pl-12">
                  {/* Purple Dot on the line */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-background shadow-lg hidden lg:block z-20 pulse-dot"></div>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                      <LayoutGrid className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="aspect-square bg-gray-700 rounded"></div>
                      ))}
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-2 bg-gray-700 rounded w-full"></div>
                      <div className="h-2 bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 4: Predictive Analytics */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Visual + Dot */}
                <div className="order-2 lg:order-1 relative lg:pr-12">
                  {/* Blue Dot on the line */}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-background shadow-lg hidden lg:block z-20 pulse-dot"></div>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-end gap-2 h-32">
                        <div className="flex-1 bg-gray-700 rounded-t" style={{ height: '40%' }}></div>
                        <div className="flex-1 bg-gray-700 rounded-t" style={{ height: '65%' }}></div>
                        <div className="flex-1 bg-blue-500/30 rounded-t" style={{ height: '85%' }}></div>
                        <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '100%' }}></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-700 rounded w-full"></div>
                        <div className="h-2 bg-gray-700 rounded w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Text */}
                <div className="order-1 lg:order-2 lg:pl-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
                    <span className="text-xs font-semibold text-blue-400">STEP 4 • MERCHANT SUITE</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">Predictive Analytics</h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Finally, merchants need insights to make strategic decisions. Our predictive analytics turn all customer interactions into actionable intelligence—forecasting trends, identifying opportunities, and providing the data needed to stay ahead of the competition.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Demand Forecasting</h4>
                        <p className="text-sm text-gray-400">Predict what customers will want next</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Customer Insights</h4>
                        <p className="text-sm text-gray-400">Deep behavioral analytics and segmentation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Revenue Optimization</h4>
                        <p className="text-sm text-gray-400">AI-powered recommendations to grow sales</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-300">
                      <strong className="text-white">Merchant Benefit:</strong> 35% better inventory planning, 22% increase in customer lifetime value
                    </p>
                  </div>

                  <Link 
                   href="/merchant/analytics"
                    className="inline-flex items-center gap-2 text-blue-400 hover:gap-3 transition-all font-semibold"
                  >
                    <span>Explore Predictive Analytics</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Complete Picture */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Complete Picture
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Each product works independently, but together they create a powerful AI commerce ecosystem that transforms every touchpoint of the shopping journey.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">For Customers</h3>
                <p className="text-gray-300">
                  A seamless, intelligent shopping experience from search to purchase—powered by AI that understands and anticipates their needs.
                </p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">For Merchants</h3>
                <p className="text-gray-300">
                  Complete control and deep insights—AI that works tirelessly to optimize your store, engage customers, and drive growth.
                </p>
              </div>
            </div>

            <Link 
             href="/#contact-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .text-gradient {
          background: linear-gradient(to right, hsl(var(--peacock-green)), hsl(var(--peacock-cyan)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes pulse-dot {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px currentColor;
          }
          50% {
            transform: scale(1.15);
            box-shadow: 0 0 30px currentColor;
          }
        }

        .pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default Solutions;