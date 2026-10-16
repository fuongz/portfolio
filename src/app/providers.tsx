"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { Container } from "@/components/common/container";
import { FooterStatus } from "@/components/common/footer-status";
import PageTransition from "@/components/common/page-transition";
import { ThemeSwitch } from "@/components/common/theme-switcher";
import { ApolloWrapper } from "@/lib/apollo/apollo-provider";

interface ProvidersProps {
	children: React.ReactNode;
}

export default function Providers({ children, ...props }: ProvidersProps) {
	const pathname = usePathname();
	const footerLink =
		pathname === "/"
			? { href: "/uses", label: "Uses" }
			: { href: "/", label: "Home" };

	return (
		<ApolloWrapper>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
				{...props}
			>
				<div className="flex min-h-dvh flex-col justify-between pt-16 sm:pt-24">
					<main>
						<Container>
							<PageTransition>{children}</PageTransition>
						</Container>
					</main>

					<Container>
						<footer className="mt-16 mb-16 flex animate-intro items-center justify-between gap-4 [animation-delay:0.6s]">
							<div className="flex flex-col gap-1">
								<FooterStatus />
								<p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-light text-neutral-500 dark:text-neutral-500">
									<span>© {new Date().getFullYear()} Phuong Phung</span>
									<span className="flex items-center gap-1">
										<Sparkles className="size-3" aria-hidden="true" />
										Inspired by
										<a
											href="https://www.harshsingh.me"
											target="_blank"
											rel="noopener noreferrer"
											className="text-neutral-700 underline-offset-2 transition-colors hover:text-neutral-900 hover:underline dark:text-neutral-300 dark:hover:text-neutral-100"
										>
											Harsh Singh
										</a>
									</span>
								</p>
							</div>
							<div className="flex items-center gap-1">
								<Link
									href={footerLink.href}
									className="rounded-full px-2.5 py-1 text-sm text-neutral-600 transition-[color,background-color,scale] duration-150 ease-out hover:bg-neutral-200 active:scale-[0.97] hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
								>
									{footerLink.label}
								</Link>
								<ThemeSwitch />
							</div>
						</footer>
					</Container>
				</div>
			</ThemeProvider>
		</ApolloWrapper>
	);
}
