import Link from "next/link";
import { TrendingUp, BarChart3, Target, Brain, Lightbulb, Users, ArrowRight, Check } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400 font-semibold">MERCHANT SUITE</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Predictive <span className="text-gradient-blue">Analytics</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Turn customer data into actionable insights. Forecast trends, understand behavior, and make data-driven decisions with AI-powered analytics.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span>Demand Forecasting</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span>Customer Insights</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span>Revenue Optimization</span>
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
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-end gap-2 h-32">
                    <div className="flex-1 bg-gray-700 rounded-t" style={{ height: '40%' }}></div>
                    <div className="flex-1 bg-gray-700 rounded-t" style={{ height: '65%' }}></div>
                    <div className="flex-1 bg-blue-500/30 rounded-t" style={{ height: '85%' }}></div>
                    <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '100%' }}></div>
                    <div className="flex-1 bg-blue-400/50 rounded-t border-2 border-dashed border-blue-400" style={{ height: '110%' }}></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-700 rounded w-full"></div>
                    <div className="h-2 bg-gray-700 rounded w-4/5"></div>
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
              <div className="text-4xl font-bold text-blue-400 mb-2">35%</div>
              <div className="text-sm text-gray-400">Better Inventory Planning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">22%</div>
              <div className="text-sm text-gray-400">LTV Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">87%</div>
              <div className="text-sm text-gray-400">Forecast Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-sm text-gray-400">Faster Insights</div>
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
                Intelligence that drives strategic decisions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Demand Forecasting</h3>
                <p className="text-gray-300 mb-4">
                  AI predicts what customers will want next based on historical data, seasonality, trends, and external factors.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Sales predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Seasonal trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Stock optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Reorder alerts</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Customer Insights</h3>
                <p className="text-gray-300 mb-4">
                  Deep behavioral analytics and segmentation. Understand who your customers are and what drives their purchases.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Customer segmentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Lifetime value prediction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Churn risk scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Purchase patterns</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Revenue Optimization</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered recommendations to grow sales. Identify opportunities, optimize pricing, and maximize profitability.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Pricing recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Upsell opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Bundle suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Margin analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboards */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Dashboards
              </h2>
              <p className="text-xl text-gray-300">
                All your insights in one place
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Sales Performance</h4>
                    <p className="text-sm text-gray-400">Track revenue, conversion rates, and product performance in real-time</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Customer Analytics</h4>
                    <p className="text-sm text-gray-400">Deep dive into customer behavior, segments, and lifetime value</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Trend Analysis</h4>
                    <p className="text-sm text-gray-400">Identify emerging trends and predict future demand patterns</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">AI Recommendations</h4>
                    <p className="text-sm text-gray-400">Actionable suggestions to improve performance and grow revenue</p>
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
              <div className="bg-gradient-to-br from-blue-500/10 to-[hsl(var(--peacock-cyan))]/10 rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Real Results</h3>
                <div className="space-y-4">
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-blue-400 mb-1">35%</div>
                    <div className="text-sm text-gray-300">Better inventory planning accuracy</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-blue-400 mb-1">22%</div>
                    <div className="text-sm text-gray-300">Increase in customer lifetime value</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-blue-400 mb-1">87%</div>
                    <div className="text-sm text-gray-300">Forecast accuracy rate</div>
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
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Brain className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Make Smarter Decisions</h4>
                      <p className="text-gray-300">Data-driven insights replace gut feelings and guesswork</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Stay Ahead of Trends</h4>
                      <p className="text-gray-300">Predict what's coming and prepare before competitors do</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Maximize Profitability</h4>
                      <p className="text-gray-300">Identify high-value opportunities and optimize every aspect of your business</p>
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
              Ready for Smarter Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Turn your data into your competitive advantage with AI-powered insights
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
        .text-gradient-blue {
          background: linear-gradient(to right, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}} />
    </div>
  );
};

export default Analytics;