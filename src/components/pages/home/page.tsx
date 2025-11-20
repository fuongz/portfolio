"use client";

import Image from "next/image";
import Link from "next/link";
import {
	BiLogoJavascript,
	BiLogoPython,
	BiLogoTypescript,
} from "react-icons/bi";
import { IoIosLink } from "react-icons/io";
import { PiFacebookLogo } from "react-icons/pi";
import { SiReaddotcv } from "react-icons/si";
import { VscGithubAlt, VscMail } from "react-icons/vsc";
import type { TContributeGraph } from "types/contribute-graph";
import { TextScramble } from "@/components/core/Animation/text-scramble";
import { Copyright } from "@/components/layout";
import { Container } from "@/components/Shared";
import { ContributeGraph } from "@/components/Shared/contribute-graph";
import { Button } from "@/components/ui";

const LANGUAGE_ICONS: {
	[key: string]: React.ReactNode;
} = {
	python: <BiLogoPython className="w-5 h-5" />,
	typescript: <BiLogoTypescript className="w-5 h-5" />,
	javascript: <BiLogoJavascript className="w-5 h-5" />,
};

interface Contact {
	[key: string]: string;
}

interface Props {
	contributes: TContributeGraph;
}

const HomePageRoute: React.FC<Props> = ({ contributes }) => {
	const contacts: Contact = {
		facebook: "phungthephuong",
		email: "phuongthephung@gmail.com",
		github: "fuongz",
	};

	const projects = [
		{
			url: "https://www.trinhvaphuong.com/",
			description: "Our Wedding Invitation and Photo Gallery",
			thumbnailUrl: "/projects/trinhvaphuong-com.png",
			title: "Our wedding",
			languages: ["typescript"],
			technologies: ["nextjs", "cloudflare"],
		},
		{
			url: "https://bieudovang.net/",
			description: "Việt Nam gold/currencies price charts",
			title: "BieuDoVang",
			technologies: ["nextjs", "hono", "cloudflare", "sqlite"],
			languages: ["typescript"],
			thumbnailUrl: "/projects/bieudovang-com.png",
		},
		{
			url: "https://image.phake.app/",
			description: "A simple image converter API.",
			title: "Image-Proxy",
			technologies: ["python", "docker"],
			languages: ["python"],
			thumbnailUrl: "/projects/image-proxy.png",
		},
	];

	return (
		<Container>
			<h1 className="text-3xl mt-8 font-semibold mb-4 flex items-center gap-1">
				<TextScramble className="font-serif">Phuong Phung</TextScramble>{" "}
				<span className="text-lg font-serif ml-2 text-zinc-600 dark:text-zinc-400 font-normal">
					(🇻🇳 fuongz)
				</span>
			</h1>

			<div>
				<p className="dark:text-zinc-400 text-zinc-600">
					A software engineer who found his true passion in programming. I share
					insights through{" "}
					<a
						href="https://blog.phuongphung.com?ref=phuongphung.com"
						className="hover:transition transition underline"
					>
						my blog
					</a>
					.
				</p>
			</div>

			<div className="flex gap-2 mt-4 flex-wrap">
				<Link
					href={`https://github.com/${contacts.github}?rel=phuongphung.com`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button>
						<VscGithubAlt className="h-4 w-4 mr-1 md:mr-2" />
						GitHub
					</Button>
				</Link>
				<Link
					href={`https://www.facebook.com/${contacts.facebook}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button>
						<PiFacebookLogo className="h-4 w-4 mr-1 md:mr-2" />
						Facebook
					</Button>
				</Link>
				<Link href={`mailto:${contacts.email}`}>
					<Button>
						<VscMail className="h-4 w-4 mr-1 md:mr-2" />
						Email
					</Button>
				</Link>
				<Link href="https://cdn.phuongphung.com/04-2025-CV-PHUNG-THE-PHUONG.pdf">
					<Button variant="secondary">
						<SiReaddotcv className="h-4 w-4 mr-1 md:mr-2" />
						Resume
					</Button>
				</Link>
			</div>

			<div className="mt-12 w-full flex flex-col justify-center">
				<ContributeGraph weeks={contributes} />
			</div>

			<div className="mt-12">
				<div className="mb-2 text-zinc-900 dark:text-white font-bold text-lg font-serif flex gap-2 items-center">
					Projects ({projects.length})
				</div>
				<div className="grid grid-cols-1 gap-6 md:gap-0">
					{projects.map((project) => (
						<Link
							href={`${project.url}?rel=phuongphung.com`}
							key={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:transition w-full duration-400 items-start text-lg flex flex-col md:flex-row gap-4 hover:duration-400 hover:scale-102 group transition p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer rounded-xl"
						>
							{project.thumbnailUrl && (
								<div className="rounded relative overflow-hidden w-full h-[200px] md:w-[180px] md:h-[100px]">
									<Image
										src={project.thumbnailUrl}
										fill
										className="w-full h-full object-cover"
										alt=""
									/>
								</div>
							)}
							<div className="flex flex-col w-full">
								<div className="mb-1 font-serif text-zinc-800 dark:text-white font-semibold flex gap-2 items-center">
									{project.title}
									<div className="flex items-center gap-2">
										{project.languages.map((lang) => (
											<span
												key={project.url + lang}
												className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition hover:transition"
											>
												{LANGUAGE_ICONS[lang]}
											</span>
										))}
									</div>
								</div>
								<div>
									<p className="mb-2 inline-flex hover:underline hover:text-blue-500 hover:transition transition items-center gap-2 dark:text-zinc-400 font-medium text-sm text-zinc-400">
										<IoIosLink className="h-4 w-4" />
										{project.url}
									</p>
								</div>
								<p className="dark:text-zinc-400 font-medium text-sm text-zinc-500">
									{project.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			<Copyright />
		</Container>
	);
};

export { HomePageRoute };
