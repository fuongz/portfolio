"use client";

import { PreviewCard } from "@base-ui/react/preview-card";
import { ArrowUpRight, MapPin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/common/page-header";
import { Badge } from "@/components/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogOverlay,
	DialogPopup,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectItem } from "./components/project-item";
import type { Experience, Project } from "./data";

type HomePageRouteProps = {
	projects: Project[];
	experiences: Experience[];
};

function HomePageRoute({ projects, experiences }: HomePageRouteProps) {
	return (
		<>
			<PageHeader title="fuongz" description="Software Engineer" />
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
						<PreviewCard.Root>
							<PreviewCard.Trigger
								className="border-dashed border-b border-foreground font-semibold text-foreground hover:text-zinc-900 dark:hover:text-zinc-200 transition cursor-default"
								render={<span />}
								delay={100}
							>
								Hồ Chí Minh City, Việt Nam
								<Image
									src="/vn.png"
									alt="VN"
									width={20}
									height={10}
									style={{ width: "auto", height: "auto" }}
									className="inline-block rounded mb-0.5 ml-1 vertical-middle"
								/>
							</PreviewCard.Trigger>
							<PreviewCard.Portal>
								<PreviewCard.Positioner sideOffset={8} side="top" align="start">
									<PreviewCard.Popup className="z-[200] w-80 origin-(--transform-origin) rounded-xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-150 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 overflow-hidden">
										<div className="px-3 pt-3 pb-2 border-b border-foreground/8">
											<p className="font-semibold text-sm text-foreground leading-tight">
												Hồ Chí Minh City
											</p>
											<p className="text-xs text-muted-foreground mt-0.5">
												Thành phố Hồ Chí Minh · Saigon
											</p>
										</div>
										<div className="p-3 space-y-2">
											<p className="text-xs text-foreground leading-relaxed">
												The most populous city in Vietnam, located in the
												southeastern region. A major economic hub and cultural
												center with a rich history.
											</p>
											<div className="grid grid-cols-2 gap-2 pt-1">
												<div className="rounded-lg bg-muted/60 px-2.5 py-2">
													<p className="text-[10px] text-muted-foreground uppercase tracking-wide">
														Population
													</p>
													<p className="text-xs font-semibold text-foreground mt-0.5">
														~9.3 million
													</p>
												</div>
												<div className="rounded-lg bg-muted/60 px-2.5 py-2">
													<p className="text-[10px] text-muted-foreground uppercase tracking-wide">
														Area
													</p>
													<p className="text-xs font-semibold text-foreground mt-0.5">
														2,061 km²
													</p>
												</div>
											</div>
											<Link
												href="https://share.google/KZ7gQia5fTV6R9qS6"
												target="_blank"
												className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition pt-0.5"
											>
												<MapPin className="size-3 shrink-0" />
												View on Google Maps
												<ArrowUpRight className="size-3 ml-auto shrink-0" />
											</Link>
										</div>
									</PreviewCard.Popup>
								</PreviewCard.Positioner>
							</PreviewCard.Portal>
						</PreviewCard.Root>{" "}
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
					className="pointer-events-none z-0 text-zinc-300 dark:text-zinc-700 h-px w-full absolute top-0 left-0"
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
						<ProjectItem key={project.id} project={project} />
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
						<Dialog key={exp.id}>
							<DialogTrigger className="w-full text-left cursor-pointer">
								<div className="flex gap-3 sm:gap-4 transition-all duration-200 group-hover/list:opacity-40 group-hover/list:grayscale hover:!opacity-100 hover:!grayscale-0">
									<div className="w-[38px] h-[38px] sm:w-[48px] sm:h-[48px] relative bg-zinc-100 overflow-hidden dark:bg-zinc-800 rounded flex items-center justify-center flex-shrink-0">
										{exp.logo.startsWith("/") ? (
											<Image
												src={exp.logo}
												alt={exp.company}
												fill
												sizes="48px"
											/>
										) : (
											<span className="font-semibold text-xl">{exp.logo}</span>
										)}
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-start sm:items-baseline justify-between gap-2 sm:gap-1 flex-wrap">
											<div className="flex items-center gap-1.5 sm:gap-2">
												<h3 className="font-semibold truncate">
													{exp.company}
												</h3>
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
							</DialogTrigger>
							<DialogPortal>
								<DialogOverlay />
								<DialogPopup>
									<div className="relative p-6">
										<DialogClose className="absolute top-3 right-3 inline-flex items-center justify-center rounded-lg p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer">
											<X className="size-4" />
										</DialogClose>
										<div className="flex items-start gap-4">
											<div className="w-14 h-14 relative bg-zinc-100 overflow-hidden dark:bg-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0">
												{exp.logo.startsWith("/") ? (
													<Image
														src={exp.logo}
														alt={exp.company}
														fill
														sizes="56px"
													/>
												) : (
													<span className="font-semibold text-2xl">
														{exp.logo}
													</span>
												)}
											</div>
											<div className="flex-1 min-w-0 pr-6">
												<div className="flex items-center gap-2 flex-wrap">
													<DialogTitle>{exp.company}</DialogTitle>
													{exp.status === "live" && (
														<Badge
															variant="default"
															className="bg-green-500 rounded-xs px-1 py-0 hover:bg-green-600 text-white border-green-500"
														>
															Present
														</Badge>
													)}
												</div>
												<p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
													{exp.position}
												</p>
											</div>
										</div>
										<div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
											<span className="text-xs text-zinc-400 dark:text-zinc-500">
												{exp.period}
											</span>
											{exp.website && (
												<Button
													nativeButton={false}
													size="lg"
													render={<Link href={exp.website} target="_blank" />}
												>
													Visit
													<ArrowUpRight />
												</Button>
											)}
										</div>
									</div>
								</DialogPopup>
							</DialogPortal>
						</Dialog>
					))}
				</div>
			</div>
		</>
	);
}

export { HomePageRoute };
