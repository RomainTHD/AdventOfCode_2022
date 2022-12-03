import { AsyncPipe } from "@angular/common";
import { ChangeDetectorRef, Pipe, PipeTransform } from "@angular/core";
import { Observable, of } from "rxjs";

@Pipe({
	name: "unwrap",
})
export class UnwrapPipe implements PipeTransform {
	private readonly asyncPipe: AsyncPipe;

	public constructor(ref: ChangeDetectorRef) {
		this.asyncPipe = new AsyncPipe(ref);
	}

	transform<T>(value: Observable<T> | T): T | null {
		return this.asyncPipe.transform(value instanceof Observable ? value : of(value));
	}
}
