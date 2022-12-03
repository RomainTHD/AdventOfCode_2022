import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { BrowserModule } from "@angular/platform-browser";
import { FeaturesRoutingModule } from "../features-routing.module";
import { HomeComponent } from "./pages/home.component";

@NgModule({
	declarations: [HomeComponent],
	exports: [HomeComponent],
	imports: [BrowserModule, FeaturesRoutingModule, MatListModule],
	providers: [],
})
export class HomeModule {}
