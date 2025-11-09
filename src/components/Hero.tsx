"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { Route } from "next";

const Hero = () => {
  const router = useRouter();

  // ✅ Typed state
  const [activeAgents, setActiveAgents] = useState<Set<number>>(
    new Set([0, 1, 2, 3, 5, 8, 12, 15, 18, 22, 25])
  );

  // ✅ Simulated animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgents((prev) => {
        const newSet = new Set(prev);

        // Randomly remove agents
        const agentsToRemove = Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < agentsToRemove; i++) {
          if (newSet.size > 8) {
            const randomAgent = Array.from(newSet)[
              Math.floor(Math.random() * newSet.size)
            ];
            newSet.delete(randomAgent);
          }
        }

        // Randomly add agents
        const agentsToAdd = Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < agentsToAdd; i++) {
          const randomAgent = Math.floor(Math.random() * 40);
          newSet.add(randomAgent);
        }

        return newSet;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // ✅ Route navigation (typed)
  const handleRequestDemo = () => {
    router.push("/about" as Route);
    setTimeout(() => {
      const element = document.getElementById("contact-form");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // ✅ Agent network visualization
  const agents = useMemo(() => {
    const agentList: { id: number; x: number; y: number; layer: string }[] = [];
    const centerX = 250;
    const centerY = 250;

    const layers = [
      { count: 8, radius: 80, label: "core" },
      { count: 14, radius: 160, label: "mid" },
      { count: 18, radius: 240, label: "outer" },
    ];

    let agentIndex = 0;
    layers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        const angle = (i / layer.count) * Math.PI * 2 + Math.random() * 0.3;
        const radiusVariation = layer.radius + (Math.random() - 0.5) * 30;
        const x = centerX + Math.cos(angle) * radiusVariation;
        const y = centerY + Math.sin(angle) * radiusVariation;

        agentList.push({ id: agentIndex, x, y, layer: layer.label });
        agentIndex++;
      }
    });

    return agentList;
  }, []);

  // ✅ Dynamic connection mapping
  const connections = useMemo(() => {
    const connList: { from: number; to: number }[] = [];
    const activeAgentsList = Array.from(activeAgents);

    activeAgentsList.forEach((agentId) => {
      const agent = agents[agentId];
      if (!agent) return;

      const connectCount = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < connectCount; i++) {
        const randomAgent =
          activeAgentsList[Math.floor(Math.random() * activeAgentsList.length)];
        if (randomAgent !== agentId) {
          connList.push({ from: agentId, to: randomAgent });
        }
      }
    });

    return connList;
  }, [activeAgents, agents]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(175,80%,44%)] to-[hsl(190,95%,50%)] opacity-20 blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background to-background"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            <h2
              className="text-4xl md:text-6xl lg:text-7xl tracking-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 200 }}
            >
              Convert Traffic into Trust
            </h2>

            <p
              className="text-2xl md:text-3xl lg:text-4xl text-gradient mt-4"
              style={{ fontWeight: 300 }}
            >
              Trust into Sales
            </p>

            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              style={{ fontWeight: 400 }}
            >
              AI that understands your shoppers — and helps you sell smarter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[hsl(175,80%,44%)] to-[hsl(190,95%,50%)] text-black hover:opacity-90 transition-all text-base font-semibold px-8 py-6 group"
                onClick={handleRequestDemo}
              >
                See It In Action
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-foreground hover:bg-primary/10 text-base font-semibold px-8 py-6"
                onClick={() => router.push("/products" as Route)}
              >
                Explore Platform
              </Button>
            </div>
          </div>

          {/* Network Visualization */}
          <div className="relative h-96 md:h-[500px] hidden lg:flex items-center justify-center">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 500 500"
              style={{ maxWidth: "500px", maxHeight: "500px" }}
            >
              <defs>
                <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(190, 95%, 50%)" />
                  <stop offset="100%" stopColor="hsl(190, 95%, 60%)" />
                </linearGradient>
                <linearGradient id="midGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(190, 95%, 55%)" />
                  <stop offset="100%" stopColor="hsl(210, 100%, 40%)" />
                </linearGradient>
                <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(175, 80%, 32%)" />
                  <stop offset="100%" stopColor="hsl(210, 100%, 40%)" />
                </linearGradient>
              </defs>

              {/* Animated connections */}
              {connections.map((conn, idx) => {
                const fromAgent = agents[conn.from];
                const toAgent = agents[conn.to];
                if (!fromAgent || !toAgent) return null;

                return (
                  <line
                    key={`conn-${idx}`}
                    x1={fromAgent.x}
                    y1={fromAgent.y}
                    x2={toAgent.x}
                    y2={toAgent.y}
                    stroke="url(#midGradient)"
                    strokeWidth="1"
                    opacity="0.35"
                    strokeDasharray="3,2"
                    style={{
                      animation: "dash-animate 10s linear infinite",
                    }}
                  />
                );
              })}

              {/* Agent dots */}
              {agents.map((agent) => {
                const isActive = activeAgents.has(agent.id);
                let gradient = "url(#outerGradient)";
                let size = 5;
                let fillColor = gradient;

                if (agent.layer === "core") {
                  gradient = "url(#coreGradient)";
                  size = 7;
                  fillColor = isActive ? "#ffffff" : gradient;
                } else if (agent.layer === "mid") {
                  gradient = "url(#midGradient)";
                  size = 6;
                  fillColor = isActive ? "#ffffff" : gradient;
                } else {
                  fillColor = isActive ? "#ffffff" : gradient;
                }

                return (
                  <g key={`agent-${agent.id}`} style={{ transition: "opacity 0.3s" }}>
                    <circle
                      cx={agent.x}
                      cy={agent.y}
                      r={size}
                      fill={fillColor}
                      opacity={isActive ? 1 : 0.15}
                      style={{ transition: "all 0.3s ease-out" }}
                    />
                    <circle
                      cx={agent.x}
                      cy={agent.y}
                      r={size + 3}
                      fill="none"
                      stroke={gradient}
                      strokeWidth="0.8"
                      opacity={isActive ? 0.7 : 0.08}
                      style={{ transition: "opacity 0.3s ease-out" }}
                    />
                  </g>
                );
              })}

              <style>{`
                @keyframes dash-animate {
                  to {
                    stroke-dashoffset: -10;
                  }
                }
              `}</style>
            </svg>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 pt-8 border-t border-border/50">
          {[
            {
              stat: "20+",
              title: "AI Agents Working Seamlessly",
              desc: "Personalized discovery, search, and checkout experiences for every shopper",
            },
            {
              stat: "5×",
              title: "Conversion Lift",
              desc: "AI-driven personalization proven to lift conversions up to 5×",
            },
            {
              stat: "+18%",
              title: "Revenue Impact",
              desc: "Retailers using AI-driven insights report 15–20% revenue growth",
            },
          ].map((item, i) => (
            <div key={i} className="relative group flex">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(175,80%,44%)] to-[hsl(190,95%,50%)] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              <div className="relative bg-card/40 border border-primary/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 flex flex-col justify-between w-full h-full text-center">
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                    {item.stat}
                  </div>
                  <div className="text-base md:text-lg text-foreground font-medium">
                    {item.title}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground/70 mt-4 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <p className="text-xs md:text-sm text-center text-muted-foreground/60 max-w-2xl leading-relaxed">
            Sources: McKinsey, Forrester, PwC, Deloitte, and IRP Commerce Reports (2023–2024)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
