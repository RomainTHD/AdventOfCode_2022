import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { FeaturesRoutingModule } from "../features/features-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
	declarations: [AppComponent],
	imports: [FeaturesRoutingModule, CoreModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
