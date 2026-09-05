import { Metadata } from "next";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { getSafeImageUrl } from "@/sanity/lib/image";
import { EVENTS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore upcoming giving games, tabling events, speaker panels, and past activities with One for the World at UW-Madison.",
  alternates: {
    canonical: "/events",
  },
  keywords: [
    "One for the World events",
    "UW Madison philanthropy events",
    "UW Madison giving games",
    "OFTW UW meetings",
    "effective altruism campus events",
  ],
  openGraph: {
    title: "Events | One For The World UW-Madison",
    description:
      "Explore upcoming giving games, tabling, and speaker events with One for the World at UW-Madison.",
    url: "https://onefortheworlduw.github.io/events",
  },
};

interface SanityEvent {
  _id: string;
  title: string;
  date: string;
  location?: string;
  description?: string;
  images?: any[];
  isUpcoming?: boolean;
  order?: number;
}

function parseEventDate(dateStr?: string): number {
  if (!dateStr) return Infinity;

  // Match M/D/YY, MM/DD/YY, M/D/YYYY, MM/DD/YYYY
  const mdyMatch = dateStr.match(/\b(\d{1,2})\/(\d{1,2})\/(\d{2,4})\b/);
  if (mdyMatch) {
    const month = parseInt(mdyMatch[1], 10) - 1;
    const day = parseInt(mdyMatch[2], 10);
    let year = parseInt(mdyMatch[3], 10);
    if (year < 100) {
      year += 2000;
    }
    const d = new Date(year, month, day);
    if (!isNaN(d.getTime())) return d.getTime();
  }

  // Match YYYY-MM-DD
  const ymdMatch = dateStr.match(/\b(\d{4})[-/](\d{1,2})[-/](\d{1,2})\b/);
  if (ymdMatch) {
    const year = parseInt(ymdMatch[1], 10);
    const month = parseInt(ymdMatch[2], 10) - 1;
    const day = parseInt(ymdMatch[3], 10);
    const d = new Date(year, month, day);
    if (!isNaN(d.getTime())) return d.getTime();
  }

  // Match text dates like "November 3, 2026" or "Nov 3, 2026"
  const textDateMatch = dateStr.match(
    /\b(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{1,2})(?:st|nd|rd|th)?,?\s*(\d{2,4})?\b/i
  );
  if (textDateMatch) {
    const parsed = Date.parse(textDateMatch[0]);
    if (!isNaN(parsed)) return parsed;
  }

  const cleaned = dateStr.replace(/(Time TBD|TBD|•.*|[-–].*)/i, "").trim();
  const parsed = Date.parse(cleaned);
  if (!isNaN(parsed)) return parsed;

  return Infinity;
}

