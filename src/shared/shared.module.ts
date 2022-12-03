import { NgModule } from "@angular/core";
import { LetDirective } from "./let/let.directive";
import { UnwrapPipe } from "./unwrap/unwrap.pipe";

@NgModule({
	declarations: [UnwrapPipe, LetDirective],
	exports: [UnwrapPipe, LetDirective],
	providers: [UnwrapPipe, LetDirective],
})
export class SharedModule {}
