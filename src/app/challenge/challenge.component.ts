import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { forkJoin } from "rxjs";
import { Challenge, Input } from "../solutions/meta/challenge";
import { ChallengeService } from "./challenge.service";

@Component({
	selector: "app-challenge",
	templateUrl: "./challenge.component.html",
	styleUrls: ["./challenge.component.scss"],
})
export class ChallengeComponent implements OnInit {
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
						this.challenge = challenge;
						this.input = input;
					},
				);
			}
		});
	}
}
