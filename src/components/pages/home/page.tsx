"use client";

import {
	ArrowUpRight,
	Download,
	Gamepad2,
	InfinityIcon,
	PackageCheck,
	Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";

const formatMetric = (n: number) =>
	n >= 1000 ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `${n}`;

const projects: {
	id: string;
	name: string;
	description: string;
	logo: string;
	website: string;
	since: string;
	isNoEndDate?: boolean;
	tags?: string[];
	metrics?: {
		installed?: number;
		downloads?: number;
		stars?: number;
		forks?: number;
		users?: number;
	};
}[] = [
	{
		id: "file-viewers",
		name: "File Viewers",
		description:
			"A cross-platform desktop app for viewing and editing Markdown, JSON, and CSV files.",
		tags: ["Application"],
		logo: "/projects/file-viewers.png",
		website: "https://viewers.phake.app",
		since: "03-2026 - Present",
	},
	{
		id: "muck-clone",
		name: "Muck Clone",
		description:
			"I like the game Muck on Steam, but the developers abandoned it, so I cloned it.",
		tags: ["Game"],
		logo: "/projects/muck-clone.svg",
		website: "https://muck.phake.app",
		since: "02-2026 - Present",
	},
	{
		id: "subscriptions-management",
		name: "Subscriptions Management",
		description: "A clean, fast subscription tracker.",
		logo: "/projects/subscriptions-management.svg",
		website: "https://sub.phake.app",
		since: "02-2026 - Present",
	},
	{
		id: "hotwheels-collection",
		name: "Hot Wheels Collection",
		description: "Let's build your Hot Wheels Collection!",
		logo: "/projects/hotwheels-collection.svg",
		website: "https://hotwheels.phake.app",
		since: "12-2025 - Present",
	},
	{
		id: "lichtrinhbay",
		name: "Flights Schedule - Lịch Trình Bay",
		description: "Flight schedule web application",
		logo: "/projects/lichtrinhbay.svg",
		website: "https://flights.phake.app",
		since: "12-2025 - Present",
	},
	{
		id: "trinhvaphuong",
		name: "Our Wedding",
		description: "Our wedding website",
		logo: "/projects/trinhvaphuong.svg",
		website: "https://www.trinhvaphuong.com/",
		since: "05-2025",
		isNoEndDate: true,
	},
	{
		id: "bieudovang",
		name: "Gold Chart - Biểu Đồ Vàng",
		description: "A gold price chart web application",
		logo: "/projects/bieudovang.svg",
		website: "https://www.bieudovang.net/",
		since: "03-2024 - Present",
	},
	{
		id: "newtab",
		name: "NewTab",
		description: "A NewTab extension with random quote!",
		tags: ["Extension"],
		logo: "/projects/newtab.svg",
		website:
			"https://chromewebstore.google.com/detail/your-newtab/jfflfcaobccnpijfocpfcholcpnkeomg",
		since: "07-2023 - Present",
		metrics: { installed: 4 },
	},
];

const experiences = [
	{
		id: "hiip",
		company: "Hiip",
		status: "live",
		logo: "/exps/hiip.png",
		website: "https://www.hiip.asia",
		period: "2022 — Present",
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

const HomePageRoute: React.FC = () => {
	return (
		<>
			{/* About Section */}
			<div className="mb-8 sm:mb-12">
				<h2 className="text-base font-medium text-foreground mb-3 sm:mb-4">
					About
				</h2>
				<div className="text-foreground space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed">
					<p>
						A software engineer with 7+ years of experience, who found his true
						passion in programming.
					</p>

					<p>
						I'm currently living in{" "}
						<Link href="https://share.google/KZ7gQia5fTV6R9qS6" target="_blank">
							<span className="border-dashed border-b border-foreground hover:border-none font-semibold text-foreground hover:text-zinc-900 dark:hover:text-zinc-200 transition">
								Hồ Chí Minh City, Việt Nam
							</span>
							<Image
								src="/vn.png"
								alt="VN"
								width="20"
								height="10"
								className="inline-block rounded mb-0.5 ml-1 vertical-middle"
							/>
						</Link>{" "}
						and working on full-stack development at{" "}
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="https://hiip.asia"
									className="border-dashed border-b border-foreground hover:border-none font-semibold text-foreground hover:text-zinc-900 dark:hover:text-zinc-200 transition"
									target="_blank"
								>
									Hiip
									<ArrowUpRight className="inline-block size-4" />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<span>https://hiip.asia</span>
							</TooltipContent>
						</Tooltip>
						.
					</p>
				</div>
			</div>

			{/* Projects Section */}
			<div className="pb-8 sm:mb-12 relative pt-8">
				<svg
					aria-hidden="true"
					className="pointer-events-none z-10 text-zinc-300 dark:text-zinc-700 h-px w-full absolute top-0 left-0"
					data-direction="top"
					data-variant="container"
					preserveAspectRatio="none"
					viewBox="0 0 100 1"
				>
					<line
						stroke="currentColor"
						strokeDasharray="6 6"
						strokeWidth="1"
						vectorEffect="non-scaling-stroke"
						x1="0"
						x2="100"
						y1="0.5"
						y2="0.5"
					/>
				</svg>
				<svg
					aria-hidden="true"
					className="pointer-events-none z-10 text-zinc-300 dark:text-zinc-700 h-px w-full absolute bottom-0 left-0"
					data-direction="top"
					data-variant="container"
					preserveAspectRatio="none"
					viewBox="0 0 100 1"
				>
					<line
						stroke="currentColor"
						strokeDasharray="6 6"
						strokeWidth="1"
						vectorEffect="non-scaling-stroke"
						x1="0"
						x2="100"
						y1="0.5"
						y2="0.5"
					/>
				</svg>
				<h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6">
					Projects ({projects.length})
				</h2>
				<div className="space-y-6 group/list">
					{projects.map((project) => (
						<div
							key={project.id}
							className="flex gap-3 sm:gap-4 transition-all duration-200 group-hover/list:opacity-40 group-hover/list:grayscale hover:!opacity-100 hover:!grayscale-0"
						>
							<div className="w-[58px] h-[58px] sm:w-[48px] sm:h-[48px] relative bg-zinc-100 overflow-hidden dark:bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
								{project.logo.startsWith("/") ? (
									<Image
										src={project.logo}
										alt={project.name}
										fill
										className="object-cover"
									/>
								) : (
									<span className="font-semibold text-xl">{project.logo}</span>
								)}
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex flex-col sm:flex-row sm:gap-2 items-start sm:items-baseline justify-between gap-0.5 flex-wrap">
									<div className="flex items-center flex-wrap gap-2">
										{project.website ? (
											<Tooltip>
												<TooltipTrigger asChild>
													<Link
														href={project.website}
														target="_blank"
														className="flex items-center gap-1.5 sm:gap-2 font-semibold hover:underline decoration-purple-800 underline-offset-4 hover:text-foreground transition"
													>
														<span className="truncate">{project.name}</span>
														<ArrowUpRight className="size-3 flex-shrink-0" />
													</Link>
												</TooltipTrigger>
												<TooltipContent>
													<span>{project.website}</span>
												</TooltipContent>
											</Tooltip>
										) : (
											<h3 className="font-semibold text-sm sm:text-base text-foreground truncate">
												{project.name}
											</h3>
										)}
										{project.tags &&
											project.tags.length > 0 &&
											project.tags.map((tag) => (
												<Badge
													key={`${project.id}-${tag}`}
													variant="outline"
													className={
														tag === "Extension"
															? "gap-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
															: tag === "Application"
																? "gap-1 bg-zinc-50 text-zinc-700 border-zinc-200 dark:bg-zinc-950 dark:text-zinc-300 dark:border-zinc-800"
																: tag === "Game"
																	? "gap-1 bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950 dark:text-violet-300 dark:border-violet-800"
																	: "gap-1"
													}
												>
													{tag === "Extension" && (
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 512 512"
															width={12}
															height={12}
															fill="currentColor"
															aria-hidden="true"
														>
															<path d="M188.8 255.93a67.2 67.2 0 1067.2-67.18 67.38 67.38 0 00-67.2 67.18z" />
															<path d="M476.75 217.79v.05a206.63 206.63 0 00-7-28.84h-.11a202.16 202.16 0 017.07 29 203.5 203.5 0 00-7.07-29h-155.4c19.05 17 31.36 40.17 31.36 67.05a86.55 86.55 0 01-12.31 44.73L231 478.45a2.44 2.44 0 010 .27v.28-.26a224 224 0 0025 1.26c6.84 0 13.61-.39 20.3-1a222.91 222.91 0 0029.78-4.74C405.68 451.52 480 362.4 480 255.94a225.25 225.25 0 00-3.25-38.15z" />
															<path d="M256 345.5c-33.6 0-61.6-17.91-77.29-44.79L76 123.05l-.14-.24A224 224 0 00207.4 474.55v-.05l77.69-134.6a84.13 84.13 0 01-29.09 5.6z" />
															<path d="M91.29 104.57l77.35 133.25A89.19 89.19 0 01256 166h205.17a246.51 246.51 0 00-25.78-43.94l.12.08A245.26 245.26 0 01461.17 166h.17a245.91 245.91 0 00-25.66-44 2.63 2.63 0 01-.35-.26 223.93 223.93 0 00-344.19-17.4l.14.24z" />
														</svg>
													)}
													{tag === "Application" && (
														<svg
															fill="currentColor"
															aria-hidden="true"
															width="800px"
															height="800px"
															viewBox="-6.5 0 32 32"
														>
															<path d="M13.313 7.219c0.25-0.688 0.406-1.281 0.406-1.844 0-0.094-0.031-0.156-0.031-0.25s-0.031-0.219-0.063-0.344c-1.563 0.344-2.656 1.031-3.344 2.031-0.688 0.969-1.031 2.125-1.063 3.469 0.563-0.063 1.031-0.156 1.375-0.25 0.469-0.156 0.969-0.469 1.469-0.938 0.563-0.563 1-1.25 1.25-1.875zM11.531 10.344c-0.938 0.313-1.594 0.438-1.938 0.438-0.281 0-0.875-0.125-1.844-0.375-0.938-0.281-1.719-0.438-2.406-0.438-1.531 0-2.813 0.656-3.844 1.969-1 1.313-1.5 2.969-1.5 5.031 0 2.219 0.656 4.469 1.969 6.781 1.344 2.313 2.719 3.438 4.063 3.438 0.438 0 1-0.156 1.781-0.438 0.719-0.281 1.344-0.438 1.906-0.438s1.25 0.125 2.031 0.406c0.813 0.281 1.438 0.406 1.906 0.406 1.156 0 2.313-0.875 3.469-2.594 0.375-0.563 0.719-1.156 1-1.719 0.25-0.531 0.469-1.094 0.656-1.625-0.844-0.25-1.563-0.844-2.156-1.719-0.594-0.906-0.906-1.906-0.906-3 0-1.031 0.281-1.938 0.844-2.781 0.344-0.438 0.875-1 1.563-1.594-0.219-0.281-0.469-0.563-0.688-0.781-0.25-0.219-0.469-0.406-0.688-0.563-0.875-0.563-1.844-0.875-2.906-0.875-0.625 0-1.406 0.188-2.313 0.469z"></path>
														</svg>
													)}
													{tag === "Game" && (
														<Gamepad2
															width={12}
															height={12}
															fill="currentColor"
															stroke="none"
														/>
													)}
													{tag}
												</Badge>
											))}
									</div>
									<span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap flex-shrink-0">
										{project.since}
										{project.isNoEndDate ? (
											<>
												{" "}
												-{" "}
												<InfinityIcon className="inline-block size-4 mb-0.5 text-purple-500" />
											</>
										) : (
											""
										)}
									</span>
								</div>
								<p className="text-foreground text-zinc-700 dark:text-zinc-300 text-sm mt-1 sm:mt-1 sm:pr-30">
									{project.description}
								</p>
								{"metrics" in project && project.metrics && (
									<div className="flex items-center gap-3 mt-1.5">
										{"downloads" in project.metrics &&
											project.metrics.downloads && (
												<span className="flex items-center gap-1 text-xs text-zinc-800 dark:text-zinc-300">
													<Download className="size-3 stroke-violet-700 fill-violet-200 dark:fill-violet-900 dark:stroke-violet-500" />
													{formatMetric(project.metrics.downloads)}{" "}
													<div className="text-zinc-500 dark:text-zinc-400">
														downloads
													</div>
												</span>
											)}
										{"users" in project.metrics && project.metrics.users && (
											<span className="flex items-center gap-1 text-xs text-zinc-800 dark:text-zinc-300">
												<Users className="size-3 stroke-violet-700 fill-violet-200 dark:fill-violet-900 dark:stroke-violet-500" />
												{formatMetric(project.metrics.users)}{" "}
												<div className="text-zinc-500">users</div>
											</span>
										)}
										{"installed" in project.metrics &&
											project.metrics.installed && (
												<span className="flex items-center gap-1 text-xs text-zinc-800 dark:text-zinc-300">
													<PackageCheck className="size-3 stroke-violet-700 fill-violet-200 dark:fill-violet-900 dark:stroke-violet-500" />
													{formatMetric(project.metrics.installed)}{" "}
													<div className="text-zinc-500 dark:text-zinc-400">
														installed
													</div>
												</span>
											)}
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Experiences Section */}
			<div className="mb-8 sm:mb-12">
				<h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6">
					Experiences ({experiences.length})
				</h2>
				<div className="space-y-4 sm:space-y-6 group/list">
					{experiences.map((exp) => (
						<div
							key={exp.id}
							className="flex gap-3 sm:gap-4 transition-all duration-200 group-hover/list:opacity-40 group-hover/list:grayscale hover:!opacity-100 hover:!grayscale-0"
						>
							<div className="w-[38px] h-[38px] sm:w-[48px] sm:h-[48px] relative bg-zinc-100 overflow-hidden dark:bg-zinc-800 rounded flex items-center justify-center flex-shrink-0">
								{exp.logo.startsWith("/") ? (
									<Image src={exp.logo} alt={exp.company} fill />
								) : (
									<span className="font-semibold text-xl">{exp.logo}</span>
								)}
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-start sm:items-baseline justify-between gap-2 sm:gap-1 flex-wrap">
									<div className="flex items-center gap-1.5 sm:gap-2">
										<h3 className="font-semibold truncate">{exp.company}</h3>
										{exp.website && (
											<Tooltip>
												<TooltipTrigger>
													<Link href={exp.website}>
														<ArrowUpRight className="size-3 flex-shrink-0" />
													</Link>
												</TooltipTrigger>
												<TooltipContent>{exp.website}</TooltipContent>
											</Tooltip>
										)}
										{exp.status === "live" && (
											<Badge
												variant="default"
												className="bg-green-500 rounded-xs px-1 py-0 hover:bg-green-600 text-white border-green-500"
											>
												Present
											</Badge>
										)}
									</div>
									<span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap flex-shrink-0">
										{exp.period}
									</span>
								</div>
								<p className="mt-0.5 sm:mt-1 text-sm text-zinc-700 dark:text-zinc-300">
									{exp.position}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export { HomePageRoute };
