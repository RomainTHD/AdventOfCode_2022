import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "../../../../shared/shared.module";

import { ChallengeByIdComponent } from "./challenge-by-id.component";

describe("ChallengeByIdComponent", () => {
	let component: ChallengeByIdComponent;
	let fixture: ComponentFixture<ChallengeByIdComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientModule, SharedModule],
			declarations: [ChallengeByIdComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ChallengeByIdComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
