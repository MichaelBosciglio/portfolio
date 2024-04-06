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
		<section className="flex flex-col items-center justify-center text-center gap-4 pt-32">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className="flex flex-col text-center items-center justify-center align-middle place-self-center font-semibold text-5xl lg:text-6xl w-auto">
					Michael Bosciglio
				</h1>
				<br />
				<h2 className={subtitle()}>
					Software Engineer based in the Greater Toronto Area
				</h2>
				<a><img className="ml-3 mt-10" src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=50&duration=3000&pause=10000&color=47CAF7&vCenter=true&repeat=false&random=false&width=1700&height=200&lines=I+build+pixel-perfect+and+engaging+digital+experiences" alt="Typing SVG" /></a>			
			
			</div>			
		</section>
	);
}
