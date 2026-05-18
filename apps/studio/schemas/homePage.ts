import { defineField, defineType } from "sanity";

const sectionFields = [
  defineField({
    name: "eyebrow",
    title: "Eyebrow",
    type: "string",
    validation: (rule) => rule.required().max(80),
  }),
  defineField({
    name: "title",
    title: "Title",
    type: "string",
    validation: (rule) => rule.required().max(120),
  }),
  defineField({
    name: "description",
    title: "Description",
    type: "text",
    rows: 3,
    validation: (rule) => rule.required().max(320),
  }),
];

export const homePage = defineType({
  name: "homePage",
  title: "Homepage Content",
  type: "document",
  fields: [
    defineField({
      name: "projectsSection",
      title: "Projects Section",
      type: "object",
      fields: sectionFields,
    }),
    defineField({
      name: "experienceSection",
      title: "Experience Section",
      type: "object",
      fields: sectionFields,
    }),
    defineField({
      name: "skillsSection",
      title: "Skills Section",
      type: "object",
      fields: sectionFields,
    }),
    defineField({
      name: "contactSection",
      title: "Contact Section",
      type: "object",
      fields: [
        ...sectionFields,
        defineField({
          name: "ctaLabel",
          title: "CTA Label",
          type: "string",
          validation: (rule) => rule.required().max(60),
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "email",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "socialLinks",
          title: "Social Links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "label",
                  title: "Label",
                  type: "string",
                  validation: (rule) => rule.required().max(40),
                }),
                defineField({
                  name: "url",
                  title: "URL",
                  type: "url",
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: "label",
                  subtitle: "url",
                },
              },
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Homepage Content",
      };
    },
  },
});
