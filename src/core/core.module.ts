import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ApiInterceptor } from "./interceptor/api.interceptor";

@NgModule({
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiInterceptor,
			multi: true,
		},
	],
	exports: [HttpClientModule],
})
export class CoreModule {}
