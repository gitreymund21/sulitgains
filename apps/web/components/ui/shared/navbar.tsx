"use client";

import { Button } from "@/components/ui/button";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
                <Dumbbell className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">SulitGains</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Features
              </a>
              <a
                href="#meals"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Meal Library
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Pricing
              </a>
              <Button className="rounded-full">Download App</Button>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pt-4 pb-2 space-y-4">
              <a
                href="#features"
                className="block text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#meals"
                className="block text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Meal Library
              </a>
              <a
                href="#pricing"
                className="block text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <Button className="w-full rounded-full">Download App</Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
