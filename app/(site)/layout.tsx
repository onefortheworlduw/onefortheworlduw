import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisualEditingOverlay from "@/components/VisualEditing";
import { SanityLive } from "@/sanity/lib/live";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <SanityLive />
      <VisualEditingOverlay />
    </>
  );
}
