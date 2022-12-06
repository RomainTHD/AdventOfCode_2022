import { Challenge, RawInput, Solution } from "./template/challenge";

interface Board {
	length: number;
	stacks: string[][];
}

interface Move {
	from: number;
	to: number;
	quantity: number;
}

type Input = [Board, Move[]];

export default class Day05 extends Challenge<Input> {
	public override transform1(rawInput: RawInput): Input {
		const moves: Move[] = [];
		const stackLines: string[] = [];
		let length = -1;
		const moveRegex = /^move (\d+) from (\d+) to (\d+)$/;

		rawInput.forEach((line) => {
			if (moveRegex.test(line)) {
				const [, quantity, from, to] = line.match(moveRegex) || [];
				moves.push({
					from: parseInt(from, 10) - 1,
					to: parseInt(to, 10) - 1,
					quantity: parseInt(quantity, 10),
				});
			} else if (/^(\s+\d+\s+)+$/.test(line)) {
				length = [...line.matchAll(/(\d+)\s+/g)].length;
			} else if (/^(\s*\[.+]\s*)+$/.test(line)) {
				stackLines.push(line);
			}
		});

		const stacks = Array(length)
			.fill(0)
			.map(() => [] as string[]);

		stackLines
			.reverse()
			.forEach((line) =>
				[...line.matchAll(/[[ ](.)[\] ]\s?/g)].forEach(([, value], index) =>
					value === " " ? undefined : stacks[index].push(value),
				),
			);

		return [
			{
				length,
				stacks,
			},
			moves,
		];
	}

	public override part1(input: Input): Solution {
		const [board, moves] = input;
		moves.forEach(({ from, to, quantity }) =>
			Array(quantity)
				.fill("")
				.forEach(() => this.push(board, to, this.pop(board, from))),
		);

		return board.stacks.map((stack) => stack[stack.length - 1] || " ").join("");
	}

	public override part2(input: Input): Solution {
		const [board, moves] = input;
		moves.forEach(({ from, to, quantity }) =>
			Array(quantity)
				.fill("")
				.map(() => this.pop(board, from))
				.reverse()
				.forEach((value) => this.push(board, to, value)),
		);

		return board.stacks.map((stack) => stack[stack.length - 1] || " ").join("");
	}

	private pop(board: Board, col: number): string {
		return board.stacks[col].pop() ?? this.error(`Cannot pop from empty stack at column ${col + 1}`);
	}

	private push(board: Board, col: number, value: string): void {
		board.stacks[col].push(value);
	}

	private error(msg: string): never {
		throw new Error(msg);
	}
}
