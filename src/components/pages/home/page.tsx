"use client";

import { PreviewCard } from "@base-ui/react/preview-card";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, FileText, Globe, MapPin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { StaggeredItem, StaggeredList } from "@/components/common/animations";
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
				<StaggeredList className="text-foreground space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed">
					<StaggeredItem>
						<p>
							A software engineer with 7+ years of experience, who found his
							true passion in programming.
						</p>
					</StaggeredItem>

					<StaggeredItem>
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
									<PreviewCard.Positioner
										sideOffset={8}
										side="top"
										align="start"
									>
										<PreviewCard.Popup className="z-200 w-80 origin-(--transform-origin) rounded-xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-150 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 overflow-hidden">
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
					</StaggeredItem>
				</StaggeredList>
			</div>

			<div className="mb-8 sm:mb-12">
				<h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6">
					Contact
				</h2>

				<StaggeredList className="flex items-center gap-1 group/list">
					<StaggeredItem>
						<Button
							variant="link"
							nativeButton={false}
							render={
								<Link
									href="https://github.com/fuongz"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Github"
								/>
							}
						>
							<SiGithub /> Github
						</Button>
					</StaggeredItem>

					<StaggeredItem>
						<Button
							variant="link"
							nativeButton={false}
							render={
								<Link
									href="https://x.com/fuong_z"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="X"
								/>
							}
						>
							<SiX /> X
						</Button>
					</StaggeredItem>
					<StaggeredItem>
						<Button
							nativeButton={false}
							variant="link"
							render={
								<Link
									href="https://cdn.phuongphung.com/04-2025-CV-PHUNG-THE-PHUONG.pdf"
									target="_blank"
									rel="noopener noreferrer"
								/>
							}
						>
							<FileText /> Resume
						</Button>
					</StaggeredItem>
				</StaggeredList>
			</div>

			{/* Work Section */}
			<div className="mb-8 sm:mb-12">
				<h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6">
					Work
				</h2>
				<StaggeredList className="space-y-4 sm:space-y-6 group/list">
					{experiences.map((exp) => (
						<StaggeredItem key={exp.id}>
							<Dialog>
								<DialogTrigger className="w-full text-left cursor-pointer">
									<div className="flex gap-3 sm:gap-4 transition-all duration-200 group-hover/list:opacity-40 group-hover/list:grayscale hover:opacity-100! hover:grayscale-0!">
										<div className="w-0.5 h-9.5 sm:w-12 sm:h-12 relative bg-zinc-100 overflow-hidden dark:bg-zinc-800 rounded flex items-center justify-center shrink-0">
											{exp.logo.startsWith("/") ? (
												<Image
													src={exp.logo}
													alt={exp.company}
													fill
													sizes="48px"
												/>
											) : (
												<span className="font-semibold text-xl">
													{exp.logo}
												</span>
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
															Now
														</Badge>
													)}
												</div>
												<span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap shrink-0">
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
									<DialogPopup className="sm:max-w-xl">
										<div className="relative p-6">
											<DialogClose className="absolute top-3 right-3 inline-flex items-center justify-center rounded-lg p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer">
												<X className="size-4" />
											</DialogClose>
											<div className="flex items-start gap-4">
												<div className="w-10 h-10 relative bg-zinc-100 overflow-hidden dark:bg-zinc-800 rounded-lg flex items-center justify-center shrink-0">
													{exp.logo.startsWith("/") ? (
														<Image
															src={exp.logo}
															alt={exp.company}
															fill
															sizes="36px"
														/>
													) : (
														<span className="font-semibold text-2xl">
															{exp.logo}
														</span>
													)}
												</div>
												<div className="flex-1 min-w-0 pr-6">
													<div className="flex items-center gap-2 flex-wrap">
														<DialogTitle className="font-semibold">
															{exp.company}
														</DialogTitle>
													</div>
													<p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">
														{exp.position}
													</p>
													{exp.overview && exp.overview.length > 0 && (
														<ul className="mt-3 list-disc list-inside text-sm text-zinc-700 dark:text-zinc-300 mb-4">
															{exp.overview.map((item) => (
																<li key={item}>
																	<span>{item}</span>
																</li>
															))}
														</ul>
													)}
												</div>
											</div>
											<div className="flex items-center justify-between pt-4">
												<span className="text-xs text-zinc-500 dark:text-zinc-400">
													{exp.period}
												</span>
												{exp.website && (
													<Button
														nativeButton={false}
														size="lg"
														variant="secondary"
														render={<Link href={exp.website} target="_blank" />}
													>
														<Globe />
														Website
													</Button>
												)}
											</div>
										</div>
									</DialogPopup>
								</DialogPortal>
							</Dialog>
						</StaggeredItem>
					))}
				</StaggeredList>
			</div>

			{/* Projects Section */}
			<div className="pb-8 sm:mb-12 relative pt-8">
				<h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6">
					Projects ({projects.length})
				</h2>
				<StaggeredList className="space-y-6 group/list">
					{projects.map((project) => (
						<StaggeredItem key={project.id}>
							<ProjectItem project={project} />
						</StaggeredItem>
					))}
				</StaggeredList>
			</div>
		</>
	);
}

export { HomePageRoute };
