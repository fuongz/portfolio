import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import {
	Averia_Serif_Libre,
	Bricolage_Grotesque,
	Inconsolata,
} from "next/font/google";
import Script from "next/script";
import Providers from "./providers";

const sansSerifFont = Bricolage_Grotesque({
	display: "swap",
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

const displayFont = Averia_Serif_Libre({
	display: "swap",
	weight: ["300", "400", "700"],
	variable: "--font-serif",
	subsets: ["latin"],
});

const monoFont = Inconsolata({
	variable: "--font-mono",
	display: "swap",
	weight: ["300", "400", "500"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "fuongz",
		template: "%s | fuongz",
	},
	description:
		"Personal website of Phuong Phung, a software engineer who found his true passion in programming, topics: technology, slice of life.",
	metadataBase: new URL("https://phuongphung.com"),
	alternates: {
		canonical: "/",
		languages: {
			en: "https://phuongphung.com",
		},
	},
	openGraph: {
		title: "fuongz",
		description:
			"Personal website of Phuong Phung, a software engineer who found his true passion in programming, topics: technology, slice of life.",
		url: "https://phuongphung.com",
		siteName: "fuongz",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/og-default.png",
				width: 1200,
				height: 630,
				alt: "fuongz",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "fuongz",
		description:
			"Personal website of Phuong Phung, a software engineer who found his true passion in programming, topics: technology, slice of life.",
		images: ["/og-default.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
	const gaId = process.env.NEXT_PUBLIC_GA_ID;
	const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

	return (
		<html
			lang="en"
			className={sansSerifFont.className}
			suppressHydrationWarning
		>
			<head>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: no need
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Phuong Phung",
							url: "https://phuongphung.com",
							jobTitle: "Software Engineer",
							sameAs: [
								"https://github.com/fuongz",
								"https://twitter.com/fuongz",
							],
						}),
					}}
				/>
				{gtmId && (
					<Script id="gtm" strategy="afterInteractive">
						{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
					</Script>
				)}
				{gaId && (
					<>
						<Script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
						/>
						<Script id="ga" strategy="afterInteractive">
							{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');
`}
						</Script>
					</>
				)}
				{umamiId && (
					<Script
						defer
						src="https://cloud.umami.is/script.js"
						data-website-id={umamiId}
					/>
				)}
			</head>
			<body
				suppressHydrationWarning={true}
				className={`${monoFont.variable} ${displayFont.variable} antialiased relative selection:text-purple-900 selection:bg-purple-100 dark:selection:purple-900 dark:selection:bg-purple-900/50`}
			>
				<Providers>{children}</Providers>
				<SpeedInsights />
			</body>
		</html>
	);
}
