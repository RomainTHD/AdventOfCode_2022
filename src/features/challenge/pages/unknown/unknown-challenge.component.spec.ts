import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UnknownChallengeComponent } from "./unknown-challenge.component";

describe("UnknownChallengeComponent", () => {
	let component: UnknownChallengeComponent;
	let fixture: ComponentFixture<UnknownChallengeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [UnknownChallengeComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(UnknownChallengeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
