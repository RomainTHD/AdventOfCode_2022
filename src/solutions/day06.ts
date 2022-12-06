import { Challenge, RawInput, Solution } from "./template/challenge";

type Input = string;

export default class Day06 extends Challenge<Input> {
	public override transform1(rawInput: RawInput): Input {
		return rawInput.join("");
	}

	public override part1(input: Input): Solution {
		return this.solve(input, 4);
	}

	public override part2(input: Input): Solution {
		return this.solve(input, 14);
	}

	private solve(input: Input, n: number) {
		return n + input.split("").findIndex((elt, idx) => !this.hasDuplicate(input.slice(idx, idx + n)));
	}

	private hasDuplicate(input: string): boolean {
		return input.length !== new Set(input).size;
	}
}
