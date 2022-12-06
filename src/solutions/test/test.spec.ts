import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { firstValueFrom } from "rxjs";
import { ChallengeModule } from "../../features/challenge/challenge.module";
import { ChallengeService } from "../../features/challenge/services/challenge.service";
import { Challenge, RawInput } from "../template/challenge";

const solutions: [number, unknown | null, unknown | null][] = [
	[1, 69912, 208180],
	[2, 13924, 13448],
	[3, 7691, 2508],
	[4, 540, 872],
	[5, "TQRFCBSJJ", "RMHFJNVFP"],
	[6, 1034, 2472],
];

@Component({
	template: "",
})
class FakeComponent {
	public constructor(public readonly challengeService: ChallengeService) {}
}

function error(msg: string): never {
	throw new Error(msg);
}

describe("Days", async () => {
	let component: FakeComponent;
	let fixture: ComponentFixture<FakeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChallengeModule, HttpClientModule],
			declarations: [FakeComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(FakeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	const fetchData = async (day: number): Promise<[RawInput, Challenge<unknown, unknown>]> => [
		(await firstValueFrom(component.challengeService.getInput(day))) || error(`No input for day ${day}`),
		(await firstValueFrom(component.challengeService.getChallenge(day))) || error(`No challenge for day ${day}`),
	];

	solutions.forEach(([day, sol1, sol2]) => {
		it(`should correctly answer day ${day} part 1`, async () => {
			if (sol1 !== null) {
				const [input, challenge] = await fetchData(day);
				expect(challenge.part1(challenge.transform1(input))).toEqual(sol1);
			}
		});

		it(`should correctly answer day ${day} part 2`, async () => {
			if (sol2 !== null) {
				const [input, challenge] = await fetchData(day);
				expect(challenge.part2(challenge.transform2(input))).toEqual(sol2);
			}
		});
	});
});

describe("Challenge", () => {
	let challenge: Challenge<unknown, unknown>;
	const input: RawInput = [];

	beforeEach(() => {
		challenge = new Challenge();
	});

	it("shouldn't change input by default", () => {
		expect(challenge.transform1(input)).toBe(input);
		expect(challenge.transform2(input)).toBe(input);
	});

	it("should return undefined by default", () => {
		expect(challenge.part1(input)).toBeUndefined();
		expect(challenge.part2(input)).toBeUndefined();
	});
});
