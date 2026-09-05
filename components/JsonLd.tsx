export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["NGO", "EducationalOrganization"],
    "@id": "https://onefortheworlduw.github.io/#organization",
    "name": "One for the World UW-Madison",
    "alternateName": [
      "OFTW UW",
      "One for the World UW",
      "One for the World University of Wisconsin-Madison"
    ],
    "url": "https://onefortheworlduw.github.io",
    "logo": "https://onefortheworlduw.github.io/images/primary-logo.webp",
    "description":
      "UW-Madison chapter of One for the World. Educating students on evidence-based global aid and empowering them to take the 1% pledge while building a community of future leaders.",
    "sameAs": [
      "https://www.instagram.com/onefortheworlduw/",
      "https://www.linkedin.com/company/one-for-the-world-uw-madison/posts/?feedView=all",
      "https://win.wisc.edu/organization/oftw",
      "https://1fortheworld.org"
    ],
    "parentOrganization": {
      "@type": "NGO",
      "name": "One for the World",
      "url": "https://1fortheworld.org"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madison",
      "addressRegion": "WI",
      "addressCountry": "US"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://onefortheworlduw.github.io/#website",
    "url": "https://onefortheworlduw.github.io",
    "name": "One for the World UW-Madison",
    "publisher": {
      "@id": "https://onefortheworlduw.github.io/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
