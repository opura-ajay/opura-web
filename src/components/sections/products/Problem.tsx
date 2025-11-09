import { TrendingDown, ShoppingCart, Search, ChartBar } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      stat: "97%",
      statContext: "visitors lost",
      highlight: "2.86% vs 20-40%",
      title: "The Conversion Collapse",
      description:
        "Online stores convert just 2.86% while physical stores achieve 20-40%. Same customers, same products, 10x worse results.",
    },
    {
      icon: ShoppingCart,
      stat: "70%",
      statContext: "carts abandoned",
      highlight: "$1.7 trillion yearly",
      title: "The Abandonment Crisis",
      description:
        "7 out of 10 shoppers abandon their carts. That's $1.7 trillion in documented purchase intent, vanishing.",
    },
    {
      icon: Search,
      stat: "75%",
      statContext: "can't find products",
      highlight: "leave after 1 page",
      title: "The Discovery Void",
      description:
        "3 out of 4 visitors bounce without finding what they want. Your catalog is invisible to those who need it most.",
    },
    {
      icon: ChartBar,
      stat: "87%",
      statContext: "data wasted",
      highlight: "5+ disconnected tools",
      title: "The Intelligence Gap",
      description:
        "Mountains of data across 5+ tools, but 87% never drives action. Analysis paralysis at enterprise scale.",
    },
  ];

  return (
    <section className="relative py-24 px-4 md:px-6 bg-white">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black">
            Retail is evolving.{" "}
            <span className="text-gradient">Your AI should too.</span>
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-black/80">
            E-commerce loses $4.9 trillion annually. Here's why:
          </p>

          {/* Equal-sized curved boxes with gradient border and hover effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl mt-12">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div key={index} className="relative group">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>

                  {/* Main card */}
                  <div className="relative bg-gray-50 border border-primary/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between">
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--peacock-green))] to-[hsl(var(--peacock-cyan))] opacity-60 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-col gap-4 flex-grow justify-between">
                      {/* Stat Section */}
                      <div className="text-center">
                        <div
                          className="text-5xl md:text-6xl font-bold mb-3 group-hover:scale-105 transition-transform text-gradient"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          {problem.stat}
                        </div>
                        <p className="text-xs font-medium uppercase tracking-wider text-black/60">
                          {problem.statContext}
                        </p>
                        <p className="text-sm md:text-base font-semibold mt-2 text-primary">
                          {problem.highlight}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/20 to-transparent my-4" />

                      {/* Problem Section */}
                      <div className="flex flex-col items-center gap-3 text-center flex-grow">
                        <div className="p-2.5 rounded-full bg-gradient-to-br from-[hsl(var(--peacock-green))/20] to-[hsl(var(--peacock-cyan))/20] border border-[hsl(var(--peacock-cyan))/30]">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>

                        <h3
                          className="text-base md:text-lg text-black font-medium whitespace-nowrap text-center"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {problem.title}
                        </h3>

                        <p
                          className="text-sm text-black/70 mt-2 flex-grow"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {problem.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-[hsl(var(--peacock-green))/5] to-[hsl(var(--peacock-cyan))/5]" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Source credibility line */}
          <div className="pt-10">
            <p className="text-xs text-center max-w-2xl mx-auto text-black/50">
              Sources: Baymard Institute 2024, IRP Commerce Report, McKinsey
              Digital Commerce Study
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
