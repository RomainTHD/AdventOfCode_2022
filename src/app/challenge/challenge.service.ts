import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, from } from "rxjs";
import { Challenge, Input } from "../solutions/meta/challenge";

@Injectable({
	providedIn: "root",
})
export class ChallengeService {
	public constructor(private readonly http: HttpClient) {}

	public getChallenge(id: number): Observable<Challenge | null> {
		return from(import(`../solutions/day${id}.ts`))
			.pipe(catchError(() => of(null)))
			.pipe(map((module) => new module.default()));
	}

	public getInput(id: number): Observable<Input | null> {
		return this.http
			.get(`/assets/inputs/day${id}.txt`, { responseType: "text" })
			.pipe(catchError(() => of(null)))
			.pipe(
				map((input) => {
					if (input === null) {
						return null;
					}
					return input.trim().split("\n");
				}),
			);
	}
}
