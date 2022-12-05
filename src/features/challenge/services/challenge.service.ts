import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, from } from "rxjs";
import { Challenge, RawInput } from "../../../solutions/template/challenge";

@Injectable({
	providedIn: "root",
})
export class ChallengeService {
	public constructor(private readonly http: HttpClient) {}

	public getChallenge(id: number): Observable<Challenge<unknown> | null> {
		const idStr = id.toString().padStart(2, "0");
		return from(import(`../../../solutions/day${idStr}.ts`))
			.pipe(catchError(() => of(null)))
			.pipe(map((module) => (module === null ? null : new module.default())));
	}

	public getInput(id: number): Observable<RawInput | null> {
		const idStr = id.toString().padStart(2, "0");
		return this.http
			.get(`/assets/static/inputs/day${idStr}.txt`, { responseType: "text" })
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
