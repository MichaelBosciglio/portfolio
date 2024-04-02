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
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Michael&nbsp;</h1>
				<h1 className={title({ color: "blue" })}>Bosciglio&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: "mt-4" })}>
					Software Engineer
				</h2>
			</div>
			
			
		</section>
	);
}
