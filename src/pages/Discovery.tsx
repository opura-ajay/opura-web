import Link from "next/link";
import { Search, Image, Filter, Sparkles, TrendingUp, Users, ArrowRight, Check } from "lucide-react";

const Discovery = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--peacock-cyan))]/10 border border-[hsl(var(--peacock-cyan))]/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[hsl(var(--peacock-cyan))]" />
                <span className="text-sm text-[hsl(var(--peacock-cyan))] font-semibold">CUSTOMER SUITE</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Intelligent <span className="text-gradient">Discovery</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform how customers find products with AI-powered search and discovery that understands intent, not just keywords.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-[hsl(var(--peacock-cyan))]" />
                  <span>Natural Language Search</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-[hsl(var(--peacock-cyan))]" />
                  <span>Visual Discovery</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-[hsl(var(--peacock-cyan))]" />
                  <span>Smart Filters</span>
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
                <div className="w-16 h-16 bg-[hsl(var(--peacock-cyan))]/10 rounded-xl flex items-center justify-center mb-6">
                  <Search className="w-8 h-8 text-[hsl(var(--peacock-cyan))]" />
                </div>
                <div className="space-y-4">
                  <div className="h-12 bg-gray-700 rounded-lg flex items-center px-4 gap-3">
                    <Search className="w-5 h-5 text-gray-400" />
                    <div className="h-3 bg-gray-600 rounded w-2/3"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="aspect-square bg-gray-700 rounded-lg"></div>
                    ))}
                  </div>
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
              <div className="text-4xl font-bold text-[hsl(var(--peacock-cyan))] mb-2">32%</div>
              <div className="text-sm text-gray-400">Increase in Discovery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--peacock-cyan))] mb-2">45%</div>
              <div className="text-sm text-gray-400">Fewer Zero Results</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--peacock-cyan))] mb-2">2.3x</div>
              <div className="text-sm text-gray-400">Better Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--peacock-cyan))] mb-2">58%</div>
              <div className="text-sm text-gray-400">Faster Product Finding</div>
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
                AI-powered discovery that feels magical to customers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-[hsl(var(--peacock-cyan))]/50 transition-all">
                <div className="w-12 h-12 bg-[hsl(var(--peacock-cyan))]/10 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-[hsl(var(--peacock-cyan))]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Natural Language Search</h3>
                <p className="text-gray-300 mb-4">
                  Customers search how they naturally speak. "Red dress for summer wedding" returns perfect results, not just keyword matches.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-0.5" />
                    <span>Intent understanding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-0.5" />
                    <span>Contextual relevance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-0.5" />
                    <span>Typo tolerance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-0.5" />
                    <span>Multi-language support</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-[hsl(var(--peacock-cyan))]/50 transition-all">
                <div className="w-12 h-12 bg-[hsl(var(--peacock-cyan))]/10 rounded-lg flex items-center justify-center mb-6">
                  <Image className="w-6 h-6 text-[hsl(var(--peacock-cyan))]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Visual Discovery</h3>
                <p className="text-gray-300 mb-4">
                  Upload a photo or screenshot and instantly find similar products in your catalog. Perfect for fashion, home decor, and more.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-0.5" />
                    <span>Image-based search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-0.5" />
                    <span>Style matching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-0.5" />
                    <span>Color extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-0.5" />
                    <span>Pattern recognition</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-[hsl(var(--peacock-cyan))]/50 transition-all">
                <div className="w-12 h-12 bg-[hsl(var(--peacock-cyan))]/10 rounded-lg flex items-center justify-center mb-6">
                  <Filter className="w-6 h-6 text-[hsl(var(--peacock-cyan))]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Smart Filters</h3>
                <p className="text-gray-300 mb-4">
                  Dynamic filters that adapt based on customer behavior, showing only relevant options and hiding empty filter combinations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-0.5" />
                    <span>Adaptive filtering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-0.5" />
                    <span>No zero-result filters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-0.5" />
                    <span>Personalized order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-cyan))] flex-shrink-0 mt-0.5" />
                    <span>Smart suggestions</span>
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
                Seamless integration that works behind the scenes
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--peacock-cyan))]/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[hsl(var(--peacock-cyan))]">
                  <span className="text-2xl font-bold text-[hsl(var(--peacock-cyan))]">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Customer Searches</h4>
                <p className="text-sm text-gray-400">User types or uploads image in your search bar</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--peacock-cyan))]/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[hsl(var(--peacock-cyan))]">
                  <span className="text-2xl font-bold text-[hsl(var(--peacock-cyan))]">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">AI Understands Intent</h4>
                <p className="text-sm text-gray-400">Our AI interprets meaning and context</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--peacock-cyan))]/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[hsl(var(--peacock-cyan))]">
                  <span className="text-2xl font-bold text-[hsl(var(--peacock-cyan))]">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Smart Ranking</h4>
                <p className="text-sm text-gray-400">Results ranked by relevance and behavior</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--peacock-cyan))]/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[hsl(var(--peacock-cyan))]">
                  <span className="text-2xl font-bold text-[hsl(var(--peacock-cyan))]">4</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Perfect Results</h4>
                <p className="text-sm text-gray-400">Customer finds exactly what they need</p>
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
                      <div className="w-10 h-10 bg-[hsl(var(--peacock-cyan))]/10 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-[hsl(var(--peacock-cyan))]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Increased Conversions</h4>
                      <p className="text-gray-300">Customers who find what they want are 3x more likely to purchase</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[hsl(var(--peacock-cyan))]/10 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-[hsl(var(--peacock-cyan))]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Better User Experience</h4>
                      <p className="text-gray-300">Fast, accurate search reduces frustration and bounce rates</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[hsl(var(--peacock-cyan))]/10 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-[hsl(var(--peacock-cyan))]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Competitive Advantage</h4>
                      <p className="text-gray-300">Stand out with search that feels like magic compared to competitors</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[hsl(var(--peacock-cyan))]/10 to-[hsl(var(--peacock-green))]/10 rounded-2xl p-8 border border-[hsl(var(--peacock-cyan))]/20">
                <h3 className="text-2xl font-bold text-white mb-6">Real Results</h3>
                <div className="space-y-4">
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-[hsl(var(--peacock-cyan))] mb-1">32%</div>
                    <div className="text-sm text-gray-300">Increase in product discovery rate</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-[hsl(var(--peacock-cyan))] mb-1">45%</div>
                    <div className="text-sm text-gray-300">Reduction in zero-result searches</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-[hsl(var(--peacock-cyan))] mb-1">2.3x</div>
                    <div className="text-sm text-gray-300">Better engagement with search results</div>
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
              Ready to Transform Discovery?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading retailers using AI to help customers find exactly what they're looking for
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
        .text-gradient {
          background: linear-gradient(to right, hsl(var(--peacock-green)), hsl(var(--peacock-cyan)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}} />
    </div>
  );
};

export default Discovery;