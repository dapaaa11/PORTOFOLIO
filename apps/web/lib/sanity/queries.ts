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
    "slug": slug.current,
    description,
    "stack": techStack,
    "thumbnail": {
      "url": thumbnail.asset->url,
      "alt": thumbnail.alt
    },
    "coverVideo": {
      "hlsUrl": coverVideo.hlsUrl,
      "dashUrl": coverVideo.dashUrl,
      "mp4Url": coverVideo.mp4Url,
      "posterUrl": coverVideo.poster.asset->url
    },
    githubUrl,
    liveUrl,
    publishedAt
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

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  "thumbnail": {
    "url": thumbnail.asset->url,
    "alt": thumbnail.alt
  },
  "coverVideo": {
    "hlsUrl": coverVideo.hlsUrl,
    "dashUrl": coverVideo.dashUrl,
    "mp4Url": coverVideo.mp4Url,
    "posterUrl": coverVideo.poster.asset->url
  },
  description,
  "stack": techStack,
  githubUrl,
  liveUrl,
  publishedAt
}`;

export const projectSlugsQuery = `*[_type == "project"]{
  "slug": slug.current
}`;
