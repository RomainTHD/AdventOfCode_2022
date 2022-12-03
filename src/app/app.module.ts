import { NgModule } from "@angular/core";
import { FeaturesRoutingModule } from "../features/features-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
	declarations: [AppComponent],
	imports: [FeaturesRoutingModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
