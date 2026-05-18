import { getHomePageContent } from "@/lib/sanity/content";
import { HomePageClient } from "@/components/layout/home-page-client";

export default async function HomePage() {
  const content = await getHomePageContent();

  return <HomePageClient initialContent={content} />;
}
