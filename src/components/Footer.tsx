import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-xl font-bold tracking-tight">
              Iron Pulse Fitness
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Forge Your Strength, Ignite Your Potential
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Navigation
            </h3>
            <nav className="mt-4">
              <ul className="space-y-3">
                <li>
                  <a
                    href=#hero
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=#about
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href=#testimonials
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Services
            </h3>
            <nav className="mt-4">
              <ul className="space-y-3">
                <li>
                  <a
                    href=#services
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href=#contact
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:hello@ironpulsefitness.com`}
                  className="transition-colors hover:text-foreground"
                >
                  hello@ironpulsefitness.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:(555) 123-4567`}
                  className="transition-colors hover:text-foreground"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>123 Main St, Austin, TX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © 2026 Iron Pulse Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}