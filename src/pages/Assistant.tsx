import Link from "next/link";
import { MessageCircle, Zap, Heart, ShoppingCart, Clock, Globe, ArrowRight, Check } from "lucide-react";

const Assistant = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--peacock-green))]/10 border border-[hsl(var(--peacock-green))]/20 rounded-full mb-6">
                <MessageCircle className="w-4 h-4 text-[hsl(var(--peacock-green))]" />
                <span className="text-sm text-[hsl(var(--peacock-green))] font-semibold">CUSTOMER SUITE</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Shopping <span className="text-gradient">Assistant</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Your 24/7 AI shopping companion that guides customers, answers questions, and helps them make confident purchase decisions.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-[hsl(var(--peacock-green))]" />
                  <span>24/7 Availability</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-[hsl(var(--peacock-green))]" />
                  <span>Natural Conversations</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-[hsl(var(--peacock-green))]" />
                  <span>Personalized Help</span>
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
                <div className="w-16 h-16 bg-[hsl(var(--peacock-green))]/10 rounded-xl flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-[hsl(var(--peacock-green))]" />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 bg-gray-700 rounded-lg p-3 text-xs text-gray-400">
                      Can you help me find a dress for a wedding?
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="w-2/3 bg-[hsl(var(--peacock-green))]/20 border border-[hsl(var(--peacock-green))]/30 rounded-lg p-3 text-xs text-gray-300">
                      I'd be happy to help! What's the wedding style?
                    </div>
                    <div className="w-8 h-8 bg-[hsl(var(--peacock-green))] rounded-full flex-shrink-0"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 bg-gray-700 rounded-lg p-3 text-xs text-gray-400">
                      Summer garden wedding
                    </div>
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
              <div className="text-4xl font-bold text-[hsl(var(--peacock-green))] mb-2">58%</div>
              <div className="text-sm text-gray-400">Lower Cart Abandonment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--peacock-green))] mb-2">2.4x</div>
              <div className="text-sm text-gray-400">Higher AOV</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--peacock-green))] mb-2">24/7</div>
              <div className="text-sm text-gray-400">Always Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--peacock-green))] mb-2">90%</div>
              <div className="text-sm text-gray-400">Customer Satisfaction</div>
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
                An AI assistant that feels human and helps like a pro
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-[hsl(var(--peacock-green))]/50 transition-all">
                <div className="w-12 h-12 bg-[hsl(var(--peacock-green))]/10 rounded-lg flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6 text-[hsl(var(--peacock-green))]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Natural Conversations</h3>
                <p className="text-gray-300 mb-4">
                  Conversations that feel genuinely human. Our AI understands context, remembers preferences, and responds naturally.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-0.5" />
                    <span>Context-aware responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-0.5" />
                    <span>Multi-turn conversations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-0.5" />
                    <span>Emotional intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-0.5" />
                    <span>Personality matching</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-[hsl(var(--peacock-green))]/50 transition-all">
                <div className="w-12 h-12 bg-[hsl(var(--peacock-green))]/10 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-[hsl(var(--peacock-green))]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Personalized Recommendations</h3>
                <p className="text-gray-300 mb-4">
                  Suggestions tailored to each customer's style, budget, and preferences based on browsing history and behavior.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-0.5" />
                    <span>Behavioral analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-0.5" />
                    <span>Style profiling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-0.5" />
                    <span>Budget awareness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-0.5" />
                    <span>Occasion matching</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-[hsl(var(--peacock-green))]/50 transition-all">
                <div className="w-12 h-12 bg-[hsl(var(--peacock-green))]/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-[hsl(var(--peacock-green))]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Smart Product Comparisons</h3>
                <p className="text-gray-300 mb-4">
                  Help customers decide by comparing products side-by-side, highlighting key differences and best matches.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-0.5" />
                    <span>Feature comparison</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-0.5" />
                    <span>Price analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-0.5" />
                    <span>Review summaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[hsl(var(--peacock-green))] flex-shrink-0 mt-0.5" />
                    <span>Best match suggestions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Common Use Cases
              </h2>
              <p className="text-xl text-gray-300">
                How customers use the Shopping Assistant
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[hsl(var(--peacock-green))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="w-5 h-5 text-[hsl(var(--peacock-green))]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Product Questions</h4>
                    <p className="text-sm text-gray-400">"Does this come in blue?" "What's the return policy?" "Is this true to size?"</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[hsl(var(--peacock-green))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-[hsl(var(--peacock-green))]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Style Advice</h4>
                    <p className="text-sm text-gray-400">"What shoes go with this dress?" "Help me put together an outfit for a date night"</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[hsl(var(--peacock-green))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-[hsl(var(--peacock-green))]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Gift Recommendations</h4>
                    <p className="text-sm text-gray-400">"I need a gift for my mom's birthday, she loves gardening" "Best gifts under $50"</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[hsl(var(--peacock-green))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[hsl(var(--peacock-green))]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Order Support</h4>
                    <p className="text-sm text-gray-400">"Where's my order?" "Can I change my shipping address?" "Track my package"</p>
                  </div>
                </div>
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
              <div className="bg-gradient-to-br from-[hsl(var(--peacock-green))]/10 to-[hsl(var(--peacock-cyan))]/10 rounded-2xl p-8 border border-[hsl(var(--peacock-green))]/20">
                <h3 className="text-2xl font-bold text-white mb-6">Real Results</h3>
                <div className="space-y-4">
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-[hsl(var(--peacock-green))] mb-1">58%</div>
                    <div className="text-sm text-gray-300">Reduction in cart abandonment</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-[hsl(var(--peacock-green))] mb-1">2.4x</div>
                    <div className="text-sm text-gray-300">Increase in average order value</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-[hsl(var(--peacock-green))] mb-1">90%</div>
                    <div className="text-sm text-gray-300">Customer satisfaction score</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why Merchants Love It
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[hsl(var(--peacock-green))]/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-[hsl(var(--peacock-green))]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">24/7 Customer Support</h4>
                      <p className="text-gray-300">Never miss a customer question, even at 3 AM on Sunday</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[hsl(var(--peacock-green))]/10 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-[hsl(var(--peacock-green))]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Scale Effortlessly</h4>
                      <p className="text-gray-300">Handle unlimited conversations simultaneously during peak times</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[hsl(var(--peacock-green))]/10 rounded-lg flex items-center justify-center">
                        <Heart className="w-5 h-5 text-[hsl(var(--peacock-green))]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Build Customer Loyalty</h4>
                      <p className="text-gray-300">Personalized attention makes customers feel valued and understood</p>
                    </div>
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
              Ready to Help Every Customer?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Give your customers the personalized shopping experience they deserve
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

export default Assistant;