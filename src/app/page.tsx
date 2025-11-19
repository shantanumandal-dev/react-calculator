import BasicCalcu from "@/components/BasicCalcu";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic React Calculator ",
	description: "Basic React Calculator",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Card className="">
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Basic Calculator
					</CardTitle>
				</CardHeader>
				<CardContent>
					<BasicCalcu />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
