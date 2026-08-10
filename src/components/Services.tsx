export default function Services() {
  const services = [
    {
      image: "https://placehold.co/960x640/e2e8f0/475569?text=services",
      title: "Personal Training",
      description: "One-on-one sessions tailored to your goals, with expert coaching on form, technique, and progressive overload to get you results safely.",
    },
    {
      image: "https://placehold.co/960x640/e2e8f0/475569?text=services",
      title: "Small Group Classes",
      description: "High-energy, coach-led workouts in groups of 10 or fewer, blending strength, conditioning, and cardio for a fun, supportive community feel.",
    },
    {
      image: "https://placehold.co/960x640/e2e8f0/475569?text=services",
      title: "Nutrition Coaching",
      description: "Practical, personalized guidance on fueling your body for performance and recovery, with simple plans that fit your lifestyle.",
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          What We Offer
        </h2>

        <div className="mt-12 flex flex-col gap-16 sm:mt-16 lg:gap-24">
          {services.map(({ image, title, description }, index) => (
            <div
              key={title}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div className={index % 2 === 1 ? "lg:order-last" : ""}>
                <img
                  src={image}
                  alt={title}
                  className="aspect-[4/3] w-full rounded-lg border border-border object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:text-right" : ""}>
                <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">{title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}