export default async function EventsPage() {
  let events: SanityEvent[] = [];
  try {
    const { data } = await sanityFetch({ query: EVENTS_QUERY });
    if (Array.isArray(data)) {
      events = data as SanityEvent[];
    }
  } catch (error) {
    console.warn("Failed to fetch events from Sanity:", error);
  }

  const currentEvents = events
    .filter((e) => e.isUpcoming)
    .sort((a, b) => {
      const dateA = parseEventDate(a.date);
      const dateB = parseEventDate(b.date);
      if (dateA !== dateB) {
        return dateA - dateB;
      }
      return (a.order ?? 0) - (b.order ?? 0);
    });
  const pastEvents = events.filter((e) => !e.isUpcoming);

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
          <h1 className="font-heading text-5xl sm:text-7xl uppercase tracking-wide text-white">
            CHAPTER EVENTS
          </h1>
          <p className="text-neutral-200 text-base sm:text-lg max-w-xl mx-auto mt-4">
            From giving games to educational trivia nights and campus tabling, explore how we engage students.
          </p>
        </div>
      </section>

      {/* Current Events Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="font-heading text-4xl sm:text-6xl uppercase tracking-wide text-black">
            CURRENT EVENTS
          </h2>
        </div>

        {currentEvents.length > 0 ? (
          <div className="space-y-6">
            {currentEvents.map((e) => (
              <div
                key={e._id}
                className="brand-card border-2 border-[#2675F8]/30 shadow-md hover:border-[#2675F8] transition-all p-6 sm:p-8"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center justify-between w-full">
                  <div className="flex-1 w-full text-left">
                    <div className="flex items-center gap-2.5 mb-3 flex-wrap justify-start">
                      <span className="px-3 py-1 bg-[#2675F8] text-white text-xs font-bold rounded-md whitespace-nowrap">
                        {e.date}
                      </span>
                      {e.location && (
                        <span className="text-xs font-semibold text-neutral-700 bg-neutral-100 px-3 py-1 rounded-md whitespace-nowrap">
                          📍 {e.location}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wide text-black mb-2 text-left">
                      {e.title}
                    </h3>
                    {e.description && (
                      <p className="text-neutral-700 text-sm sm:text-base leading-relaxed text-left whitespace-pre-line">
                        {e.description}
                      </p>
                    )}
                  </div>
                  {e.images && e.images.length > 0 && (
                    <div className="flex gap-3 w-full lg:w-auto justify-start flex-wrap sm:flex-nowrap pt-2 lg:pt-0">
                      {e.images.slice(0, 2).map((img, i) => {
                        const imgUrl = getSafeImageUrl(img, 400, 400);
                        if (!imgUrl) return null;
                        return (
                          <div
                            key={img._key || i}
                            className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden shadow-md flex-shrink-0"
                          >
                            <Image
                              src={imgUrl}
                              alt={`${e.title} photo ${i + 1}`}
                              fill
                              sizes="(max-width: 640px) 144px, 176px"
                              quality={80}
                              className="object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-neutral-50 rounded-2xl p-8 text-center border border-dashed border-neutral-300">
            <p className="text-neutral-600 text-base">
              No current events scheduled at the moment. Check back soon or follow our social channels for announcements!
            </p>
          </div>
        )}
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto border-t border-neutral-200" />

      {/* Past Events Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-heading text-4xl sm:text-6xl uppercase tracking-wide text-black">
            PAST EVENTS
          </h2>
        </div>

        <div className="space-y-12">
          {/* Featured Large Events with Images */}
          {pastEvents
            .filter((e) => e.images && e.images.length > 0)
            .map((e) => (
              <div key={e._id} className="brand-card p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center justify-between w-full">
                  <div className="flex-1 w-full text-left">
                    <div className="flex items-center gap-2.5 mb-3 flex-wrap justify-start">
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-bold rounded-md whitespace-nowrap">
                        {e.date}
                      </span>
                      {e.location && (
                        <span className="text-xs font-semibold text-neutral-500 whitespace-nowrap">
                          📍 {e.location}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wide text-black mb-3 text-left">
                      {e.title}
                    </h3>
                    <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-4 text-left whitespace-pre-line">
                      {e.description}
                    </p>
                  </div>
                  {e.images && e.images.length > 0 && (
                    <div className="flex gap-3 w-full lg:w-auto justify-start flex-wrap sm:flex-nowrap pt-2 lg:pt-0">
                      {e.images.slice(0, 2).map((img, i) => {
                        const imgUrl = getSafeImageUrl(img, 400, 400);
                        if (!imgUrl) return null;
                        return (
                          <div
                            key={img._key || i}
                            className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden shadow-md flex-shrink-0"
                          >
                            <Image
                              src={imgUrl}
                              alt={`${e.title} photo ${i + 1}`}
                              fill
                              sizes="(max-width: 640px) 144px, 176px"
                              quality={80}
                              className="object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}

          {/* Grid of Other Meetings and Socials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents
              .filter((e) => !e.images || e.images.length === 0)
              .map((e) => (
                <div key={e._id} className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl text-left">
                  <span className="text-xs font-bold text-[#2675F8] block mb-1">{e.date}</span>
                  <h4 className="font-heading text-2xl uppercase text-black mb-2">{e.title}</h4>
                  {e.location && <p className="text-xs text-neutral-500 mb-2">📍 {e.location}</p>}
                  <p className="text-sm text-neutral-600 leading-relaxed">{e.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
