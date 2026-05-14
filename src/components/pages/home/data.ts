import type { Experience, Project } from "./types";

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
		firstCommit: "2026-04-01T07:59:39Z",
		lastCommit: "2026-04-15T02:55:54Z",
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
		firstCommit: "2026-03-03T10:13:59Z",
		lastCommit: "2026-05-13T16:30:34Z",
	},
	{
		id: "my-spec-kit-extensions",
		name: "My Spec Kit Extensions",
		description: "A collection of my extensions for spec-kit",
		tags: ["AI"],
		logo: "/projects/Spec-Kit-Ext-Logo.svg",
		links: [{ url: "https://github.com/fuongz/spec-kit-ext", type: "github" }],
		firstCommit: "2026-03-23T05:29:36Z",
		lastCommit: "2026-03-24T07:11:01Z",
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
		firstCommit: "2026-02-06T04:46:50Z",
		lastCommit: "2026-03-21T04:50:35Z",
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
		firstCommit: "2026-02-07T17:51:14Z",
		lastCommit: "2026-02-09T16:20:41Z",
	},
	{
		id: "hotwheels-collection",
		name: "Hot Wheels Collection",
		description: "Let's build your Hot Wheels Collection!",
		logo: "/projects/hotwheels-collection.svg",
		links: [{ url: "https://hotwheels.phake.app", type: "web" }],
		firstCommit: "2025-12-18T03:36:01Z",
		lastCommit: "2026-02-24T09:11:18Z",
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
		firstCommit: "2025-03-18T06:44:12Z",
		lastCommit: "2025-12-18T05:08:41Z",
		isNoEndDate: true,
	},
	{
		id: "bieudovang",
		name: "Gold Chart - Biểu Đồ Vàng",
		description: "A gold price chart web application",
		logo: "/projects/bieudovang.svg",
		links: [{ url: "https://www.bieudovang.net/", type: "web" }],
		firstCommit: "2024-07-14T15:50:11Z",
		lastCommit: "2026-04-11T07:07:32Z",
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
		firstCommit: "2023-07-13T16:54:17Z",
		lastCommit: "2026-03-06T10:40:31Z",
	},
];

const getSince = (
	firstCommit: string,
	lastCommit?: string,
	isNoEndDate?: boolean
): string => {
	const first = new Date(firstCommit);
	const firstMM = String(first.getMonth() + 1).padStart(2, "0");
	const firstYYYY = first.getFullYear();
	if (!lastCommit) {
		return `${firstMM}-${firstYYYY}`;
	}
	if (isNoEndDate) {
		return `${firstMM}-${firstYYYY}`;
	}
	const last = new Date(lastCommit);
	const sixMonthsAgo = new Date();
	sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
	const lastMM = String(last.getMonth() + 1).padStart(2, "0");
	const lastYYYY = last.getFullYear();
	if (last > sixMonthsAgo) {
		return `${firstMM}-${firstYYYY} - Now`;
	}
	return `${firstMM}-${firstYYYY} - ${lastMM}-${lastYYYY}`;
};

const unsortedProjectsWithSince = unsortedProjects.map((p) => ({
	...p,
	since: getSince(p.firstCommit, p.lastCommit, p.isNoEndDate),
}));

const projects = unsortedProjectsWithSince.sort((a, b) => {
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
		overview: [
			"Lead technical development for influencer marketing platform",
			"Design and implement scalable microservices architecture",
			"Mentor junior developers and conduct code reviews",
			"Collaborate with product team to define technical requirements",
		],
	},
	{
		id: "fpt",
		company: "FPT Telecom",
		website: "https://fpt.vn",
		logo: "/exps/fpt.png",
		period: "2020 — 2022",
		position: "Software Engineer",
		overview: [
			"Developed and maintained BSS/OSS systems",
			"Participated in agile development processes",
			"Worked on system integration and API development",
		],
	},
	{
		id: "base",
		company: "Base Enterprise",
		website: "https://base.vn",
		logo: "/exps/base.png",
		period: "2017 — 2020",
		position: "Product Team Leader",
		overview: [
			"Led product development team for Base CRM",
			"Coordinated between engineering and product teams",
			"Managed product roadmap and feature prioritization",
		],
	},
];

export type { Experience, Project };
export { experiences, projects };
