import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join One for the World at UW-Madison! Take the 1% pledge, calculate your lifetime impact, explore top-rated charities, and become a student member.",
  alternates: {
    canonical: "/involve",
  },
  keywords: [
    "Get involved One for the World",
    "1% pledge sign up",
    "UW Madison student charity club",
    "GiveWell impact calculator",
    "student philanthropy Wisconsin",
  ],
  openGraph: {
    title: "Get Involved | One For The World UW-Madison",
    description:
      "Join One for the World at UW-Madison! Take the 1% pledge, calculate your impact, and become a student leader.",
    url: "https://onefortheworlduw.github.io/involve",
  },
};

export default function InvolvePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center justify-center text-center px-4 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <Image
            src="/images/hannah-busing-Zyx1bK9mqmA-unsplash.webp"
            alt="Community hands"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto py-16">
          <h1 className="font-heading text-5xl sm:text-7xl uppercase tracking-wide text-white">
            GET INVOLVED
          </h1>
          <p className="text-neutral-200 text-base sm:text-lg max-w-xl mx-auto mt-3">
            Simple steps to start saving lives and building a lifelong habit of high-impact philanthropy.
          </p>
        </div>
      </section>

      {/* Empowering Hook */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl sm:text-6xl uppercase tracking-wide text-black mb-4">
            HAVE YOU EVER SAVED A LIFE?
          </h2>
          <p className="text-neutral-700 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Through the world&apos;s most effective global health programs, saving a human life
            costs approximately <b>$4,500</b>. By pledging just 1% of your future income,
            you will protect hundreds of people and directly save lives throughout your career.
          </p>
        </div>
      </section>

      {/* 4 Step Action Guide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-6xl uppercase tracking-wide text-black">
            HOW YOU CAN TAKE ACTION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Step 1 */}
          <div className="brand-card">
            <div className="w-10 h-10 rounded-full bg-black text-[#E2FF3E] font-heading text-xl flex items-center justify-center mb-4">
              01
            </div>
            <h3 className="font-heading text-2xl uppercase tracking-wide text-black mb-3">
              Explore Our Partners
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              Discover how our partner charities were rigorously vetted by GiveWell based on
              cost-effectiveness, transparency, and evidence of impact.
            </p>
            <a
              href="https://1fortheworld.org/our-partners"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2675F8] font-bold text-sm underline hover:text-black"
            >
              Read Partner Overview →
            </a>
          </div>

          {/* Step 2 */}
          <div className="brand-card">
            <div className="w-10 h-10 rounded-full bg-black text-[#E2FF3E] font-heading text-xl flex items-center justify-center mb-4">
              02
            </div>
            <h3 className="font-heading text-2xl uppercase tracking-wide text-black mb-3">
              Calculate Your Impact
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              Use the official OFTW Impact Calculator to see how a 1% pledge based on your future
              estimated earnings translates to treatments, nets, and lives saved.
            </p>
            <a
              href="https://1fortheworld.org/impact-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2675F8] font-bold text-sm underline hover:text-black"
            >
              Open Impact Calculator →
            </a>
          </div>

          {/* Step 3 */}
          <div className="brand-card">
            <div className="w-10 h-10 rounded-full bg-black text-[#E2FF3E] font-heading text-xl flex items-center justify-center mb-4">
              03
            </div>
            <h3 className="font-heading text-2xl uppercase tracking-wide text-black mb-3">
              Take The 1% Pledge
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              Make your commitment online. Remember: you can pledge now as a student and begin
              fulfilling your pledge once you start your post-graduation career.
            </p>
            <a
              href="https://1fortheworld.donational.org/oftw-uw-madison/choose-pledge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2675F8] font-bold text-sm underline hover:text-black"
            >
              Pledge Portal →
            </a>
          </div>

          {/* Step 4 */}
          <div className="brand-card">
            <div className="w-10 h-10 rounded-full bg-black text-[#E2FF3E] font-heading text-xl flex items-center justify-center mb-4">
              04
            </div>
            <h3 className="font-heading text-2xl uppercase tracking-wide text-black mb-3">
              Join Our Chapter
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              Connect with fellow Badgers, attend social events, participate in giving games,
              and gain leadership experience on our chapter team.
            </p>
            <a
              href="https://forms.gle/xBHe5JDW9qnTGEoa9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2675F8] font-bold text-sm underline hover:text-black"
            >
              Sign Up For Our Chapter →
            </a>
          </div>
        </div>

        {/* Big Join CTA Banner */}
        <div className="mt-16 bg-black text-white rounded-3xl p-10 sm:p-14 text-center">
          <h2 className="font-heading text-4xl sm:text-6xl uppercase tracking-wide mb-4">
            READY TO JOIN ONE FOR THE WORLD UW?
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Sign up for our email newsletter and membership roster to receive event invites,
            meeting schedules, and chapter updates.
          </p>
          <a
            href="https://forms.gle/xBHe5JDW9qnTGEoa9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <span>Sign Up Now</span>
          </a>
        </div>
      </section>
    </div>
  );
}
