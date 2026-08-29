import { Metadata } from "next";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Our Team | One For The World UW-Madison",
  description:
    "Meet the student leaders driving high-impact philanthropy at UW-Madison.",
};

export const revalidate = 60; // revalidate every 60 seconds

const fallbackTeamMembers = [
  {
    name: "Alexandra Wienkes",
    position: "President",
    image: "/images/alex.webp",
    alt: "Alexandra Wienkes portrait",
  },
  {
    name: "Maya Guerriero",
    position: "President",
    image: "/images/maya.webp",
    alt: "Maya Guerriero portrait",
  },
  {
    name: "Claire Boysen",
    position: "Social Media & Marketing Specialist",
    image: "/images/claire.webp",
    alt: "Claire Boysen portrait",
  },
  {
    name: "Mia Campbell",
    position: "Outreach Coordinator",
    image: "/images/mia.webp",
    alt: "Mia Campbell portrait",
  },
  {
    name: "Ella Liutikas",
    position: "Programming & Events Specialist",
    image: "/images/ella.webp",
    alt: "Ella Liutikas portrait",
  },
  {
    name: "Luray He",
    position: "Tech Specialist",
    image: "/images/luray.webp",
    alt: "Luray He portrait",
  },
];

interface SanityTeamMember {
  _id: string;
  name: string;
  position: string;
  image?: any;
  order?: number;
}

export default async function TeamPage() {
  let sanityMembers: SanityTeamMember[] = [];
  try {
    sanityMembers = await client.fetch(TEAM_MEMBERS_QUERY);
  } catch (error) {
    console.warn("Failed to fetch from Sanity, using fallback team data:", error);
  }

  const members =
    sanityMembers && sanityMembers.length > 0
      ? sanityMembers.map((m) => ({
          name: m.name,
          position: m.position,
          image: m.image ? urlForImage(m.image)?.width(400).height(400).url() || "/images/alex.webp" : "/images/alex.webp",
          alt: `${m.name} portrait`,
        }))
      : fallbackTeamMembers;

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#2675F8] font-bold text-xs uppercase tracking-widest block mb-2">
            Chapter Leadership
          </span>
          <h1 className="font-heading text-5xl sm:text-7xl uppercase tracking-wide">
            OUR TEAM
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg max-w-xl mx-auto mt-4">
            Meet the UW-Madison students leading our mission to spread effective giving across campus.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {members.map((member, idx) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl border border-neutral-200 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-[#2675F8] transition-all duration-300 group"
            >
              <div className="relative w-44 h-44 mb-6 rounded-full overflow-hidden border-4 border-[#2675F8]/20 group-hover:border-[#2675F8] transition-colors duration-300">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 640px) 176px, (max-width: 1024px) 176px, 176px"
                  quality={85}
                  priority={idx < 3}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="font-heading text-3xl uppercase tracking-wide text-black mb-1">
                {member.name}
              </h2>
              <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-bold rounded-full mt-2">
                {member.position}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
