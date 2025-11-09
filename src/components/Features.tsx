import {
  Brain,
  MessageSquare,
  Image,
  Sparkles,
  FileText,
  BarChart3,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// --- SOLUTIONS SECTION ---
const features = [
  {
    icon: Brain,
    title: "Adaptive Discovery",
    description: "Understands real intent through chat, visuals, and context.",
  },
  {
    icon: MessageSquare,
    title: "Unified Conversations",
    description: "Seamless journeys from query to checkout in one flow.",
  },
  {
    icon: Image,
    title: "Visual Intelligence",
    description: "Finds similar products by look and context—instantly.",
  },
  {
    icon: Sparkles,
    title: "Predictive Personalization",
    description: "Learns what converts and adapts in real time.",
  },
  {
    icon: FileText,
    title: "Dynamic Content",
    description: "Tailors product text and visuals to audience and location.",
  },
  {
    icon: BarChart3,
    title: "Retail Intelligence",
    description: "Turns insights into forecasts, actions, and growth.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight pb-4">
            Intelligence That Shapes
            <span className="block text-gradient mt-4 pb-2">
              Every Shopping Moment
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground">
            From discovery to decision — Opura connects how customers shop
            with how merchants grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-peacock"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-peacock/10 flex items-center justify-center group-hover:bg-gradient-peacock/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;