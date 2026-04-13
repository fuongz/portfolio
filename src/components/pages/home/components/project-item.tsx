"use client";

import {
	SiChromewebstore,
	SiGithub,
	SiMintlify,
	SiNpm,
} from "@icons-pack/react-simple-icons";
import {
	Bot,
	ExternalLink,
	Gamepad2,
	InfinityIcon,
	Lock,
	Package,
	X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { fetchLatestCommit, fetchReadme } from "@/app/actions/fetch-readme";
import { CodeBlock } from "@/components/common/code-block";

type LatestCommit = {
	sha: string;
	message: string;
	date: string;
	author: string;
	authorAvatar?: string;
};

import { Badge } from "@/components/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogDescription,
	DialogHeader,
	DialogOverlay,
	DialogPopup,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

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

function TagBadge({ tag, projectId }: { tag: string; projectId: string }) {
	return (
		<Badge
			key={`${projectId}-${tag}`}
			variant="outline"
			className={
				tag === "Extension"
					? "gap-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
					: tag === "Application"
						? "gap-1 bg-zinc-50 text-zinc-700 border-zinc-200 dark:bg-zinc-950 dark:text-zinc-300 dark:border-zinc-800"
						: tag === "Game"
							? "gap-1 bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950 dark:text-violet-300 dark:border-violet-800"
							: tag === "AI"
								? "gap-1 bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800"
								: tag === "npm"
									? "gap-1 bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800"
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
				<Gamepad2 width={12} height={12} fill="currentColor" stroke="none" />
			)}
			{tag === "AI" && <Bot width={12} height={12} />}
			{tag === "npm" && <Package width={12} height={12} />}
			{tag}
		</Badge>
	);
}

