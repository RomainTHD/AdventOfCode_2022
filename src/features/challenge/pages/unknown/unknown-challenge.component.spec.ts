import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "../../../../shared/shared.module";

import { UnknownChallengeComponent } from "./unknown-challenge.component";

describe("UnknownChallengeComponent", () => {
	let component: UnknownChallengeComponent;
	let fixture: ComponentFixture<UnknownChallengeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientModule, SharedModule, MatCardModule],
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
