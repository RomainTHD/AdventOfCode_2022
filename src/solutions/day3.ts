import { Challenge, RawInput, Solution } from "./template/challenge";

export default class Day3 extends Challenge {
	private readonly chars;

	public constructor() {
		super();
		this.chars = Array.from(Array(26).keys())
			.map((n) => [String.fromCharCode(n + "a".charCodeAt(0)), String.fromCharCode(n + "A".charCodeAt(0))])
			.flat()
			.sort((a, b) => (a < b ? -1 : 1))
			.map((c) => (c.toLowerCase() === c ? c.toUpperCase() : c.toLowerCase()));
	}

	public override part1(input: RawInput): Solution {
		return input
			.map((line) => [line.slice(0, line.length / 2), line.slice(line.length / 2)])
			.map(([left, right]) => this.scoreOf(this.commonChar(left, right)))
			.reduce((a, b) => a + b);
	}

	public override part2(input: RawInput): Solution {
		return Array(input.length / 3)
			.fill(0)
			.map((_, idx) => [input[idx * 3], input[idx * 3 + 1], input[idx * 3 + 2]])
			.map(([left, middle, right]) => this.commonChars(left, this.commonChars(middle, right).join(""))[0])
			.map((c) => this.scoreOf(c))
			.reduce((a, b) => a + b);
	}

	private scoreOf(c: string): number {
		return this.chars.indexOf(c) + 1;
	}

	private commonChar(left: string, right: string): string {
		return left.split("").find((c) => right.includes(c)) || "";
	}

	private commonChars(left: string, right: string): string[] {
		return left.split("").filter((c) => right.includes(c));
	}
}
