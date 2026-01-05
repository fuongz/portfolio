"use client";

import { ArrowUpRight, InfinityIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";

const projects = [
	{
		id: "hotwheels-collection",
		name: "Hot Wheels Collection",
		description: "Let's build your Hot Wheels Collection!",
		status: "live",
		logo: "/projects/hotwheels-collection.svg",
		website: "https://hotwheels.phake.app",
		since: "12-2025 - Present",
	},
	{
		id: "lichtrinhbay",
		name: "Flights Schedule - Lịch Trình Bay",
		description: "Flight schedule web application",
		status: "live",
		logo: "/projects/lichtrinhbay.svg",
		website: "https://flights.phake.app",
		since: "12-2025 - Present",
	},
	{
		id: "bieudovang",
		name: "Gold Chart - Biểu Đồ Vàng",
		description: "A gold price chart web application",
		logo: "/projects/bieudovang.svg",
		status: "live",
		website: "https://www.bieudovang.net/",
		since: "03-2024 - Present",
	},
	{
		id: "trinhvaphuong",
		name: "Our Wedding",
		description: "Our wedding website",
		status: "infinity",
		logo: "/projects/trinhvaphuong.svg",
		website: "https://www.trinhvaphuong.com/",
		since: "05-2025",
		isNoEndDate: true,
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
						stroke-dasharray="6 6"
						stroke-width="1"
						vector-effect="non-scaling-stroke"
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
						stroke-dasharray="6 6"
						stroke-width="1"
						vector-effect="non-scaling-stroke"
						x1="0"
						x2="100"
						y1="0.5"
						y2="0.5"
					/>
				</svg>
				<h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6">
					Projects ({projects.length})
				</h2>
				<div className="space-y-6">
					{projects.map((project) => (
						<div key={project.id} className="flex gap-3 sm:gap-4">
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
										{project.status === "live" && (
											<Badge
												variant="default"
												className="bg-green-500 rounded-xs px-1 py-0 hover:bg-green-600 text-white border-green-500"
											>
												Live
											</Badge>
										)}
										{project.status === "infinity" && (
											<Badge className="bg-purple-500 rounded-xs px-1 py-0 hover:bg-purple-600 text-white border-purple-500">
												Ongoing Forever
											</Badge>
										)}
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
								<p className="text-foreground mt-1 sm:mt-1">
									{project.description}
								</p>
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
				<div className="space-y-4 sm:space-y-6">
					{experiences.map((exp) => (
						<div key={exp.id} className="flex gap-3 sm:gap-4">
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
								<p className="mt-0.5 sm:mt-1">{exp.position}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export { HomePageRoute };
