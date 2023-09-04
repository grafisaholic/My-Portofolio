import type { Metadata } from "next";

type MetadataProps = {
	title: string;
	description: string;
	keywords?: string | Array<string> | null;
};

const actualImage = "https://grafisaholic.com/avatar.png";

export const generateMetadata = (data: MetadataProps): Metadata => {
	const { title, description, keywords } = data;

	return {
		title,
		description,
		keywords,
		icons: "/avatar.png",
		authors: [{ name: "Khabibur Rokhman", url: "https://grafisaholic.com" }],
		openGraph: {
			title,
			description,
			url: "https://grafisaholic.com",
			siteName: title,
			images: [{ url: actualImage }],
			type: "website",
		},
	};
};
