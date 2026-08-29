import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: Brand & Navigation */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src="/images/primary-logo.png"
                  alt="One for the World Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading text-2xl tracking-wide text-white leading-none">
                  ONE FOR THE WORLD
                </h3>
                <span className="text-[10px] font-bold tracking-widest text-[#2675F8] uppercase">
                  UW-Madison Chapter
                </span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Educating students on effective global aid and the 1% pledge.
              Building a community of future leaders dedicated to high-impact giving.
            </p>
            <nav>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/"
                    className="text-sm font-medium text-neutral-300 hover:text-[#E2FF3E] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-sm font-medium text-neutral-300 hover:text-[#E2FF3E] transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-sm font-medium text-neutral-300 hover:text-[#E2FF3E] transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm font-medium text-neutral-300 hover:text-[#E2FF3E] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/involve"
                    className="text-sm font-medium text-neutral-300 hover:text-[#E2FF3E] transition-colors"
                  >
                    Get Involved
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 2: Social & Community */}
          <div>
            <h4 className="font-heading text-xl tracking-wider uppercase text-white mb-6">
              Connect With Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://win.wisc.edu/organization/oftw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-neutral-300 hover:text-[#2675F8] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-[#2675F8]">
                    <GlobeIcon className="w-4 h-4 text-white" />
                  </div>
                  <span>WIN Organization Page</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/onefortheworlduw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-neutral-300 hover:text-[#2675F8] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-[#2675F8]">
                    <InstagramIcon className="w-4 h-4 text-white" />
                  </div>
                  <span>@onefortheworlduw on Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/one-for-the-world-uw-madison/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-neutral-300 hover:text-[#2675F8] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-[#2675F8]">
                    <LinkedinIcon className="w-4 h-4 text-white" />
                  </div>
                  <span>LinkedIn Chapter Page</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h4 className="font-heading text-xl tracking-wider uppercase text-white mb-2">
              Stay Up To Date
            </h4>
            <p className="text-neutral-400 text-sm mb-4">
              Get meeting reminders, event updates, and news on our chapter&apos;s impact.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} One for the World UW-Madison.</p>
        </div>
      </div>
    </footer>
  );
}
