import AdvanceCalculator from "@/components/AdvanceCalculator";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advance React Calculator ",
	description: "Advance React Calculator",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Card className="">
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Advance Calculator
					</CardTitle>
				</CardHeader>
				<CardContent>
					<AdvanceCalculator />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
