import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "fuongz",
		short_name: "fuongz",
		description: "Personal website of Phuong Phung, a software engineer.",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#ffffff",
	};
}
