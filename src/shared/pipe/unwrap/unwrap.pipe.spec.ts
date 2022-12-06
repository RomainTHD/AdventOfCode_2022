import { ChangeDetectorRef } from "@angular/core";
import { of } from "rxjs";
import { UnwrapPipe } from "./unwrap.pipe";

describe("UnwrapPipe", () => {
	const value = "value";
	let ref: ChangeDetectorRef;

	beforeEach(() => {
		ref = jasmine.createSpyObj({
			markForCheck: jasmine.createSpy(),
		});
	});

	it("should create an instance", () => {
		const pipe = new UnwrapPipe(ref);
		expect(pipe).toBeTruthy();
	});

	it("should unwrap an observable", () => {
		const pipe = new UnwrapPipe(ref);
		expect(pipe.transform(of(value))).toBe(value);
	});

	it("should unwrap a value", () => {
		const pipe = new UnwrapPipe(ref);
		expect(pipe.transform(value)).toBe(value);
	});
});
