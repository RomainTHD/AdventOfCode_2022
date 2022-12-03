import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

interface Context {
	$implicit: unknown;
	appLet: unknown;
}

@Directive({
	selector: "[appLet]",
})
export class LetDirective {
	private readonly context: Context;
	private hasView = false;

	public constructor(private templateRef: TemplateRef<unknown>, private vcRef: ViewContainerRef) {
		this.context = {
			$implicit: null,
			appLet: null,
		};
	}

	@Input()
	public set appLet(context: unknown) {
		this.context.$implicit = this.context.appLet = context;

		if (!this.hasView) {
			this.vcRef.createEmbeddedView(this.templateRef, this.context);
			this.hasView = true;
		}
	}
}
