"use client";

import { PreviewCard } from "@base-ui/react/preview-card";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Check, Copy, FileText, MapPin } from "lucide-react";
import { LayoutGroup } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { pillClassName } from "@/components/common/pill";
import { cn } from "@/lib/utils";
import { ExperienceItem } from "./components/experience-item";
import { ProjectItem } from "./components/project-item";
import type { Experience, Project } from "./data";

const EMAIL = "hi@phuongphung.com";

const socialLinks = [
	{ href: "https://github.com/fuongz", label: "GitHub", icon: SiGithub },
	{ href: "https://x.com/fuong_z", label: "X", icon: SiX },
	{
		href: "https://cdn.phuongphung.com/04-2025-CV-PHUNG-THE-PHUONG.pdf",
		label: "Resume",
		icon: FileText,
	},
];

function CopyEmailButton() {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (!copied) return;
		const timeout = setTimeout(() => setCopied(false), 1500);
		return () => clearTimeout(timeout);
	}, [copied]);

	return (
		<button
			type="button"
			aria-label={`Copy email address ${EMAIL}`}
			onClick={() => {
				navigator.clipboard.writeText(EMAIL).then(() => setCopied(true));
			}}
			className={cn(pillClassName, "cursor-pointer pl-2.5")}
		>
			<span className="relative size-3.5">
				<Copy
					className={cn(
						"absolute inset-0 transition-[opacity,scale,filter] duration-200 ease-out",
						copied && "scale-50 opacity-0 blur-[2px]"
					)}
				/>
				<Check
					className={cn(
						"absolute inset-0 text-emerald-600 transition-[opacity,scale,filter] duration-200 ease-out dark:text-emerald-400",
						!copied && "scale-50 opacity-0 blur-[2px]"
					)}
				/>
			</span>
			{EMAIL}
			<span className="sr-only" aria-live="polite">
				{copied ? "Copied" : ""}
			</span>
		</button>
	);
}

function LocationPreview() {
	return (
		<PreviewCard.Root>
			<PreviewCard.Trigger
				className="cursor-default whitespace-nowrap underline decoration-neutral-300 decoration-wavy underline-offset-4 dark:decoration-neutral-600"
				render={<span />}
				delay={100}
			>
				<Image
					src="/vn.png"
					alt=""
					width={20}
					height={10}
					style={{ width: "auto", height: "auto" }}
					className="mr-1 mb-0.5 inline-block rounded-[2px]"
				/>
				Hồ Chí Minh City
			</PreviewCard.Trigger>
			<PreviewCard.Portal>
				<PreviewCard.Positioner sideOffset={8} side="top" align="start">
					<PreviewCard.Popup className="z-200 w-80 origin-(--transform-origin) overflow-hidden rounded-2xl border border-neutral-200 bg-white text-popover-foreground shadow-[0_16px_40px_rgba(0,0,0,0.14)] outline-none duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 dark:border-neutral-700 dark:bg-neutral-900">
						<div className="border-b border-neutral-200 px-4 pt-3 pb-2 dark:border-neutral-800">
							<p className="text-sm font-medium leading-tight">
								Hồ Chí Minh City
							</p>
							<p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
								Thành phố Hồ Chí Minh, a.k.a. Saigon
							</p>
						</div>
						<div className="space-y-2 p-4">
							<p className="text-xs font-light leading-relaxed">
								The most populous city in Vietnam, located in the southeastern
								region. A major economic hub and cultural center with a rich
								history.
							</p>
							<div className="grid grid-cols-2 gap-2 pt-1">
								<div className="rounded-lg bg-neutral-100 px-2.5 py-2 dark:bg-neutral-800">
									<p className="text-[10px] uppercase tracking-wide text-neutral-500">
										Population
									</p>
									<p className="mt-0.5 text-xs font-medium">~9.3 million</p>
								</div>
								<div className="rounded-lg bg-neutral-100 px-2.5 py-2 dark:bg-neutral-800">
									<p className="text-[10px] uppercase tracking-wide text-neutral-500">
										Area
									</p>
									<p className="mt-0.5 text-xs font-medium">2,061 km²</p>
								</div>
							</div>
							<Link
								href="https://share.google/KZ7gQia5fTV6R9qS6"
								target="_blank"
								className="flex items-center gap-1 pt-0.5 text-xs text-neutral-500 transition hover:text-neutral-900 dark:hover:text-neutral-100"
							>
								<MapPin className="size-3 shrink-0" />
								View on Google Maps
								<ArrowUpRight className="ml-auto size-3 shrink-0" />
							</Link>
						</div>
					</PreviewCard.Popup>
				</PreviewCard.Positioner>
			</PreviewCard.Portal>
		</PreviewCard.Root>
	);
}

function WorkList({ experiences }: { experiences: Experience[] }) {
	const [hoveredId, setHoveredId] = useState<string | null>(null);

	return (
		<LayoutGroup id="work">
			{/* biome-ignore lint/a11y/noStaticElementInteractions: hover tracking only */}
			<div className="flex flex-col" onMouseLeave={() => setHoveredId(null)}>
				{experiences.map((exp) => (
					<ExperienceItem
						key={exp.id}
						exp={exp}
						isHovered={hoveredId === exp.id}
						onHover={() => setHoveredId(exp.id)}
					/>
				))}
			</div>
		</LayoutGroup>
	);
}

function SectionLabel({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="mb-3 text-sm font-light text-neutral-500 dark:text-neutral-400">
			{children}
		</h2>
	);
}

type HomePageRouteProps = {
	projects: Project[];
	experiences: Experience[];
};

function HomePageRoute({ projects, experiences }: HomePageRouteProps) {
	return (
		<>
			<header>
				<h1 className="mb-6 animate-intro font-semibold">Phuong Phung</h1>
				<div className="flex flex-col gap-y-3.5">
					<p className="animate-intro font-light leading-snug [animation-delay:0.25s]">
						I'm Phuong, a software engineer from <LocationPreview /> with 7+
						years of experience, who found his true passion in programming. This
						is where I share the things I'm building.
					</p>
					<p className="animate-intro font-light leading-snug [animation-delay:0.3s]">
						I currently work on full-stack development at{" "}
						<Link
							href="https://hiip.asia"
							target="_blank"
							rel="noopener noreferrer"
							className="whitespace-nowrap font-normal underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-500 dark:decoration-neutral-600 dark:hover:decoration-neutral-400"
						>
							<Image
								src="/exps/hiip.png"
								alt=""
								width={16}
								height={16}
								className="mr-1 mb-0.5 inline-block rounded-[4px]"
							/>
							Hiip
						</Link>
						.
					</p>
					<div className="mt-1 flex animate-intro flex-row flex-wrap items-center gap-x-1 gap-y-2 [animation-delay:0.35s]">
						<CopyEmailButton />
						{socialLinks.map(({ href, label, icon: Icon }) => (
							<Link
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className={pillClassName}
							>
								<Icon />
								{label}
							</Link>
						))}
					</div>
				</div>
			</header>

			<section className="mt-16 animate-intro [animation-delay:0.4s]">
				<SectionLabel>Work</SectionLabel>
				<WorkList experiences={experiences} />
			</section>

			<section className="mt-16 animate-intro [animation-delay:0.5s]">
				<div className="relative left-1/2 grid w-[min(1024px,95vw)] -translate-x-1/2 grid-cols-1 gap-3 sm:grid-cols-2">
					{projects.map((project, index) => (
						<ProjectItem
							key={project.id}
							project={project}
							span={projects.length % 2 === 1 && index === projects.length - 1}
						/>
					))}
				</div>
			</section>
		</>
	);
}

export { HomePageRoute };
