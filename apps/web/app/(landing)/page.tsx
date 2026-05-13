import React from "react";
import { HeroSection } from "./_components/hero-section";
import { FeaturesSection } from "./_components/features-section";
import { MealSuggestionSection } from "./_components/meal-suggestion-sectiion";

export default function page() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <MealSuggestionSection />
    </div>
  );
}
