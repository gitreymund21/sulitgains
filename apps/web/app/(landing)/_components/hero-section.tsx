"use client";

import { Button } from "@/components/ui/button";
import { Dumbbell, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-8">
          <Dumbbell className="h-4 w-4" />
          <span className="text-sm font-medium">Fitness + Budget Tracking</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight mb-6">
          Get Fit Without
          <br />
          <span className="text-accent">Breaking the Bank</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Track your macros and budget in one app. Get sulit meal suggestions
          from your favorite Filipino food spots — hitting your protein goals
          has never been this tipid.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="text-base px-8 py-6 rounded-full">
            Download Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 rounded-full border-2"
          >
            See How It Works
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border">
          {/* <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20">
              <TrendingUp className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">50K+</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20">
              <span className="text-xl">🍗</span>
            </div>
            <div>
              <p className="text-2xl font-bold">1M+</p>
              <p className="text-sm text-muted-foreground">Meals Tracked</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20">
              <span className="text-xl">₱</span>
            </div>
            <div>
              <p className="text-2xl font-bold">₱15K</p>
              <p className="text-sm text-muted-foreground">
                Avg. Monthly Savings
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
