import "@/styles/globals.css";
import { Metadata } from "next";
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
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com"/>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Onest:wght@100;200;300;400;500;600;700&display=swap" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
			<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>

			<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" async ></script>
			</head>

			<body>
				<Providers>
					<Navbar/>
						{children}
					<Footer/>
				</Providers>
			</body>

		</html>
	);
}