import { NgModule } from "@angular/core";
import { ChallengeModule } from "../features/challenge/challenge.module";
import { FeaturesRoutingModule } from "../features/features-routing.module";
import { HomeModule } from "../features/home/home.module";
import { AppComponent } from "./app.component";

@NgModule({
	declarations: [AppComponent],
	imports: [FeaturesRoutingModule, HomeModule, ChallengeModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