function ProjectItem({ project }: { project: Project }) {
	const [readme, setReadme] = useState<string | null>(null);
	const [latestCommit, setLatestCommit] = useState<LatestCommit | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const githubLink = project.links?.find((l) => l.type === "github");
	const isPrivate =
		project.isPrivate ?? (!githubLink && project.since.includes("Present"));

	const handleOpenChange = async (open: boolean) => {
		setIsOpen(open);
		if (open && githubLink && !readme) {
			setIsLoading(true);
			try {
				const repo = githubLink.url.replace("https://github.com/", "");
				const [readmeContent, commitData] = await Promise.all([
					fetchReadme(repo),
					fetchLatestCommit(repo),
				]);
				setReadme(readmeContent);
				setLatestCommit(commitData);
			} catch (error) {
				console.error("Failed to fetch README:", error);
			} finally {
				setIsLoading(false);
			}
		}
	};

	return (
		<Dialog key={project.id} open={isOpen} onOpenChange={handleOpenChange}>
			<DialogTrigger className="w-full text-left cursor-pointer">
				<div className="flex gap-3 sm:gap-4 transition-all duration-200 group-hover/list:opacity-40 group-hover/list:grayscale hover:!opacity-100 hover:!grayscale-0">
					<div className="w-[58px] h-[58px] sm:w-[48px] sm:h-[48px] relative bg-zinc-100 overflow-hidden dark:bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
						{project.icon ? (
							<project.icon className="w-6 h-6" />
						) : project.logo?.startsWith("/") ? (
							<Image
								src={project.logo}
								alt={project.name}
								fill
								sizes="58px"
								className="object-cover"
							/>
						) : (
							<span className="font-semibold text-xl">{project.logo}</span>
						)}
					</div>
					<div className="flex-1 min-w-0">
						<div className="flex flex-col sm:flex-row sm:gap-2 items-start sm:items-baseline justify-between gap-0.5 flex-wrap">
							<div className="flex items-center flex-wrap gap-2">
								<span className="flex items-center gap-1.5 sm:gap-2 font-semibold">
									<span className="truncate">{project.name}</span>
								</span>
								{project.tags &&
									project.tags.length > 0 &&
									project.tags.map((tag) => (
										<TagBadge
											key={`${project.id}-${tag}`}
											tag={tag}
											projectId={project.id}
										/>
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
						{project.lastCommit && (
							<p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
								Last commit:{" "}
								{new Date(project.lastCommit).toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
									year: "numeric",
								})}
							</p>
						)}
					</div>
				</div>
			</DialogTrigger>
			<DialogPortal>
				<DialogOverlay />
				<DialogPopup size={isPrivate ? "md" : "4xl"}>
					<div className="relative">
						<DialogHeader className="p-4">
							<DialogClose className="absolute top-3 right-3 inline-flex items-center justify-center rounded-lg p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer">
								<X className="size-4" />
							</DialogClose>
							<div className="flex items-start gap-4">
								<div className="w-14 h-14 relative bg-zinc-100 overflow-hidden dark:bg-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0">
									{project.icon ? (
										<project.icon className="w-8 h-8" />
									) : project.logo?.startsWith("/") ? (
										<Image
											src={project.logo}
											alt={project.name}
											fill
											sizes="56px"
											className="object-cover"
										/>
									) : (
										<span className="font-semibold text-2xl">
											{project.logo}
										</span>
									)}
								</div>
								<div className="w-full">
									<DialogTitle className="mb-2 flex gap-2 items-center flex-wrap">
										<span className="flex flex-wrap items-center gap-2 pr-8">
											{isPrivate && (
												<div className="flex-1">
													<Tooltip>
														<Button
															size="xs"
															variant="secondary"
															render={<TooltipTrigger />}
														>
															<Lock /> Private
														</Button>
														<TooltipContent>
															<span>This project is private</span>
														</TooltipContent>
													</Tooltip>
												</div>
											)}
											{project.name}
										</span>
										<span className="text-xs text-zinc-400 dark:text-zinc-500">
											{project.since}
											{project.isNoEndDate && (
												<>
													{" "}
													-{" "}
													<InfinityIcon className="inline-block size-3.5 mb-0.5 text-purple-500" />
												</>
											)}
										</span>
									</DialogTitle>
									<DialogDescription>{project.description}</DialogDescription>
									{latestCommit && (
										<div className="flex w-full items-center gap-3 mt-3 p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900/50">
											{latestCommit.authorAvatar && (
												<Image
													src={latestCommit.authorAvatar}
													alt={latestCommit.author}
													width={24}
													height={24}
													className="rounded-full"
												/>
											)}
											<div className="flex-1 min-w-0">
												<p className="text-xs font-medium text-zinc-700 dark:text-zinc-300 truncate">
													{latestCommit.message.split("\n")[0]}
												</p>
												<p className="text-xs text-zinc-400 dark:text-zinc-500">
													{new Date(latestCommit.date).toLocaleDateString(
														"en-US",
														{
															month: "short",
															day: "numeric",
															year: "numeric",
														}
													)}{" "}
													· {latestCommit.sha.slice(0, 7)}
												</p>
											</div>
										</div>
									)}
								</div>
							</div>
						</DialogHeader>

						{githubLink && (
							<div className="p-4">
								{isLoading ? (
									<div className="flex items-center justify-center py-8">
										<Spinner />
									</div>
								) : readme ? (
									<div className="prose prose-sm dark:prose-invert max-w-none max-h-100 overflow-y-auto">
										<ReactMarkdown
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeHighlight]}
											components={{
												code: CodeBlock,
											}}
										>
											{readme}
										</ReactMarkdown>
									</div>
								) : null}
							</div>
						)}

						<div className="p-4 bg-zinc-50 dark:bg-zinc-800 border-t rounded-b-xl">
							{project.links && project.links.length > 0 && (
								<div className="flex flex-wrap justify-between gap-2">
									{project.links?.map((link) => {
										const linkConfig = {
											npm: {
												variant: "default",
												className:
													"bg-[#CB3837] text-white dark:bg-[#CB3837] dark:text-white",
												icon: SiNpm,
												label: "npm",
											},
											chrome_extension: {
												variant: "default",
												className:
													"bg-[#4285F4] text-white dark:bg-[#4285F4] dark:text-white",
												icon: SiChromewebstore,
												label: "Chrome Extension",
											},
											web: {
												variant: "default",
												className:
													"bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
												icon: ExternalLink,
												label: "Visit",
											},
											github: {
												variant: "default",
												className:
													"bg-[#181717] text-white dark:bg-[#181717] dark:text-white",
												icon: SiGithub,
												label: "GitHub",
											},
											mintlify: {
												variant: "default",
												className:
													"bg-[#18E299] text-white dark:bg-[#18E299] dark:text-white",
												icon: SiMintlify,
												label: "Docs",
											},
										}[link.type];

										return (
											<Button
												key={`${link.url}-${link.type}`}
												variant={linkConfig.variant as "default" | "outline"}
												className={cn(linkConfig.className, "w-auto flex-1")}
												size="lg"
												render={<Link href={link.url} target="_blank" />}
												nativeButton={false}
											>
												<linkConfig.icon />
												{linkConfig.label}
											</Button>
										);
									})}
								</div>
							)}
						</div>
					</div>
				</DialogPopup>
			</DialogPortal>
		</Dialog>
	);
}

export { ProjectItem };
