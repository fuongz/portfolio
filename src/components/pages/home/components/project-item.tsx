import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project, ProjectLink } from "../types";

const LINK_PRIORITY: ProjectLink["type"][] = [
	"web",
	"chrome_extension",
	"npm",
	"mintlify",
	"github",
];

function getPrimaryLink(project: Project) {
	for (const type of LINK_PRIORITY) {
		const link = project.links?.find((l) => l.type === type);
		if (link) return link.url;
	}
	return undefined;
}

function InlineLogo({ project }: { project: Project }) {
	if (project.icon) return <project.icon className="mr-1.5 size-4 shrink-0" />;
	if (!project.logo?.startsWith("/")) return null;
	return (
		<Image
			src={project.logo}
			alt=""
			width={16}
			height={16}
			className="mr-1.5 size-4 shrink-0 rounded-[4px] object-cover"
		/>
	);
}

type ProjectItemProps = {
	project: Project;
	/** Spans both grid columns (used for a lone last item). */
	span?: boolean;
};

function ProjectItem({ project, span = false }: ProjectItemProps) {
	const href = getPrimaryLink(project);
	const className = cn(
		"group relative block w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white outline-offset-2 transition-[border-color,scale] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-neutral-400 dark:border-neutral-800 dark:bg-neutral-900",
		href &&
			"hover:border-neutral-300 active:scale-[0.99] dark:hover:border-neutral-700",
		span ? "aspect-[4/3] sm:col-span-2 sm:aspect-[8/3]" : "aspect-[4/3]"
	);

	const content = project.screenshot ? (
		<>
			<Image
				src={project.screenshot}
				alt={`${project.name} website`}
				fill
				sizes={
					span
						? "(min-width: 640px) 1024px, 95vw"
						: "(min-width: 640px) 512px, 95vw"
				}
				className={cn(
					"object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03] motion-reduce:transition-none",
					project.screenshotPosition === "center"
						? "object-center"
						: "object-top"
				)}
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-transparent via-black/25 to-black/65"
			/>
			<div className="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-2 px-4 pb-3 text-white">
				<span className="flex min-w-0 items-center gap-0.5 text-sm font-medium">
					<InlineLogo project={project} />
					<span className="truncate">{project.name}</span>
					<ArrowUpRight className="size-3.5 shrink-0 text-white/70 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</span>
				<span className="shrink-0 text-sm font-light tabular-nums text-white/75">
					{new Date(project.firstCommit).getFullYear()}
				</span>
			</div>
		</>
	) : (
		<>
			<div
				aria-hidden="true"
				className="absolute inset-0 bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] [background-size:14px_14px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] dark:bg-[radial-gradient(var(--color-neutral-800)_1px,transparent_1px)]"
			/>
			<div className="absolute inset-0 flex items-center justify-center pb-6">
				<div
					className={cn(
						"relative flex items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-1 group-hover:scale-[1.04] motion-reduce:transition-none dark:bg-neutral-800 dark:shadow-[0_8px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.06)]",
						"size-16"
					)}
				>
					{project.icon ? (
						<project.icon className="size-1/2" />
					) : project.logo?.startsWith("/") ? (
						<Image
							src={project.logo}
							alt=""
							fill
							sizes="80px"
							className="object-cover"
						/>
					) : (
						<span className="text-2xl font-semibold">{project.logo}</span>
					)}
				</div>
			</div>
			{
				<p className="pointer-events-none absolute inset-x-4 bottom-11 translate-y-1 text-center text-xs font-light text-neutral-500 opacity-0 transition-[opacity,translate] duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 dark:text-neutral-400">
					{project.description}
				</p>
			}
			<div className="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-2 px-4 pb-3">
				<span className="flex min-w-0 items-center gap-0.5 text-sm font-medium">
					<InlineLogo project={project} />
					<span className="truncate">{project.name}</span>
					{href && (
						<ArrowUpRight className="size-3.5 shrink-0 text-neutral-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					)}
				</span>
				<span className="shrink-0 text-sm font-light tabular-nums text-neutral-500 dark:text-neutral-400">
					{new Date(project.firstCommit).getFullYear()}
				</span>
			</div>
		</>
	);

	if (!href) {
		return (
			<div className={className} title={project.description}>
				{content}
			</div>
		);
	}

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
			title={project.description}
		>
			{content}
		</a>
	);
}

export { ProjectItem };
