import { Card, CardContent } from "@/components/ui/card";
import {
  Wallet,
  Target,
  Dumbbell,
  PieChart,
  Calendar,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Daily Budget Limits",
    description:
      "Set your food budget per day or week. We&apos;ll suggest meals that fit your wallet.",
  },
  {
    icon: Target,
    title: "Macro Goals",
    description:
      "Set protein, carbs, and fat targets. Find meals that match your fitness goals.",
  },
  {
    icon: PieChart,
    title: "Cost Per Macro",
    description:
      "See exactly how much you&apos;re paying per gram of protein. Maximize your gains per peso.",
  },
  {
    icon: Dumbbell,
    title: "Workout Planner",
    description:
      "Simple, effective routines designed for student schedules and campus gym availability.",
  },
  {
    icon: Calendar,
    title: "Weekly Meal Plans",
    description:
      "Plan your week ahead with budget-optimized meal suggestions for each day.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description:
      "Smart suggestions based on your eating habits, preferences, and remaining budget.",
  },
];

export function FeaturesSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            Budget Tracking That
            <br />
            <span className="text-accent">Actually Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Designed for Pinoys who want to get fit without spending a fortune
            on expensive meal preps.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 mb-4 group-hover:bg-accent/30 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
