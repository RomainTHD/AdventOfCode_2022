import { TemplateRef, ViewContainerRef } from "@angular/core";
import { LetDirective } from "./let.directive";

describe("LetDirective", () => {
	it("should create an instance", () => {
		const directive = new LetDirective(
			null as unknown as TemplateRef<unknown>,
			null as unknown as ViewContainerRef,
		);
		expect(directive).toBeTruthy();
	});
});
