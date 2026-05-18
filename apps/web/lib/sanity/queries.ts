export const homePageQuery = `{
  "homePage": *[_type == "homePage"][0]{
    projectsSection{
      eyebrow,
      title,
      description
    },
    experienceSection{
      eyebrow,
      title,
      description
    },
    skillsSection{
      eyebrow,
      title,
      description
    },
    contactSection{
      eyebrow,
      title,
      description,
      ctaLabel,
      email,
      socialLinks[]{
        label,
        url
      }
    }
  },
  "hero": *[_type == "hero"][0]{
    eyebrow,
    headline,
    subheadline
  },
  "projects": *[_type == "project" && featured == true] | order(publishedAt desc)[0...4]{
    title,
    description,
    "stack": techStack
  },
  "experience": *[_type == "experience"] | order(order asc){
    year,
    role,
    company,
    description
  },
  "skills": *[_type == "skill"] | order(order asc){
    category,
    items
  }
}`;
