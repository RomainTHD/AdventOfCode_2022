import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { ChallengeByIdComponent } from "./pages/byID/challenge-by-id.component";
import { UnknownChallengeComponent } from "./pages/unknown/unknown-challenge.component";
import { ChallengeService } from "./services/challenge.service";

@NgModule({
	declarations: [ChallengeByIdComponent, UnknownChallengeComponent],
	exports: [ChallengeByIdComponent, UnknownChallengeComponent],
	imports: [SharedModule, BrowserModule, RouterModule, HttpClientModule, BrowserAnimationsModule, MatCardModule],
	providers: [ChallengeService],
})
export class ChallengeModule {}
