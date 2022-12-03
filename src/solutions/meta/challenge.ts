import { Observable } from "rxjs";

export type RawInput = string[];

export type Solution = unknown | undefined;

export class Challenge<T> {
	public transform(rawInput: RawInput): T {
		return rawInput as unknown as T;
	}

	public part1(input: T): Solution | Observable<Solution> {
		void input;
		return undefined;
	}

	public part2(input: T): Solution | Observable<Solution> {
		void input;
		return undefined;
	}
}
