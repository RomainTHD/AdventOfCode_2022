import { DOCUMENT } from "@angular/common";
import { HttpRequest } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { ApiInterceptor } from "./api.interceptor";

describe("APIInterceptor", () => {
	const base = "https://example.com/";

	beforeEach(() =>
		TestBed.configureTestingModule({
			providers: [
				ApiInterceptor,
				{
					provide: DOCUMENT,
					useValue: {
						querySelectorAll: () => [],
						head: {
							querySelector: () => ({ href: base }),
						},
					},
				},
			],
		}),
	);

	it("should be created", () => {
		const interceptor: ApiInterceptor = TestBed.inject(ApiInterceptor);
		expect(interceptor).toBeTruthy();
	});

	it("should add base url to request", () => {
		const interceptor: ApiInterceptor = TestBed.inject(ApiInterceptor);
		const request = new HttpRequest("GET", "test");
		const next = jasmine.createSpyObj({
			handle: jasmine.createSpy(),
		});
		interceptor.intercept(request, next);
		expect(next.handle).toHaveBeenCalledWith(jasmine.objectContaining({ url: `${base}/test` }));
	});
});
