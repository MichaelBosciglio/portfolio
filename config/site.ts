export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Michael Bosciglio's Portfolio",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Resume",
      href: "/resume",
    },
    // {
    //   label: "Projects",
    //   href: "/projects",
    // },
    {
      label: "About",
      href: "/about",
    }
	],
	links: {
		github: "https://github.com/MichaelBosciglio",
		linkedin: "https://www.linkedin.com/in/michaelbosciglio/",
    
	},
	Link:{
		href: "resume.pdf"
	}
};
