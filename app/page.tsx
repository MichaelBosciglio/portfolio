import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Card, Skeleton} from "@nextui-org/react";

export default function Home() {
	return (
		<section className="flex flex-col items-left justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-left justify-center">
				<h1 className={title({ size: "lg" })}>Michael Bosciglio&nbsp;</h1>
				<br />
				<h2 className={subtitle()}>
					Software Engineer based in the Greater Toronto Area
				</h2>
				<a><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=50&duration=3000&pause=10000&color=47CAF7&vCenter=true&repeat=false&random=false&width=1700&height=200&lines=I+build+pixel-perfect+and+engaging+digital+experiences" alt="Typing SVG" /></a>			
			
			</div>			
		</section>
	);
}
