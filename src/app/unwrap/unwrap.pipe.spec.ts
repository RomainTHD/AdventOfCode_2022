import { ChangeDetectorRef } from "@angular/core";
import { UnwrapPipe } from "./unwrap.pipe";

describe("UnwrapPipe", () => {
	it("should create an instance", () => {
		const pipe = new UnwrapPipe(null as unknown as ChangeDetectorRef);
		expect(pipe).toBeTruthy();
	});
});
