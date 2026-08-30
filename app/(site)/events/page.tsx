import { Metadata } from "next";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { urlForImage } from "@/sanity/lib/image";
import { EVENTS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Events | One For The World UW-Madison",
  description:
    "Check out current and past events with One for the World at UW-Madison!",
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

  const currentEvents = events.filter((e) => e.isUpcoming);
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#E2FF3E] animate-pulse" />
            <h2 className="font-heading text-4xl sm:text-6xl uppercase tracking-wide text-black">
              CURRENT EVENTS
            </h2>
          </div>
        </div>

        {currentEvents.length > 0 ? (
          <div className="space-y-8">
            {currentEvents.map((e) => (
              <div key={e._id} className="brand-card border-2 border-[#2675F8]/30 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="px-3 py-1 bg-[#2675F8] text-white text-xs font-bold rounded-md">
                        {e.date}
                      </span>
                      {e.location && (
                        <span className="text-xs font-semibold text-neutral-600 bg-neutral-100 px-3 py-1 rounded-md">
                          📍 {e.location}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-3xl uppercase tracking-wide text-black mb-4">
                      {e.title}
                    </h3>
                    {e.description && (
                      <p className="text-neutral-700 text-base leading-relaxed whitespace-pre-line">
                        {e.description}
                      </p>
                    )}
                  </div>
                  {e.images && e.images.length > 0 && (
                    <div className="flex gap-4 w-full lg:w-auto justify-center flex-wrap sm:flex-nowrap">
                      {e.images.slice(0, 2).map((img, i) => {
                        const imgUrl = urlForImage(img)?.width(400).height(400).url();
                        if (!imgUrl) return null;
                        return (
                          <div key={img._key || i} className="relative w-48 h-48 rounded-xl overflow-hidden shadow-md">
                            <Image
                              src={imgUrl}
                              alt={`${e.title} photo ${i + 1}`}
                              fill
                              sizes="(max-width: 640px) 100vw, 192px"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-heading text-4xl sm:text-6xl uppercase tracking-wide text-black">
            PAST EVENTS
          </h2>
        </div>

        <div className="space-y-16">
          {/* Featured Large Events with Images */}
          {pastEvents
            .filter((e) => e.images && e.images.length > 0)
            .map((e) => (
              <div key={e._id} className="brand-card">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-bold rounded-md">
                        {e.date}
                      </span>
                      {e.location && (
                        <span className="text-xs font-semibold text-neutral-500">
                          Location: {e.location}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-3xl uppercase tracking-wide text-black mb-4">
                      {e.title}
                    </h3>
                    <p className="text-neutral-700 text-base leading-relaxed mb-4 whitespace-pre-line">
                      {e.description}
                    </p>
                  </div>
                  {e.images && e.images.length > 0 && (
                    <div className="flex gap-4 w-full lg:w-auto justify-center flex-wrap sm:flex-nowrap">
                      {e.images.slice(0, 2).map((img, i) => {
                        const imgUrl = urlForImage(img)?.width(400).height(400).url();
                        if (!imgUrl) return null;
                        return (
                          <div key={img._key || i} className="relative w-48 h-48 rounded-xl overflow-hidden shadow-md">
                            <Image
                              src={imgUrl}
                              alt={`${e.title} photo ${i + 1}`}
                              fill
                              sizes="(max-width: 640px) 100vw, 192px"
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
                <div key={e._id} className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl">
                  <span className="text-xs font-bold text-[#2675F8] block mb-1">{e.date}</span>
                  <h4 className="font-heading text-2xl uppercase text-black mb-2">{e.title}</h4>
                  {e.location && <p className="text-xs text-neutral-500 mb-2">{e.location}</p>}
                  <p className="text-sm text-neutral-600 leading-relaxed">{e.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
