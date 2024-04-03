import { Card, Skeleton } from "@nextui-org/react";


export default function ResumeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-2">
			{children}
		</section>
	);
}
