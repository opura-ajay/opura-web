import Link from "next/link";
import { LayoutGrid, Wand2, Tag, TrendingUp, Zap, Settings, ArrowRight, Check } from "lucide-react";

const Merchandising = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                <LayoutGrid className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400 font-semibold">MERCHANT SUITE</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Smart <span className="text-gradient-purple">Merchandising</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let AI do the heavy lifting. Automate product displays, optimize layouts, manage promotions, and personalize experiences at scale.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Auto Optimization</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Dynamic Pricing</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Smart Promotions</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                 href="/#contact-form"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                 href="/solutions"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  See Full Solution
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
                <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                  <LayoutGrid className="w-8 h-8 text-purple-400" />
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-700 rounded relative overflow-hidden">
                      {i === 2 && <div className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></div>}
                      {i === 5 && <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>}
                    </div>
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
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-sm text-gray-400">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">28%</div>
              <div className="text-sm text-gray-400">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">3.2x</div>
              <div className="text-sm text-gray-400">Faster Setup</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-sm text-gray-400">Automation Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300">
                Powerful tools to optimize your store effortlessly
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Wand2 className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Automated Merchandising</h3>
                <p className="text-gray-300 mb-4">
                  AI arranges products automatically for maximum conversions based on real-time behavior, seasonality, and trends.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Smart product placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Seasonal optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Trend-based sorting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>A/B testing automation</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Tag className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Dynamic Promotions</h3>
                <p className="text-gray-300 mb-4">
                  Real-time pricing and promotion optimization. Run smart campaigns that adapt to inventory, demand, and customer segments.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Smart discount timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Segment-based offers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Bundle recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Flash sale automation</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Inventory Intelligence</h3>
                <p className="text-gray-300 mb-4">
                  Smart visibility rules based on stock levels. Automatically boost products with high inventory and demote low-stock items.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Stock-aware ranking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Auto-hide out-of-stock</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Restock notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Clearance automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-300">
                Set it once, let AI handle the rest
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500">
                  <span className="text-2xl font-bold text-purple-400">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Set Your Rules</h4>
                <p className="text-sm text-gray-400">Define business rules and priorities once</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500">
                  <span className="text-2xl font-bold text-purple-400">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">AI Analyzes</h4>
                <p className="text-sm text-gray-400">Continuous analysis of performance data</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500">
                  <span className="text-2xl font-bold text-purple-400">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Auto Optimize</h4>
                <p className="text-sm text-gray-400">AI adjusts layouts and promotions in real-time</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500">
                  <span className="text-2xl font-bold text-purple-400">4</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Watch Results</h4>
                <p className="text-sm text-gray-400">Track performance improvements automatically</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why Merchants Love It
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-purple-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Save 40% of Your Time</h4>
                      <p className="text-gray-300">Stop manually organizing products. Focus on strategy, not execution</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">28% Revenue Boost</h4>
                      <p className="text-gray-300">Better product placement and smarter promotions drive sales growth</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                        <Settings className="w-5 h-5 text-purple-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Always Optimized</h4>
                      <p className="text-gray-300">AI works 24/7 to ensure your store is always at peak performance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-[hsl(var(--peacock-cyan))]/10 rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Real Results</h3>
                <div className="space-y-4">
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-purple-400 mb-1">40%</div>
                    <div className="text-sm text-gray-300">Time saved on merchandising tasks</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-purple-400 mb-1">28%</div>
                    <div className="text-sm text-gray-300">Revenue increase from optimization</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-purple-400 mb-1">95%</div>
                    <div className="text-sm text-gray-300">Tasks fully automated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Merchandising?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let AI handle the tedious work while you focus on growing your business
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
               href="/#contact-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
               href="/solutions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Explore Full Solution
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .text-gradient-purple {
          background: linear-gradient(to right, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}} />
    </div>
  );
};

export default Merchandising;