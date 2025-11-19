import { Divide, Minus, Plus, X } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";

const AdvanceCalculator = () => {
	return (
		<div>
			<input
				type="number"
				placeholder="Number 1"
				onChange={(e) => setNumber1(e.target.value)}
				value={number1}
			/>

			<Select
				onValueChange={(opValue) => setOperator(opValue)}
				value={operator}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Operator" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="+">
						<Plus />
					</SelectItem>
					<SelectItem value="-">
						<Minus />
					</SelectItem>
					<SelectItem value="x">
						<X />
					</SelectItem>
					<SelectItem value="/">
						<Divide />
					</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default AdvanceCalculator;
