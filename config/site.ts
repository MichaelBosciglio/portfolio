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
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/MichaelBosciglio",
		linkedin: "https://www.linkedin.com/in/michaelbosciglio/",
    
	},
	Link:{
		href: "resume.pdf"
	}
};
