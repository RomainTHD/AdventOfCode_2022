import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home.component";

@NgModule({
	declarations: [HomeComponent],
	exports: [HomeComponent],
	imports: [BrowserModule, RouterModule, MatListModule],
	providers: [],
})
export class HomeModule {}
