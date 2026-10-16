"use client";

import { Globe, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
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
import type { Experience } from "../types";

function ExperienceLogo({ exp, size }: { exp: Experience; size: number }) {
	return (
		<span
			className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-neutral-200 dark:bg-neutral-800"
			style={{ width: size, height: size }}
		>
			{exp.logo.startsWith("/") ? (
				<Image src={exp.logo} alt={exp.company} fill sizes={`${size}px`} />
			) : (
				<span className="text-xs font-semibold">{exp.logo}</span>
			)}
		</span>
	);
}

type ExperienceItemProps = {
	exp: Experience;
	isHovered: boolean;
	onHover: () => void;
};

function ExperienceItem({ exp, isHovered, onHover }: ExperienceItemProps) {
	return (
		<Dialog>
			<DialogTrigger
				onMouseEnter={onHover}
				onFocus={onHover}
				className="group relative isolate -mx-3 flex w-[calc(100%+1.5rem)] cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
			>
				<AnimatePresence>
					{isHovered && (
						<motion.span
							layoutId="work-hover"
							aria-hidden="true"
							className="absolute inset-0 -z-10 rounded-xl bg-neutral-200/70 dark:bg-neutral-800/70"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
						/>
					)}
				</AnimatePresence>
				<ExperienceLogo exp={exp} size={20} />
				<span className="flex min-w-0 flex-1 items-baseline gap-2">
					<span className="shrink-0 font-normal">{exp.company}</span>
					<span className="truncate text-sm font-light text-neutral-500 dark:text-neutral-400">
						{exp.position}
					</span>
				</span>
				{exp.status === "live" && (
					<span className="size-1.5 shrink-0 rounded-full bg-emerald-500" />
				)}
				<span className="shrink-0 text-sm font-light tabular-nums text-neutral-500 dark:text-neutral-400">
					{exp.period}
				</span>
			</DialogTrigger>
			<DialogPortal>
				<DialogOverlay />
				<DialogPopup className="sm:max-w-xl">
					<div className="relative p-6">
						<DialogClose className="absolute top-3 right-3 inline-flex cursor-pointer items-center justify-center rounded-lg p-1.5 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100">
							<X className="size-4" />
						</DialogClose>
						<div className="flex items-start gap-4">
							<ExperienceLogo exp={exp} size={40} />
							<div className="min-w-0 flex-1 pr-6">
								<DialogTitle className="font-semibold">
									{exp.company}
								</DialogTitle>
								<p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
									{exp.position}
									{exp.duration && (
										<span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs dark:bg-neutral-800">
											{exp.duration}
										</span>
									)}
								</p>
								{exp.overview && exp.overview.length > 0 && (
									<ul className="mt-3 mb-4 list-inside list-disc text-sm font-light text-neutral-700 dark:text-neutral-300">
										{exp.overview.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								)}
							</div>
						</div>
						<div className="flex items-center justify-between pt-4">
							<span className="text-xs text-neutral-500 dark:text-neutral-400">
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
	);
}

export { ExperienceItem };
