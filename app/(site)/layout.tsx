import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { SanityLive } from "@/sanity/lib/live";
import { draftMode } from "next/headers";

const VisualEditingOverlay = dynamic(
  () => import("@/components/VisualEditing")
);

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <SanityLive />
      {(isDraftMode || process.env.NODE_ENV === "development") && (
        <VisualEditingOverlay />
      )}
    </>
  );
}
