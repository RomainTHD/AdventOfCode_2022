import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { LetDirective } from "./directive/let/let.directive";
import { UnwrapPipe } from "./pipe/unwrap/unwrap.pipe";
import { BackButtonComponent } from "./component/back-button/back-button.component";

@NgModule({
	declarations: [UnwrapPipe, LetDirective, BackButtonComponent],
	exports: [UnwrapPipe, LetDirective, BackButtonComponent],
	providers: [UnwrapPipe, LetDirective],
	imports: [MatButtonModule, RouterLink, RouterLinkActive],
})
export class SharedModule {}
