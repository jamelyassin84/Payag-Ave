import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class LandingService {
	constructor() {}

	public scroll = new Subject<string>()

	scrollTo(id: string) {
		this.scroll.next(id)
	}

	getScrollPosition() {
		return this.scroll.asObservable()
	}
}
