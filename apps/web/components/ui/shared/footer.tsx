import { Dumbbell } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo and Tagline */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-foreground">
                <Dumbbell className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold">SulitGains</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              The only fitness app designed for Pinoys who want to get fit
              without breaking the bank.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Meal Library
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} SulitGains. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
