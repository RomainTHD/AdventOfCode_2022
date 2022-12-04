import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
	private readonly base: string;

	public constructor() {
		this.base = document.head.querySelector("base")?.href || "";
	}

	public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(
			request.clone({
				url: `${this.base}/${request.url}`,
			}),
		);
	}
}
