import { Observable } from "rxjs";

export type RawInput = string[];

export type Solution = unknown | undefined;

export class Challenge<T = RawInput, U = T> {
	public transform1(rawInput: RawInput): T {
		return rawInput as unknown as T;
	}

	public transform2(rawInput: RawInput): U {
		return this.transform1(rawInput) as unknown as U;
	}

	public part1(input: T): Solution | Observable<Solution> {
		void input;
		return undefined;
	}

	public part2(input: U): Solution | Observable<Solution> {
		void input;
		return undefined;
	}
}
