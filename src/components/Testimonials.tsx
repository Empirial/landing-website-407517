import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center rounded-lg border border-border bg-card p-8 text-card-foreground shadow-sm sm:p-10">
            <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
            <p className="mt-6 text-xl font-medium leading-relaxed text-card-foreground">
              {"The trainers here actually care about your progress. I've gained 15 pounds of muscle in 6 months thanks to their personal training programs."}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                alt="Marcus Lee"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  {"Marcus Lee"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {"Member for 1 year"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
              <p className="text-sm leading-relaxed text-card-foreground">
                {"Group classes are the highlight of my week. The energy is unmatched, and I've never felt stronger or more motivated."}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                  alt="Sofia Ramirez"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {"Sofia Ramirez"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {"Group class regular"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
              <p className="text-sm leading-relaxed text-card-foreground">
                {"I was intimidated to start, but the coaches made me feel right at home. Down 20 pounds and counting — this place changed my life."}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                  alt="James Carter"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {"James Carter"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {"New member, 3 months"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}