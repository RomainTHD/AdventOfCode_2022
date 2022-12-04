import { Challenge, RawInput, Solution } from "./template/challenge";

enum Shape {
	Rock,
	Paper,
	Scissors,
}

enum End {
	Lose,
	Draw,
	Win,
}

type Input1 = [Shape, Shape][];
type Input2 = [Shape, End][];

export default class Day2 extends Challenge<Input1, Input2> {
	public override transform1(rawInput: RawInput): Input1 {
		return rawInput.map((line) => {
			const [other, me] = line.split(" ");
			return [this.stringToShape(other), this.stringToShape(me)];
		});
	}

	public override transform2(rawInput: RawInput): Input2 {
		return rawInput.map((line) => {
			const [other, me] = line.split(" ");
			return [this.stringToShape(other), this.stringToEnd(me)];
		});
	}

	public override part1(input: Input1): Solution {
		return input.map(([other, me]) => this.shapeToScore(me) + this.gameToScore(other, me)).reduce((a, b) => a + b);
	}

	public override part2(input: Input2): Solution {
		return input
			.map(([other, end]) => this.endToScore(end) + this.shapeToScore(this.endToShape(other, end)))
			.reduce((a, b) => a + b);
	}

	private endToScore(end: End): number {
		return end === End.Win ? 6 : end === End.Draw ? 3 : 0;
	}

	private endToShape(other: Shape, end: End): Shape {
		if (end === End.Draw) {
			return other;
		}

		switch (other) {
			case Shape.Rock:
				return end === End.Win ? Shape.Paper : Shape.Scissors;
			case Shape.Paper:
				return end === End.Win ? Shape.Scissors : Shape.Rock;
			case Shape.Scissors:
				return end === End.Win ? Shape.Rock : Shape.Paper;
		}
	}

	private shapeToScore(operator: Shape): number {
		switch (operator) {
			case Shape.Rock:
				return 1;
			case Shape.Paper:
				return 2;
			case Shape.Scissors:
				return 3;
		}
	}

	private winningGame(other: Shape, me: Shape): boolean {
		switch (other) {
			case Shape.Rock:
				return me === Shape.Paper;
			case Shape.Paper:
				return me === Shape.Scissors;
			case Shape.Scissors:
				return me === Shape.Rock;
		}
	}

	private gameToScore(other: Shape, me: Shape): number {
		if (other === me) {
			return 3;
		}

		return this.winningGame(other, me) ? 6 : 0;
	}

	private stringToShape(operator: string): Shape {
		switch (operator) {
			case "A":
			case "X":
				return Shape.Rock;
			case "B":
			case "Y":
				return Shape.Paper;
			case "C":
			case "Z":
				return Shape.Scissors;
			default:
				throw new Error(`Unknown operator ${operator}`);
		}
	}

	private stringToEnd(operator: string): End {
		switch (operator) {
			case "X":
				return End.Lose;
			case "Y":
				return End.Draw;
			case "Z":
				return End.Win;
			default:
				throw new Error(`Unknown operator ${operator}`);
		}
	}
}
