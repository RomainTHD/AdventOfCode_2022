import { Challenge, RawInput } from "./template/challenge";

interface Pair {
	start: number;
	end: number;
}

type Input = [Pair, Pair][];

export default class Day04 extends Challenge<Input> {
	public override transform1(rawInput: RawInput): Input {
		return rawInput.map((line) => {
			const [p1, p2] = line.split(",");
			const [start1, end1] = p1.split("-").map((s) => parseInt(s));
			const [start2, end2] = p2.split("-").map((s) => parseInt(s));
			return [
				{ start: start1, end: end1 },
				{ start: start2, end: end2 },
			];
		});
	}

	public override part1(input: Input): number {
		return input.filter(([p1, p2]) => this.containsFull(p1, p2) || this.containsFull(p2, p1)).length;
	}

	public override part2(input: Input): number {
		return input.filter(([p1, p2]) => this.containsPart(p1, p2) || this.containsPart(p2, p1)).length;
	}

	private containsFull(p1: Pair, p2: Pair): boolean {
		return p1.start <= p2.start && p1.end >= p2.end;
	}

	private containsPart(p1: Pair, p2: Pair): boolean {
		return (p1.start <= p2.start && p1.end >= p2.start) || (p1.start <= p2.end && p1.end >= p2.end);
	}
}
