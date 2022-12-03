import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { forkJoin } from "rxjs";
import { Challenge, Input } from "../../../../solutions/meta/challenge";
import { ChallengeService } from "../../services/challenge.service";

@Component({
	selector: "app-challenge-by-id",
	templateUrl: "./challenge-by-id.component.html",
	styleUrls: ["./challenge-by-id.component.scss"],
})
export class ChallengeByIdComponent implements OnInit {
	public challenge: Challenge | null = null;
	public input: Input | null = null;

	public constructor(
		private readonly route: ActivatedRoute,
		private readonly router: Router,
		private readonly challengeService: ChallengeService,
	) {}

	public ngOnInit() {
		this.route.params.subscribe((params) => {
			const id = parseInt(params["id"], 10);
			if (isNaN(id)) {
				this.router.navigate(["unknown-challenge"]).then();
			} else {
				forkJoin([this.challengeService.getChallenge(id), this.challengeService.getInput(id)]).subscribe(
					([challenge, input]) => {
						if (challenge === null || input === null) {
							this.router.navigate(["/challenge/unknown"]).then();
						}
						this.challenge = challenge;
						this.input = input;
					},
				);
			}
		});
	}
}
