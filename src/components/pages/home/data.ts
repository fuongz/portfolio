type ProjectLink = {
	url: string;
	type: "npm" | "chrome_extension" | "web" | "github" | "mintlify";
};

type Project = {
	id: string;
	name: string;
	description: string;
	logo?: string;
	icon?: React.ComponentType<{ className?: string }>;
	links?: ProjectLink[];
	since: string;
	lastCommit?: string;
	isNoEndDate?: boolean;
	isPrivate?: boolean;
	tags?: string[];
	metrics?: {
		installed?: number;
		downloads?: number;
		stars?: number;
		forks?: number;
		users?: number;
	};
};

type Experience = {
	id: string;
	company: string;
	status?: "live";
	logo: string;
	website: string;
	period: string;
	position: string;
};

const unsortedProjects: Project[] = [
	{
		id: "phake-mcp",
		name: "@phake/mcp",
		description:
			"A TypeScript library for building MCP (Model Context Protocol) servers, designed to run on Cloudflare Workers and Node.js.",
		tags: ["npm"],
		logo: "/projects/Phake-MCP-Logo.svg",
		links: [
			{ url: "https://www.npmjs.com/package/@phake/mcp", type: "npm" },
			{ url: "https://github.com/fuongz/phake-mcp", type: "github" },
		],
		since: "04-2026 - Now",
		lastCommit: "2026-04-07",
	},
	{
		id: "file-viewers",
		name: "File Viewers",
		description:
			"A cross-platform desktop app for viewing and editing Markdown, JSON, and CSV files.",
		tags: ["Application"],
		logo: "/projects/file-viewers.png",
		links: [
			{ url: "https://files.phake.app", type: "web" },
			{ url: "https://github.com/fuongz/file-viewers", type: "github" },
		],
		since: "03-2026 - Now",
		lastCommit: "2026-04-05",
	},
	{
		id: "my-spec-kit-extensions",
		name: "My Spec Kit Extensions",
		description: "A collection of my extensions for spec-kit",
		tags: ["AI"],
		logo: "/projects/Spec-Kit-Ext-Logo.svg",
		links: [{ url: "https://github.com/fuongz/spec-kit-ext", type: "github" }],
		since: "03-2026 - Now",
		lastCommit: "2026-03-24",
	},
	{
		id: "subscription-management",
		name: "Subscriptions Management",
		description: "A clean, fast subscription tracker.",
		logo: "/projects/subscriptions-management.svg",
		links: [
			{ url: "https://sub.phake.app", type: "web" },
			{
				url: "https://github.com/fuongz/subscription-management",
				type: "github",
			},
		],
		since: "02-2026 - Now",
		lastCommit: "2026-03-21",
	},
	{
		id: "muck-clone",
		name: "Muck Clone",
		description:
			"I like the game Muck on Steam, but the developers abandoned it, so I cloned it.",
		tags: ["Game"],
		logo: "/projects/muck-clone.svg",
		links: [
			{ url: "https://muck.phake.app", type: "web" },
			{ url: "https://github.com/fuongz/muck-clone", type: "github" },
		],
		since: "02-2026",
		lastCommit: "2026-02-09",
	},
	{
		id: "hotwheels-collection",
		name: "Hot Wheels Collection",
		description: "Let's build your Hot Wheels Collection!",
		logo: "/projects/hotwheels-collection.svg",
		links: [{ url: "https://hotwheels.phake.app", type: "web" }],
		since: "12-2025 - Now",
		lastCommit: "2026-02-24",
	},
	{
		id: "mayfamily",
		name: "Trinh & Phương",
		description: "Our wedding website",
		logo: "/projects/trinhvaphuong.svg",
		links: [
			{ url: "https://www.trinhvaphuong.com", type: "web" },
			{ url: "https://github.com/fuongz/mayfamily", type: "github" },
		],
		since: "12-2025",
		lastCommit: "2025-12-18",
		isNoEndDate: true,
	},
	{
		id: "bieudovang",
		name: "Gold Chart - Biểu Đồ Vàng",
		description: "A gold price chart web application",
		logo: "/projects/bieudovang.svg",
		links: [{ url: "https://www.bieudovang.net/", type: "web" }],
		since: "03-2024 - Now",
		lastCommit: "2026-04-11",
	},
	{
		id: "newtab",
		name: "NewTab",
		description: "A NewTab extension with random quote!",
		tags: ["Extension"],
		logo: "/projects/newtab.svg",
		links: [
			{
				url: "https://chromewebstore.google.com/detail/your-newtab/jfflfcaobccnpijfocpfcholcpnkeomg",
				type: "chrome_extension",
			},
			{
				url: "https://github.com/fuongz/newtab",
				type: "github",
			},
		],
		since: "07-2023 - Now",
		lastCommit: "2026-03-06",
	},
];

const projects = unsortedProjects.sort((a, b) => {
	if (!a.lastCommit && !b.lastCommit) return 0;
	if (!a.lastCommit) return 1;
	if (!b.lastCommit) return -1;
	return new Date(b.lastCommit).getTime() - new Date(a.lastCommit).getTime();
});

const experiences: Experience[] = [
	{
		id: "hiip",
		company: "Hiip",
		logo: "/exps/hiip.png",
		website: "https://www.hiip.asia",
		period: "2022 — Now",
		position: "Senior Software Engineer",
	},
	{
		id: "fpt",
		company: "FPT Telecom",
		website: "https://fpt.vn",
		logo: "/exps/fpt.png",
		period: "2020 — 2022",
		position: "Middle Software Engineer",
	},
	{
		id: "base",
		company: "Base Enterprise",
		website: "https://base.vn",
		logo: "/exps/base.png",
		period: "2017 — 2020",
		position: "Product Team Leader",
	},
];

export { projects, experiences };
export type { Project, Experience };
