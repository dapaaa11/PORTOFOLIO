import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-05-18";

export const isSanityConfigured = Boolean(
  projectId && projectId !== "your-project-id",
);

if (!isSanityConfigured) {
  console.warn(
    `[Sanity Connection Warning]: NEXT_PUBLIC_SANITY_PROJECT_ID is not set or is set to default 'your-project-id'. ` +
    `Current value: "${projectId}". Sanity-powered routes will fall back to static mock data.`
  );
} else {
  console.info(
    `[Sanity Connection Info]: Sanity is successfully configured. Project ID: "${projectId}", Dataset: "${dataset}".`
  );
}

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;
