import type { Experience, Project } from "./types";

const unsortedProjects: Project[] = [
	{
		id: "under-pics",
		name: "Under.pics",
		description:
			"A Chrome extension that lets you hover over any image on the web and remix it in place.",
		tags: ["Extension"],
		screenshot: "/projects/screens/under-pics.jpg",
		links: [{ url: "https://under.pics/", type: "web" }],
		firstCommit: "2026-08-24T10:54:21Z",
		lastCommit: "2026-10-27T22:19:35Z",
	},
	{
		id: "engames",
		name: "Engames",
		description: "A collection of fun mini games to play online.",
		tags: ["Game"],
		screenshot: "/projects/screens/engames.jpg",
		links: [
			{ url: "https://engames.trinhvaphuong.com/", type: "web" },
			{ url: "https://github.com/fuongz/engames", type: "github" },
		],
		firstCommit: "2026-10-23T01:43:45Z",
		lastCommit: "2026-10-26T08:31:45Z",
	},
	{
		id: "enchat",
		name: "Enchat",
		description: "A real-time chat application.",
		links: [{ url: "https://enchat.trinhvaphuong.com/", type: "web" }],
		firstCommit: "2026-10-02T13:54:47Z",
		lastCommit: "2026-10-22T06:48:20Z",
	},
	{
		id: "headflare",
		name: "Headflare",
		description: "Headroom for your Cloudflare flare.",
		links: [{ url: "https://github.com/fuongz/headflare", type: "github" }],
		firstCommit: "2026-06-29T07:35:39Z",
		lastCommit: "2026-06-29T09:15:40Z",
	},
	{
		id: "lanework",
		name: "Lanework",
		description:
			"Visualize your AI coding agent's review checklists as a Kanban board!",
		tags: ["AI"],
		logo: "/projects/Lanework.svg",
		screenshot: "/projects/screens/lanework.jpg",
		links: [
			{ url: "https://lanework.dev", type: "web" },
			{ url: "https://github.com/fuongz/lanework", type: "github" },
		],
		firstCommit: "2026-06-22T06:19:48Z",
		lastCommit: "2026-06-26T10:56:35Z",
	},
	{
		id: "telehelm",
		name: "Telehelm",
		description:
			"Steer your Docker containers from Telegram - your phone is the helm.",
		tags: ["Application"],
		logo: "/projects/Telehelm.svg",
		links: [{ url: "https://github.com/fuongz/telehelm", type: "github" }],
		firstCommit: "2026-06-20T09:07:26Z",
		lastCommit: "2026-06-29T05:05:05Z",
	},
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
		lastCommit: "2026-05-22T16:33:40Z",
	},
	{
		id: "file-viewers",
		name: "File Viewers",
		description:
			"A cross-platform desktop app for viewing and editing Markdown, JSON, and CSV files.",
		tags: ["Application"],
		logo: "/projects/file-viewers.png",
		screenshot: "/projects/screens/file-viewers.jpg",
		links: [
			{ url: "https://files.phake.app", type: "web" },
			{ url: "https://github.com/fuongz/file-viewers", type: "github" },
		],
		firstCommit: "2026-03-03T10:13:59Z",
		lastCommit: "2026-05-13T16:30:34Z",
	},
	{
		id: "my-spec-kit-extensions",
		isHidden: true,
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
		isHidden: true,
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
		isHidden: true,
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
		isHidden: true,
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
		screenshot: "/projects/screens/mayfamily-gallery.jpg",
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
		screenshot: "/projects/screens/bieudovang.jpg",
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
		screenshot: "/projects/screens/newtab-quote.jpg",
		screenshotPosition: "center",
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

const projects = unsortedProjectsWithSince
	.filter((p) => !p.isHidden)
	.sort(
		(a, b) =>
			new Date(b.firstCommit).getTime() - new Date(a.firstCommit).getTime()
	);

const getDuration = (period: string): string => {
	const [startStr, endStr] = period.split("—").map((s) => s.trim());
	const startYear = Number.parseInt(startStr, 10);
	const endYear = /now/i.test(endStr ?? "")
		? new Date().getFullYear()
		: Number.parseInt(endStr ?? "", 10);
	if (Number.isNaN(startYear) || Number.isNaN(endYear)) return "";
	const years = endYear - startYear;
	if (years <= 0) return "<1 yr";
	return `${years} yr${years > 1 ? "s" : ""}`;
};

const unsortedExperiences: Experience[] = [
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

const experiences = unsortedExperiences.map((exp) => ({
	...exp,
	duration: getDuration(exp.period),
}));

export type { Experience, Project };
export { experiences, projects };
