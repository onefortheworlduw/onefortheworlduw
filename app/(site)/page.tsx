import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { CHARITIES_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Fighting Extreme Poverty Through Effective Giving",
  description:
    "Join One for the World at UW-Madison! We educate students on evidence-based global aid and empower Badgers to take the 1% pledge for top-tier charities.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "One for the World UW",
    "One for the World Madison",
    "1% pledge UW-Madison",
    "effective philanthropy UW",
    "GiveWell student club Madison",
    "effective giving Wisconsin",
  ],
  openGraph: {
    title: "One For The World UW-Madison | High-Impact Giving & Philanthropy",
    description:
      "We educate students on evidence-based global aid and empower them to take the 1% pledge while building a community of future leaders.",
    url: "https://onefortheworlduw.github.io/",
  },
};

const fallbackCharities = [
  {
    _id: "charity-malaria-consortium",
    name: "Malaria Consortium (SMC Program)",
    statBadge: "$7 per treatment",
    category: "Malaria Prevention",
    description:
      "Distributes preventive antimalarial medications to children aged 3–59 months during peak transmission season to prevent severe illness and death.",
    link: "https://www.malariaconsortium.org/implementation/seasonal-malaria-chemoprevention-smc",
  },
  {
    _id: "charity-new-incentives",
    name: "New Incentives",
    statBadge: "~$17 per child vaccinated",
    category: "Immunization",
    description:
      "Increases routine childhood vaccination rates through conditional cash transfers, raising public awareness and reducing lethal vaccine stockouts.",
    link: "https://www.newincentives.org/",
  },
  {
    _id: "charity-helen-keller-intl",
    name: "Helen Keller International (Vitamin A)",
    statBadge: "$1 per supplement",
    category: "Blindness Prevention",
    description:
      "Prevents childhood blindness and mortality in impoverished regions through cost-effective Vitamin A supplementation.",
    link: "https://helenkellerintl.org/combatting-vitamin-a-deficiencies/",
  },
  {
    _id: "charity-against-malaria-foundation",
    name: "Against Malaria Foundation (AMF)",
    statBadge: "$2 per bed net",
    category: "Vector Control",
    description:
      "Funds, distributes, and monitors long-lasting insecticidal nets to protect vulnerable families against malaria-carrying mosquitoes.",
    link: "https://www.againstmalaria.com/",
  },
];

interface SanityCharity {
  _id: string;
  name: string;
  statBadge: string;
  category: string;
  description: string;
  link: string;
  order?: number;
}

export default async function HomePage() {
  let sanityCharities: SanityCharity[] = [];
  try {
    const { data } = await sanityFetch({ query: CHARITIES_QUERY });
    if (Array.isArray(data) && data.length > 0) {
      sanityCharities = data as SanityCharity[];
    }
  } catch (error) {
    console.warn("Failed to fetch charities from Sanity:", error);
  }

  const charities =
    sanityCharities && sanityCharities.length > 0 ? sanityCharities : fallbackCharities;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <Image
            src="/images/seth-doyle-zf9_yiAekJs-unsplash.webp"
            alt="Children in need of global aid"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto py-16">
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none mb-6">
            FIGHTING EXTREME POVERTY THROUGH EFFECTIVE GIVING
          </h1>
          <p className="text-lg sm:text-xl text-neutral-200 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            We educate students on evidence-based global aid and empower them to
            take the 1% pledge while building a community of future leaders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/involve" className="btn-primary">
              <span>Get Involved</span>
            </Link>
            <a
              href="https://1fortheworld.donational.org/oftw-uw-madison/choose-pledge"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Take The 1% Pledge
            </a>
          </div>
        </div>
      </section>

      {/* Impact Metric Callout */}
      <section className="bg-neutral-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-y border-neutral-800">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[#E2FF3E] font-bold text-xs uppercase tracking-widest block mb-2">
            The Reality &amp; Opportunity
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase tracking-wide mb-4">
            EVERY DAY, OVER 13,000 CHILDREN DIE DUE TO PREVENTABLE, POVERTY-RELATED CAUSES
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            One for the World at UW-Madison is dedicated to changing this reality.
            We use rigorous data to direct donations to high-impact charities where
            every dollar saves and transforms lives.
          </p>
        </div>
      </section>

      {/* The 1% Pledge */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl sm:text-6xl text-black uppercase leading-none mb-6">
                WHAT IS THE 1% PLEDGE?
              </h2>
              <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed">
                <p>
                  The 1% pledge is a lifelong commitment to donate 1% of your income
                  to the world&apos;s most cost-effective, evidence-backed charities.
                </p>
                <p className="p-4 bg-neutral-50 rounded-r-xl rounded-l-none border-l-4 border-[#2675F8] text-neutral-900 font-medium">
                  <strong>Commit now, pay later:</strong> You can make your commitment
                  today as a student and start donating only when you enter your career.
                </p>
                <p>
                  100% of your contributions are distributed directly between top-tier charities
                  vetted and evaluated by independent charity evaluator{" "}
                  <a
                    href="https://www.givewell.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2675F8] font-bold underline hover:text-black transition-colors"
                  >
                    GiveWell
                  </a>
                  .
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://1fortheworld.org/impact-calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Calculate Your Impact</span>
                </a>
              </div>
            </div>
            <div className="relative h-[380px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-100">
              <Image
                src="/images/homepage-image.webp"
                alt="UW-Madison students"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where Your Money Goes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl sm:text-6xl uppercase tracking-wide text-black mb-4">
              WHERE YOUR MONEY GOES
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg">
              We partner with charities proven to deliver the highest measurable impact per dollar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {charities.map((charity) => (
              <div key={charity._id} className="brand-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                    <span className="px-3 py-1 bg-[#E2FF3E] text-black text-xs font-bold rounded-full whitespace-nowrap flex-shrink-0">
                      {charity.statBadge}
                    </span>
                    <span className="text-xs font-bold text-[#2675F8] uppercase tracking-wider whitespace-nowrap">
                      {charity.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl uppercase mb-3 text-black">
                    <a
                      href={charity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#2675F8] transition-colors"
                    >
                      {charity.name}
                    </a>
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {charity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-6xl uppercase tracking-wide mb-6">
            READY TO MAKE A MEASURABLE IMPACT?
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            Join the UW-Madison chapter of One for the World and start your journey
            of high-impact philanthropy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/involve" className="btn-primary">
              <span>Get Involved</span>
            </Link>
            <a
              href="https://forms.gle/xBHe5JDW9qnTGEoa9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Sign Up For Our Chapter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
