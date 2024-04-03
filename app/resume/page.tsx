import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import {Card, CardHeader, CardBody, CardFooter, Skeleton, Image} from "@nextui-org/react";
import {Avatar, AvatarGroup, AvatarIcon, Button, Link} from "@nextui-org/react";


export default function ResumePage() {
	return (
		<div className="inline-block max-w-xl justify-center">
			<div className="flex flex-col items-center mb-8">
				<Button
					as={Link}
					color="primary"
					showAnchorIcon
					variant="flat"
					href="resume.pdf"
				>
					View Full Resume
				</Button>
			</div>
			
			<Card className="w-fit space-y-5 p-4" radius="lg">
				<div className="space-y-3">
					<Skeleton isLoaded className="rounded-lg">
						<div className="flex flex-col items-left p-1 mb-4">
							<Avatar
							disabled
							isBordered
							as="button"
							className="transition-transform"
							name="Canada"
							size="sm"
							src="canada.png"
							/>
						</div>
						<div className="flex flex-col h-7 rounded-lg w-fit bg-default-200 text-left font-bold text-lg">&nbsp;&nbsp;Canada Border Services Agency&nbsp;&nbsp;</div>
					</Skeleton>
					<Skeleton isLoaded className="rounded-lg">
						<div className="h-7 rounded-lg bg-default-200 w-fit text-center font-semibold">&nbsp;&nbsp;Software & Database Developer&nbsp;&nbsp;</div>
					</Skeleton>
				</div>
				<Skeleton isLoaded className="rounded-lg">
					<div className="h-fit rounded-lg bg-default-300 text-left text-sm p-3">
						<p>
							Led the revamp of the System for Export Examinations used by Canada’s Border Officers aimed at
							optimizing the user’s workflows through a Java, Swing and SQL based application
						</p>
						<br></br>
						<p>
							Contributed to improving the performance of the Observational Border Database and TicketMaker
							applications through runtime analysis in Python and usability through Java, Swing, and SQL
						</p>
						<br></br>
						<p>
							Conducted stakeholder meetings with Border Officers to obtain user requirements and receive
							feedback on implemented features in multiple CBSA applications
						</p>
					</div>
				</Skeleton>
			</Card>

			<Card className="w-fit space-y-5 p-4 mt-10" radius="lg">
				<div className="space-y-3">
					<Skeleton isLoaded className="rounded-lg">
						<div className="flex flex-col items-left p-1 mb-4">
							<Avatar
							disabled
							isBordered
							as="button"
							className="transition-transform"
							name="Canada"
							size="sm"
							src="canada.png"
							/>
						</div>
						<div className="flex flex-col h-7 rounded-lg w-fit bg-default-200 text-left font-bold text-lg">&nbsp;&nbsp;Canada Revenue Agency&nbsp;&nbsp;</div>
					</Skeleton>
					<Skeleton isLoaded className="rounded-lg">
						<div className="h-7 rounded-lg bg-default-200 w-fit text-center font-semibold">&nbsp;&nbsp;Jr Programmer&nbsp;&nbsp;</div>
					</Skeleton>
				</div>
				<Skeleton isLoaded className="rounded-lg">
					<div className="h-fit rounded-lg bg-default-300 text-left text-sm p-3">
						<p>
							Reviewed and updated program specifications when implementing legislative changes in an ISPF
							mainframe IBM z/OS & DB2 development environment using COBOL, JCL and CICS

						</p>
						<br></br>
						<p>
							Engaged in multiple phases of a taxation project’s development cycle using Jira to collaborate with
							analysts and developers based upon requirements given by the Government of Canada
		
						</p>
					</div>
				</Skeleton>
			</Card>

			<Card className="w-fit space-y-5 p-4 mt-10" radius="lg">
				<div className="space-y-3">
					<Skeleton isLoaded className="rounded-lg">
						<div className="flex flex-col items-left p-1 mb-4">
							<Avatar
							disabled
							isBordered
							as="button"
							className="transition-transform"
							name="Canada"
							size="sm"
							src="canada.png"
							/>
						</div>
						<div className="flex flex-col h-7 rounded-lg w-fit bg-default-200 text-left font-bold text-lg">&nbsp;&nbsp;Immigration, Refugees and Citizenship Canada&nbsp;&nbsp;</div>
					</Skeleton>
					<Skeleton isLoaded className="rounded-lg">
						<div className="h-7 rounded-lg bg-default-200 w-fit text-center font-semibold">&nbsp;&nbsp;Jr Programmer Analyst&nbsp;&nbsp;</div>
					</Skeleton>
				</div>
				<Skeleton isLoaded className="rounded-lg">
					<div className="h-fit rounded-lg bg-default-300 text-left text-sm p-3">
						<p>
							Updated an online web application based on project requirements that create Excel reports of online
							transactions conducted through the IRCC website using Java, Spring, JasperReports and Excel

						</p>
						<br></br>
						<p>
							Performed manual and automated testing of project code using JUnit in Eclipse tracked with Github
						</p>
					</div>
				</Skeleton>
			</Card>

			<Card className="w-fit space-y-5 p-4 my-10" radius="lg">
				<div className="space-y-3">
					
					<Skeleton isLoaded className="rounded-lg">
						<div className="flex flex-col items-left p-1 mb-4">
							<Avatar
							disabled
							isBordered
							as="button"
							className="transition-transform"
							name="Canada"
							size="sm"
							src="canada.png"
							/>
						</div>
					
						<div className="flex flex-col h-7 rounded-lg w-fit bg-default-200 text-left font-bold text-lg">&nbsp;&nbsp;Innovation, Science and Economic Development Canada&nbsp;&nbsp;</div>
					</Skeleton>
					<Skeleton isLoaded className="rounded-lg">
						<div className="h-7 rounded-lg bg-default-200 w-fit text-center font-semibold">&nbsp;&nbsp;Telecom Technical Officer&nbsp;&nbsp;</div>
					</Skeleton>
				</div>
				<Skeleton isLoaded className="rounded-lg">
					<div className="h-fit rounded-lg bg-default-300 text-left text-sm p-3">
						<p>
							Reviewed official project documentation for industry leading telecommunication corporations
							across Canada based on the Universal Broadband Fund project specifications

						</p>
						<br></br>
						<p>
							Analyzed project changes and claims to ensure that companies meet project standard and deadlines
						</p>
					</div>
				</Skeleton>
			</Card>
		</div>
	);
}
