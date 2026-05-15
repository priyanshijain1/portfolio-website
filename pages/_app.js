import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";
import { useEffect, useState } from "react";

import "@/styles/globals.css";

import { PreLoader } from "@/components/Loader";

export default function App({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	useEffect(() => {
		if (loading) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [loading]);

	const title = "Portfolio | Priyanshi Jain";
	const description =
		"Hello! I'm Priyanshi Jain, a passionate web developer and problem solver. Welcome to my portfolio";
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
	const brandLogo = `${siteUrl}/favicon.svg`;
	const url = siteUrl;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} key="desc" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta property="og:title" content={title} />
				<meta property="og:site_name" content={title}></meta>
				<meta property="og:description" content={description} />
				<meta property="og:image" content={brandLogo} />
				<meta property="og:image:width" content="612" />
				<meta property="og:image:height" content="612" />
				<meta property="og:url" content={url} />
				<meta property="og:type" content="website" />

				<meta property="twitter:image" content={brandLogo} />
				<meta property="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@Priyanshi_Jain" />
				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={description} />

				<link rel="canonical" href={url} />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.svg" />
				<link rel="apple-touch-icon" href="/favicon.svg" />
				<link rel="manifest" href="/assets/icons/favicon/site.webmanifest" />
			</Head>

			<Component {...pageProps} loading={loading} />
			<Analytics />
			{loading && <PreLoader />}
		</>
	);
}
