export type Project = {
	id: string;
	name: string;
	description: string;
	logo?: string;
	screenshot?: string;
	screenshotPosition?: "top" | "center";
	icon?: React.ComponentType<{ className?: string }>;
	links?: ProjectLink[];
	lastCommit?: string;
	firstCommit: string;
	since?: string;
	isNoEndDate?: boolean;
	isPrivate?: boolean;
	isHidden?: boolean;
	tags?: string[];
	metrics?: {
		installed?: number;
		downloads?: number;
		stars?: number;
		forks?: number;
		users?: number;
	};
};

export type ProjectLink = {
	url: string;
	type: "npm" | "chrome_extension" | "web" | "github" | "mintlify";
};

export type Experience = {
	id: string;
	company: string;
	status?: "live";
	logo: string;
	website: string;
	period: string;
	position: string;
	duration?: string;
	overview?: string[];
};
