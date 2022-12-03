import { Component, OnInit } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
import { ChallengeService } from "../../challenge/services/challenge.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	public days: number[] = [];

	public constructor(private readonly challengeService: ChallengeService) {}

	public ngOnInit(): void {
		const subs: Observable<unknown>[] = [];

		for (let i = 1; i <= 31; ++i) {
			const obs = this.challengeService.getChallenge(i);
			obs.subscribe((challenge) => {
				if (challenge !== null) {
					this.days.push(i);
				}
			});
			subs.push(obs);
		}

		forkJoin(subs).subscribe(() => {
			this.days.sort((a, b) => a - b);
		});
	}
}
