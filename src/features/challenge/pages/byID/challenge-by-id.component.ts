import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { forkJoin } from "rxjs";
import { UnwrapPipe } from "../../../../shared/pipe/unwrap/unwrap.pipe";
import { Challenge, RawInput } from "../../../../solutions/template/challenge";
import { ChallengeService } from "../../services/challenge.service";

@Component({
	selector: "app-challenge-by-id",
	templateUrl: "./challenge-by-id.component.html",
	styleUrls: ["./challenge-by-id.component.scss"],
})
export class ChallengeByIdComponent implements OnInit {
	public challenge: Challenge<unknown> | null = null;
	public input: RawInput | null = null;

	public constructor(
		private readonly route: ActivatedRoute,
		private readonly router: Router,
		private readonly challengeService: ChallengeService,
		private readonly unwrapPipe: UnwrapPipe,
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

	public getChallengeAnswer(n: number): unknown | null {
		if (!this.challenge || !this.input) {
			return null;
		}

		return this.unwrapPipe.transform(
			n === 1
				? this.challenge.part1(this.challenge.transform1(this.input))
				: this.challenge.part2(this.challenge.transform2(this.input)),
		);
	}
}
