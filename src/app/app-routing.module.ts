import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChallengeComponent } from "./challenge/challenge.component";
import { HomeComponent } from "./home/home.component";
import { UnknownChallengeComponent } from "./unknown-challenge/unknown-challenge.component";

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
		pathMatch: "full",
	},
	{
		path: "challenge",
		children: [
			{ path: "unknown", component: UnknownChallengeComponent },
			{
				path: ":id",
				component: ChallengeComponent,
			},
		],
	},
	{ path: "**", redirectTo: "home" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
