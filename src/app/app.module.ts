import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./home/home.component";
import { ChallengeComponent } from "./challenge/challenge.component";
import { UnknownChallengeComponent } from "./unknown-challenge/unknown-challenge.component";
import { UnwrapPipe } from "./unwrap/unwrap.pipe";
import { LetDirective } from "./let/let.directive";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ChallengeComponent,
		UnknownChallengeComponent,
		UnwrapPipe,
		LetDirective,
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatListModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
