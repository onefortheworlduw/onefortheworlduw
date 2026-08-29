import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Events | One For The World UW-Madison",
  description:
    "Check out past and upcoming events with One for the World at UW-Madison!",
};

export default function EventsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="relative min-h-[45vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/sovannkiry-sim-41fytYZ_-mM-unsplash.webp"
            alt="One for the World UW Events"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto py-16">
          <span className="text-[#2675F8] font-bold text-xs uppercase tracking-widest block mb-2">
            Campus Community
          </span>
          <h1 className="font-heading text-5xl sm:text-7xl uppercase tracking-wide text-white">
            CHAPTER EVENTS
          </h1>
          <p className="text-neutral-200 text-base sm:text-lg max-w-xl mx-auto mt-4">
            From giving games to educational trivia nights and campus tabling, explore how we engage students.
          </p>
        </div>
      </section>

      {/* Upcoming Events Callout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-neutral-900 text-white rounded-2xl p-8 text-center border border-neutral-800 shadow-xl">
          <span className="inline-block px-4 py-1 rounded-full bg-[#E2FF3E] text-black text-xs font-bold uppercase tracking-wider mb-4">
            Upcoming Semester
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase tracking-wide text-white mb-3">
            STAY TUNED FOR FALL 2026!
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base">
            We are currently planning an exciting lineup of speaker panels, giving games,
            and social events for the upcoming semester.
          </p>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="text-[#2675F8] font-bold text-xs uppercase tracking-widest block mb-2">
            Semester Recap
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl uppercase tracking-wide text-black">
            PAST EVENTS
          </h2>
        </div>

        <div className="space-y-16">
          {/* Event 1: Wisconsin Welcome */}
          <div className="brand-card">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-bold rounded-md">
                    1/24/26
                  </span>
                  <span className="text-xs font-semibold text-neutral-500">
                    Location: East Campus Mall
                  </span>
                </div>
                <h3 className="font-heading text-3xl uppercase tracking-wide text-black mb-4">
                  Wisconsin Welcome Trivia Night
                </h3>
                <p className="text-neutral-700 text-base leading-relaxed mb-4">
                  Our team hosted a trivia night with over 30 attendees, focusing on global health
                  and poverty statistics. Attendees learned about cost-effectiveness in global aid —
                  such as how just <b>$1</b> provides essential Vitamin A supplementation to prevent
                  childhood blindness through{" "}
                  <a
                    href="https://helenkellerintl.org/combatting-vitamin-a-deficiencies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2675F8] font-bold underline"
                  >
                    Helen Keller International
                  </a>
                  .
                </p>
              </div>
              <div className="flex gap-4 w-full lg:w-auto justify-center flex-wrap sm:flex-nowrap">
                <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/event_photos/wisconsinwelcome_4.webp"
                    alt="Wisconsin Welcome trivia night"
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    quality={80}
                    className="object-cover"
                  />
                </div>
                <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/event_photos/wisconsinwelcome_7.webp"
                    alt="Alex at Wisconsin Welcome"
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    quality={80}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Event 2: RSO Fair */}
          <div className="brand-card">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-bold rounded-md">
                    2/10/26 • 5–8 PM
                  </span>
                  <span className="text-xs font-semibold text-neutral-500">
                    Location: Kohl Center
                  </span>
                </div>
                <h3 className="font-heading text-3xl uppercase tracking-wide text-black mb-4">
                  UW-Madison RSO Fair
                </h3>
                <p className="text-neutral-700 text-base leading-relaxed mb-4">
                  We had dozens of great conversations with prospective Badgers interested in effective
                  altruism, high-impact philanthropy, and student leadership opportunities.
                </p>
              </div>
              <div className="flex gap-4 w-full lg:w-auto justify-center flex-wrap sm:flex-nowrap">
                <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/event_photos/rso__fair__table__luray__alex.webp"
                    alt="Luray and Alex at RSO fair"
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    quality={80}
                    className="object-cover"
                  />
                </div>
                <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/event_photos/rso__fair__table.webp"
                    alt="RSO fair booth"
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    quality={80}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Event 3: Tabling */}
          <div className="brand-card">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-bold rounded-md">
                    3/4/26
                  </span>
                  <span className="text-xs font-semibold text-neutral-500">
                    Location: 333 East Campus Mall
                  </span>
                </div>
                <h3 className="font-heading text-3xl uppercase tracking-wide text-black mb-4">
                  Greenbush Bakery Donut Fundraiser &amp; Tabling
                </h3>
                <p className="text-neutral-700 text-base leading-relaxed">
                  We connected with 29 visitors and raised $169 in donations through 45 delicious donuts
                  from Greenbush Bakery. After covering costs, we directed <b>$101.76</b> directly to
                  the top-tier charities One for the World supports!
                </p>
              </div>
              <div className="w-full lg:w-auto flex justify-center">
                <div className="relative w-64 h-48 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/event_photos/tabling.webp"
                    alt="Tabling at East Campus Mall"
                    fill
                    sizes="(max-width: 640px) 100vw, 256px"
                    quality={80}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Event 4: Semester Meetings & Socials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl">
              <span className="text-xs font-bold text-[#2675F8] block mb-1">2/16/26</span>
              <h4 className="font-heading text-2xl uppercase text-black mb-2">Kickoff Event</h4>
              <p className="text-xs text-neutral-500 mb-2">Room 4210, 333 East Campus Mall</p>
              <p className="text-sm text-neutral-600">
                Interactive discussions and activities exploring high-impact global giving.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl">
              <span className="text-xs font-bold text-[#2675F8] block mb-1">2/23/26</span>
              <h4 className="font-heading text-2xl uppercase text-black mb-2">First Meeting</h4>
              <p className="text-xs text-neutral-500 mb-2">Room 4210, 333 East Campus Mall</p>
              <p className="text-sm text-neutral-600">
                Welcoming new members to the OFTW community.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl">
              <span className="text-xs font-bold text-[#2675F8] block mb-1">3/9/26</span>
              <h4 className="font-heading text-2xl uppercase text-black mb-2">General Meeting 2</h4>
              <p className="text-xs text-neutral-500 mb-2">333 East Campus Mall</p>
              <p className="text-sm text-neutral-600">
                Deep dive into charity evaluation methodology with GiveWell research.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl">
              <span className="text-xs font-bold text-[#2675F8] block mb-1">3/16/26</span>
              <h4 className="font-heading text-2xl uppercase text-black mb-2">Giving Game Social</h4>
              <p className="text-xs text-neutral-500 mb-2">East Campus Mall, Room 4210</p>
              <p className="text-sm text-neutral-600">
                Members evaluated real charity case studies with simulated giving grants.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl">
              <span className="text-xs font-bold text-[#2675F8] block mb-1">4/12/26</span>
              <h4 className="font-heading text-2xl uppercase text-black mb-2">Nitty Gritty Social</h4>
              <p className="text-xs text-neutral-500 mb-2">Nitty Gritty, 6 P.M.</p>
              <p className="text-sm text-neutral-600">
                Casual member dinner and bonding over burgers.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl sm:col-span-2 lg:col-span-1">
              <span className="text-xs font-bold text-[#E2FF3E] bg-black px-2 py-0.5 rounded inline-block mb-1">
                4/20/26
              </span>
              <h4 className="font-heading text-2xl uppercase text-black mb-2">
                Pledges &amp; End of Year Celebration
              </h4>
              <p className="text-xs text-neutral-500 mb-2">East Campus Mall, Room 4210</p>
              <p className="text-sm text-neutral-600">
                Celebrating graduating seniors, chapter milestones, and pledges made!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
