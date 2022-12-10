import { Challenge, RawInput, Solution } from "./template/challenge";

enum OpCode {
	Noop = 0,
	Add = 1,
}

interface Instruction {
	opCode: OpCode;
	cycles: number;
}

type Noop = Instruction;

interface Add extends Instruction {
	increment: number;
}

type Input = Instruction[];

export default class Day10 extends Challenge<Input> {
	public override transform1(rawInput: RawInput): Input {
		return rawInput.map((line) => {
			if (line === "noop") {
				return { opCode: OpCode.Noop, cycles: 1 } as Noop;
			} else {
				const [, increment] = line.split(" ");
				return { opCode: OpCode.Add, cycles: 2, increment: parseInt(increment) } as Add;
			}
		});
	}

	public override part1(input: Input): Solution {
		let accumulator = 1;
		const history: number[] = [];
		input.forEach((instruction) => {
			for (let i = 0; i < instruction.cycles; ++i) {
				history.push(accumulator);
			}
			if (instruction.opCode === OpCode.Add) {
				accumulator += (instruction as Add).increment;
			}
		});
		history.push(accumulator);
		return [20, 60, 100, 140, 180, 220].map((i) => i * history[i - 1]).reduce((a, b) => a + b, 0);
	}
}
