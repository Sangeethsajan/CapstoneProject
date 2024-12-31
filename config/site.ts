export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Decades of Division",
  description: "Analyzing Hate Crimes in the USA from 1991 to 2022",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Dataset",
      href: "/dataset",
    },
    {
      label: "Project",
      href: "/project",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  
  links: {
    github: "https://github.com/sangeethsajan",
    twitter: "https://twitter.com/sangeethsajan",
  },
};
