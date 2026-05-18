import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Content",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "Full-Stack Engineer & Cloud Architect",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "text",
      rows: 4,
      description: "Use line breaks to control the current stacked hero layout.",
      validation: (rule) => rule.required().max(180),
    }),
    defineField({
      name: "subheadline",
      title: "Subheadline",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(260),
    }),
    defineField({
      name: "backgroundVideo",
      title: "Background Video",
      type: "object",
      fields: [
        defineField({
          name: "hlsUrl",
          title: "HLS URL",
          type: "url",
        }),
        defineField({
          name: "dashUrl",
          title: "DASH URL",
          type: "url",
        }),
        defineField({
          name: "mp4Url",
          title: "MP4 Fallback URL",
          type: "url",
        }),
        defineField({
          name: "poster",
          title: "Poster",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "eyebrow",
      subtitle: "headline",
    },
  },
});
