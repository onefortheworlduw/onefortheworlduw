import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <Image
            src="/images/homepage-image.webp"
            alt="UW-Madison students"
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
              href="https://1fortheworld.donational.org/take-the-pledge"
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
              <div className="inline-block px-3 py-1 bg-[#2675F8]/10 text-[#2675F8] text-xs font-bold uppercase tracking-wider rounded-md mb-4">
                Our Core Mission
              </div>
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
                src="/images/seth-doyle-zf9_yiAekJs-unsplash.webp"
                alt="Children in need of global aid"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
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
            <span className="text-[#2675F8] font-bold text-xs uppercase tracking-widest block mb-2">
              Cost-Effective Giving
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl uppercase tracking-wide text-black mb-4">
              WHERE YOUR MONEY GOES
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg">
              We partner with charities proven to deliver the highest measurable impact per dollar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Charity 1 */}
            <div className="brand-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#E2FF3E] text-black text-xs font-bold rounded-full whitespace-nowrap flex-shrink-0">
                    $7 per treatment
                  </span>
                  <span className="text-xs font-bold text-[#2675F8] uppercase tracking-wider whitespace-nowrap">
                    Malaria Prevention
                  </span>
                </div>
                <h3 className="font-heading text-2xl uppercase mb-3 text-black">
                  <a
                    href="https://www.malariaconsortium.org/implementation/seasonal-malaria-chemoprevention-smc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2675F8] transition-colors"
                  >
                    Malaria Consortium (SMC Program)
                  </a>
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Distributes preventive antimalarial medications to children aged 3–59 months
                  during peak transmission season to prevent severe illness and death.
                </p>
              </div>
            </div>

            {/* Charity 2 */}
            <div className="brand-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#E2FF3E] text-black text-xs font-bold rounded-full whitespace-nowrap flex-shrink-0">
                    ~$17 per child vaccinated
                  </span>
                  <span className="text-xs font-bold text-[#2675F8] uppercase tracking-wider whitespace-nowrap">
                    Immunization
                  </span>
                </div>
                <h3 className="font-heading text-2xl uppercase mb-3 text-black">
                  <a
                    href="https://www.newincentives.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2675F8] transition-colors"
                  >
                    New Incentives
                  </a>
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Increases routine childhood vaccination rates through conditional cash transfers,
                  raising public awareness and reducing lethal vaccine stockouts.
                </p>
              </div>
            </div>

            {/* Charity 3 */}
            <div className="brand-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#E2FF3E] text-black text-xs font-bold rounded-full whitespace-nowrap flex-shrink-0">
                    $1 per supplement
                  </span>
                  <span className="text-xs font-bold text-[#2675F8] uppercase tracking-wider whitespace-nowrap">
                    Blindness Prevention
                  </span>
                </div>
                <h3 className="font-heading text-2xl uppercase mb-3 text-black">
                  <a
                    href="https://helenkellerintl.org/combatting-vitamin-a-deficiencies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2675F8] transition-colors"
                  >
                    Helen Keller International (Vitamin A)
                  </a>
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Prevents childhood blindness and mortality in impoverished regions through
                  cost-effective Vitamin A supplementation.
                </p>
              </div>
            </div>

            {/* Charity 4 */}
            <div className="brand-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#E2FF3E] text-black text-xs font-bold rounded-full whitespace-nowrap flex-shrink-0">
                    $2 per bed net
                  </span>
                  <span className="text-xs font-bold text-[#2675F8] uppercase tracking-wider whitespace-nowrap">
                    Vector Control
                  </span>
                </div>
                <h3 className="font-heading text-2xl uppercase mb-3 text-black">
                  <a
                    href="https://www.againstmalaria.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2675F8] transition-colors"
                  >
                    Against Malaria Foundation (AMF)
                  </a>
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Funds, distributes, and monitors long-lasting insecticidal nets to protect
                  vulnerable families against malaria-carrying mosquitoes.
                </p>
              </div>
            </div>
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
