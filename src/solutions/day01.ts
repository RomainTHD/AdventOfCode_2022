import { Solution, Challenge, RawInput } from "./template/challenge";

type Input = (number | null)[];

export default class Day01 extends Challenge<Input> {
	public override transform1(rawInput: RawInput): Input {
		return rawInput.map((line) => (line === "" ? null : parseInt(line, 10)));
	}

	public override part1(input: Input): Solution {
		let acc = 0;
		let max = 0;
		input.forEach((elt) => {
			if (elt === null) {
				max = Math.max(max, acc);
				acc = 0;
			} else {
				acc += elt;
			}
		});
		return max;
	}

	public override part2(input: Input): Solution {
		let acc = 0;
		let maximas = [] as number[];
		input.forEach((elt) => {
			if (elt === null) {
				maximas.push(Math.max(acc));
				acc = 0;
			} else {
				acc += elt;
			}
		});
		maximas = maximas.sort((a, b) => a - b);
		return maximas[maximas.length - 1] + maximas[maximas.length - 2] + maximas[maximas.length - 3];
	}
}
