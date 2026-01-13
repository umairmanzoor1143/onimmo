import { Dictionary } from "@/lib/dictionaries";

interface SellProcessSectionProps {
  dictionary: Dictionary;
}
const steps = [
  {
    id: "01",
    title: "Free Valuation",
    desc: "We assess your property’s market value using our expertise and local knowledge.",
    img: "/assets/sell-step-1.png",
  },
  {
    id: "02",
    title: "Professional Marketing",
    desc: "Your property is presented with professional photos, virtual tours, and targeted advertising.",
    img: "/assets/sell-step-2.png",
  },
  {
    id: "03",
    title: "Buyer Selection",
    desc: "We qualify potential buyers and handle all viewings and negotiations on your behalf.",
    img: "/assets/sell-step-3.png",
  },
  {
    id: "04",
    title: "Successful Closing",
    desc: "We guide you through the entire process until the keys are handed over.",
    img: "/assets/sell-step-4.png",
  },
];
export default function SellProcessSection({ dictionary }: SellProcessSectionProps) {
  const t = dictionary.sellPage.process;

  return (
    <section className="bg-background py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Zig-zag connector (desktop only) */}
        <svg
          className="pointer-events-none absolute left-[6%] right-[6%] top-[110px] hidden h-[120px] w-[88%] lg:block"
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
        >
          <path
            d="
              M 0 60
              Q 125 10 250 60
              T 500 60
              T 750 60
              T 1000 60
            "
            fill="none"
            stroke="rgba(100,116,139,0.45)"
            strokeWidth="2"
            strokeDasharray="6 10"
          />
        </svg>

        <div className="grid grid-cols-1 gap-16 text-center sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.id} className="relative z-10">
              {/* icon */}
              <div className="relative mx-auto mb-6 h-[180px] w-[180px]">
                <img
                  src={step.img}
                  alt={step.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mb-3 text-xl font-extrabold text-white">
                {step.title}
              </h3>

              <p className="mx-auto max-w-[260px] text-sm leading-relaxed text-slate-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
