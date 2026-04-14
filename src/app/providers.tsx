"use client";

import { ThemeProvider } from "next-themes";
import { Container } from "@/components/common/container";
import { FooterStatus } from "@/components/common/footer-status";
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
						<PageTransition>{children}</PageTransition>

						{/* Footer */}
						<div className="relative pt-6 sm:pt-8 pb-8 sm:pb-12">
							<div className="flex justify-between items-center text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
								<span>© 2026</span>
								<FooterStatus />
								<ThemeSwitch />
							</div>
						</div>
					</Container>
				</main>
			</ThemeProvider>
		</ApolloWrapper>
	);
}
