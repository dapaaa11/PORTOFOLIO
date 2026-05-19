import { getHomePageContent } from "@/lib/sanity/content";
import { HomePageClient } from "@/components/layout/home-page-client";

export const revalidate = 60;

export default async function HomePage() {
  const content = await getHomePageContent();

  return <HomePageClient initialContent={content} />;
}
