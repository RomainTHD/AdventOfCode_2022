import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { firstValueFrom } from "rxjs";

import { ChallengeService } from "./challenge.service";

describe("ChallengeService", () => {
	let service: ChallengeService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
		});
		service = TestBed.inject(ChallengeService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});

	it("should return null when the challenge does not exist", async () => {
		expect(await firstValueFrom(service.getChallenge(0))).toBeNull();
	});

	it("should return a challenge when the challenge exists", async () => {
		expect(await firstValueFrom(service.getChallenge(1))).not.toBeNull();
	});

	it("should return null when the input does not exist", async () => {
		expect(await firstValueFrom(service.getInput(0))).toBeNull();
	});

	it("should return an input when the input exists", async () => {
		expect(await firstValueFrom(service.getInput(1))).not.toBeNull();
	});
});
