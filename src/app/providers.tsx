"use client";

import { ThemeProvider } from "next-themes";
import { Container } from "@/components/common/container";
import { Navigation } from "@/components/common/navigation";
import PageTransition from "@/components/common/page-transition";
import { ThemeSwitch } from "@/components/common/theme-switcher";
import { ApolloWrapper } from "@/lib/apollo/apollo-provider";

interface ProvidersProps {
	children: React.ReactNode;
}

export default function Providers({ children, ...props }: ProvidersProps) {
	return (
		<ApolloWrapper>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
				{...props}
			>
				<Navigation />
				<main className="mt-0 relative">
					<div className="absolute top-0 -z-10 h-full w-full bg-background">
						<div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-purple-200 dark:bg-purple-950 opacity-50 blur-[80px]"></div>
					</div>
					<Container>
						{/* Profile Section */}
						<div className="pt-4 sm:pt-8 mb-8 sm:mb-12 flex items-center gap-4">
							<div className="flex flex-col flex-1">
								<h1 className="text-lg font-serif sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
									fuongz
								</h1>
								<p className="text-muted-foreground text-sm mt-0.5">
									Software Engineer
								</p>
							</div>
						</div>

						<PageTransition>{children}</PageTransition>

						{/* Footer */}
						<div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 sm:pt-8 pb-8 sm:pb-12">
							<div className="flex justify-between items-center text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
								<span>© 2025</span>
								<ThemeSwitch />
							</div>
						</div>
					</Container>
				</main>
			</ThemeProvider>
		</ApolloWrapper>
	);
}
