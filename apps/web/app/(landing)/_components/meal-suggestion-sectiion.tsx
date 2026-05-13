"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Flame,
  Beef,
  Wheat,
  Droplets,
  Star,
  Plus,
  ThumbsUp,
} from "lucide-react";

export function MealSuggestionSection() {
  return (
    <section className="px-6 py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            Featured Meal
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            Today&apos;s Sulit Pick
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            High protein, budget-friendly meals from restaurants you know and
            love.
          </p>
        </div>

        {/* Meal Card */}
        <div className="max-w-lg mx-auto">
          <Card className="overflow-hidden border-2 shadow-xl">
            {/* Restaurant Header */}
            <CardHeader className="bg-[#E31837] text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <span className="text-[#E31837] font-bold text-lg">J</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Jollibee</p>
                    <p className="text-sm text-white/80">Fast Food</p>
                  </div>
                </div>
                <Badge className="bg-white/20 text-white hover:bg-white/30 border-0">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Best Value
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              {/* Meal Info */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold">2pc Chickenjoy w/ Rice</h3>
                  <span className="text-2xl font-bold text-accent">₱159</span>
                </div>
                <p className="text-muted-foreground">
                  Crispy fried chicken thigh and drumstick with steamed rice. A
                  protein-packed classic!
                </p>
              </div>

              {/* Macros Grid */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="text-center p-3 rounded-xl bg-secondary">
                  <Flame className="h-5 w-5 mx-auto mb-1 text-orange-500" />
                  <p className="text-lg font-bold">650</p>
                  <p className="text-xs text-muted-foreground">Calories</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-secondary">
                  <Beef className="h-5 w-5 mx-auto mb-1 text-red-500" />
                  <p className="text-lg font-bold">38g</p>
                  <p className="text-xs text-muted-foreground">Protein</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-secondary">
                  <Wheat className="h-5 w-5 mx-auto mb-1 text-amber-600" />
                  <p className="text-lg font-bold">52g</p>
                  <p className="text-xs text-muted-foreground">Carbs</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-secondary">
                  <Droplets className="h-5 w-5 mx-auto mb-1 text-blue-500" />
                  <p className="text-lg font-bold">28g</p>
                  <p className="text-xs text-muted-foreground">Fats</p>
                </div>
              </div>

              {/* Value Metrics */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-accent/10 mb-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Cost per gram protein
                  </p>
                  <p className="text-xl font-bold text-accent">₱4.18/g</p>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Sulit Score</p>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-5 w-5 text-accent fill-accent" />
                    <p className="text-xl font-bold text-accent">92/100</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button className="flex-1 rounded-full" size="lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Log This Meal
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-4"
                  size="lg"
                >
                  View More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <p className="text-center text-muted-foreground mt-8">
          100+ more meal suggestions from Mang Inasal, KFC, McDonald&apos;s, and
          more!
        </p>
      </div>
    </section>
  );
}
