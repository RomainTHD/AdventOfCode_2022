import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChallengeModule } from "./challenge/challenge.module";
import { ChallengeByIdComponent } from "./challenge/pages/byID/challenge-by-id.component";
import { HomeModule } from "./home/home.module";
import { HomeComponent } from "./home/pages/home.component";
import { UnknownChallengeComponent } from "./challenge/pages/unknown/unknown-challenge.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "home",
		component: HomeComponent,
	},
	{
		path: "challenge",
		component: HomeComponent,
	},
	{
		path: "challenge",
		children: [
			{ path: "unknown", component: UnknownChallengeComponent },
			{
				path: ":id",
				component: ChallengeByIdComponent,
			},
		],
	},
	{ path: "**", redirectTo: "home" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule, HomeModule, ChallengeModule],
})
export class FeaturesRoutingModule {}
