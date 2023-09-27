import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import  Navbar  from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>

			<head>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
			<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
			</head>

			<body>
				<Providers>
					
					<main>
						{children}
					</main>		
					
				</Providers>
				<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
			</body>

		</html>
	);
}
