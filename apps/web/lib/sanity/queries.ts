export const homePageQuery = `{
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
