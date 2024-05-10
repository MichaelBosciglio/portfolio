import { title } from "@/components/primitives";
import React from "react";
import {Textarea} from "@nextui-org/react";

export default function AboutPage() {

	

	return (
		<div className="flex flex-col w-full items-center justify-center text-center">
			<div
				className={title({ size: "md" })}
			>
				About Me
			</div>
			<Textarea
				name="description1"
				isReadOnly
				disabled
				disableAnimation
				variant="faded"
				defaultValue="Back in high school I completed my first ever Python game 'Comets' which sparked my passion for software development. I officially embarked on my journey in software engineering at the University of Ottawa, where I pursued a Bachelor of Applied Science in my Software Engineering CO-OP program. Throughout my academic tenure, I delved into various subjects including Design and Analysis of Algorithms, Introduction to Artificial Intelligence, Software Requirements Analysis, and Software Design and Architecture. During this time, I worked in four professional settings, gaining practical experience in the software development life cycle."
				className="flex flex-col max-w-4xl pb-10 pt-2 text-center"
				
			/>
			<Textarea
				name="description2"
				isReadOnly
				disabled
				disableAnimation
				variant="faded"
				defaultValue="From contributing to vital projects at the Canada Border Services Agency as a Software & Database Developer, where I led the modernization of critical systems using Java, Swing, and SQL technologies, to my role at the Canada Revenue Agency as a Junior Programmer, where I played a key part in updating program specifications in a mainframe environment using COBOL, JCL, and CICS. I have consistently demonstrated a commitment to excellence in software development. My tenure at Immigration, Refugees and Citizenship Canada and Innovation, Science and Economic Development Canada equipped me with valuable insights into web application development, project management, and compliance standards within various frameworks. My dedication to advancing my skills is reflected in my personal projects, such as my capstone project, the Mouse Accessibility Attachment Proteus and TrackBite, showcasing my proficiency in React, Python, Java, SQL, and other essential programming languages."
				className="flex flex-col max-w-4xl pb-10"
				
			/>
			<Textarea
				name="description3"
				isReadOnly
				disabled
				disableAnimation
				variant="faded"
				defaultValue="When I’m not at the computer, you might find me playing volleyball with friends, picking up a new sport, trying out a new local restaurant, at the gym working out, or spending quality time with my family."
				className="flex flex-col max-w-4xl"
				
			/>

		</div>
	);
}
