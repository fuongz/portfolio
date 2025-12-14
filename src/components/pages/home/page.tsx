"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { TContributeGraph } from "types/contribute-graph";
import { Container } from "@/components/Shared";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";

interface Props {
	contributes: TContributeGraph;
}

const projects = [
	{
		id: "lichtrinhbay",
		name: "Flights Schedule - Lịch Trình Bay",
		description: "Flight schedule web application",
		logo: "/projects/lichtrinhbay.svg",
		website: "https://flights.phake.app",
		since: "12-2025 - Present",
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
		id: "trinhvaphuong",
		name: "Our Wedding",
		description: "Our wedding website",
		logo: "/projects/trinhvaphuong.svg",
		website: "https://www.trinhvaphuong.com/",
		since: "05-2025 - 06-2025",
	},
];

const experiences = [
	{
		id: "hiip",
		company: "Hiip",
		logo: "/exps/hiip.png",
		website: "https://www.hiip.asia",
		period: "2022 — Today",
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

const HomePageRoute: React.FC<Props> = () => {
	return (
		<Container>
			{/* Profile Section */}
			<div className="pt-4 sm:pt-8 mb-8 sm:mb-12 flex items-center gap-4">
				<div className="flex flex-col flex-1">
					<h1 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
						fuongz
					</h1>
					<p className="text-muted-foreground text-sm mt-0.5">
						Software Engineer
					</p>
				</div>
			</div>

			{/* About Section */}
			<div className="mb-8 sm:mb-12">
				<h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-3 sm:mb-4">
					About
				</h2>
				<div className="text-zinc-600 dark:text-zinc-400 space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed">
					<p>
						A software engineer with 7+ years of experience, who found his true
						passion in programming.
					</p>

					<p>
						I'm currently living in{" "}
						<span className="font-semibold text-foreground tracking-tight">
							Hồ Chí Minh City, Việt Nam
						</span>{" "}
						<Image
							src="/vn.png"
							alt="VN"
							width="20"
							height="10"
							className="inline-block rounded mb-0.5 vertical-middle"
						/>{" "}
						and working on full-stack development at{" "}
						<Link
							href="https://hiip.asia"
							className="underline font-semibold text-foreground hover:text-zinc-900 dark:hover:text-zinc-200 transition"
							target="_blank"
						>
							Hiip
						</Link>
						.
					</p>
				</div>
			</div>

			{/* Projects Section */}
			<div className="mb-8 sm:mb-12">
				<h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6">
					Projects
				</h2>
				<div className="space-y-4 sm:space-y-6">
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
								<div className="flex flex-col sm:flex-row sm:gap-2 items-start sm:items-baseline justify-between gap-1 flex-wrap">
									{project.website ? (
										<Link
											href={project.website}
											target="_blank"
											className="flex items-center gap-1.5 sm:gap-2 font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 hover:underline hover:text-foreground transition"
										>
											<span className="truncate">{project.name}</span>
											<ExternalLink className="size-3 flex-shrink-0" />
										</Link>
									) : (
										<h3 className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 truncate">
											{project.name}
										</h3>
									)}
									<span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap flex-shrink-0">
										{project.since}
									</span>
								</div>
								<p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5 sm:mt-1">
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
										<h3 className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 truncate">
											{exp.company}
										</h3>
										{exp.website && (
											<Tooltip>
												<TooltipTrigger>
													<Link href={exp.website}>
														<ExternalLink className="size-3 flex-shrink-0" />
													</Link>
												</TooltipTrigger>
												<TooltipContent>{exp.website}</TooltipContent>
											</Tooltip>
										)}
									</div>
									<span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap flex-shrink-0">
										{exp.period}
									</span>
								</div>
								<p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5 sm:mt-1">
									{exp.position}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Footer */}
			<div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 sm:pt-8 pb-8 sm:pb-12">
				<div className="flex justify-between items-center text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
					<div className="flex gap-1">
						<span>© 2025</span>
					</div>
				</div>
			</div>
		</Container>
	);
};

export { HomePageRoute };
