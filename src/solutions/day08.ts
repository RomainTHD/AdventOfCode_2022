import { Challenge, RawInput, Solution } from "./template/challenge";

type Input = number[][];

export default class Day08 extends Challenge<Input> {
	public override transform1(rawInput: RawInput): Input {
		return rawInput.map((line) => line.split("").map((n) => parseInt(n, 10)));
	}

	public override part1(input: Input): Solution {
		const visible: boolean[][] = Array(input.length)
			.fill(0)
			.map(() => Array(input[0].length).fill(false));

		this.getVisible(input, visible);

		this.getVisible(
			input.reverse().map((line) => line.reverse()),
			visible.reverse().map((line) => line.reverse()),
		);

		return visible.reduce((acc, row) => acc + row.filter((v) => v).length, 0);
	}

	private getVisible(input: Input, visible: boolean[][]): void {
		const maxForRow = input.map(() => -1);
		const maxForCol = input[0].map(() => -1);

		input.forEach((line, row) => {
			line.forEach((cell, col) => {
				visible[row][col] ||= cell > maxForRow[row] || cell > maxForCol[col];
				maxForRow[row] = Math.max(maxForRow[row], cell);
				maxForCol[col] = Math.max(maxForCol[col], cell);
			});
		});
	}

	public override part2(input: Input): Solution {
		return input
			.map((line, row) =>
				line
					.map((cell, col) =>
						[
							[-1, 0],
							[0, -1],
							[1, 0],
							[0, 1],
						]
							.map(([dRow, dCol]) => {
								let i = 1;
								while (
									row + i * dRow >= 0 &&
									row + i * dRow < input.length &&
									col + i * dCol >= 0 &&
									col + i * dCol < input[0].length
								) {
									if (input[row + i * dRow][col + i * dCol] >= cell) {
										++i;
										break;
									} else {
										++i;
									}
								}
								--i;
								return i;
							})
							.reduce((a, b) => a * b),
					)
					.reduce((a, b) => (a > b ? a : b)),
			)
			.reduce((a, b) => (a > b ? a : b));
	}

	/*
	private part2bis(input: Input): Solution {
		const directions = [
			[-1, 0],
			[0, -1],
			[1, 0],
			[0, 1],
		];

		let maxScore = 0;

		input.forEach((line, row) => {
			line.forEach((cell, col) => {
				let score = 1;
				directions.forEach(([dRow, dCol]) => {
					let i = 1;
					while (
						row + i * dRow >= 0 &&
						row + i * dRow < input.length &&
						col + i * dCol >= 0 &&
						col + i * dCol < input[0].length
					) {
						if (input[row + i * dRow][col + i * dCol] >= cell) {
							++i;
							break;
						} else {
							++i;
						}
					}
					--i;
					score *= i;
				});
				maxScore = Math.max(maxScore, score);
			});
		});

		return maxScore;
	}
	*/
}
