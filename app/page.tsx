'use client'
import NextLink from "next/link";
import './page.scss'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import Carousel from '../components/Carousel/Carousel'


import { useEffect } from "react";




export default function Home() {

	

	return (

		<div className="home">

	<Carousel/>









	<Card className="py-4" style={{margin:"30px"}}>

		<CardBody className="overflow-visible py-2">

		<Image
		alt="Card background"
		className="object-cover rounded-xl"
		src="/hero-card.jpeg"
		width={270}
		/>

		</CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>

    </Card>


		</div>
	);
}
