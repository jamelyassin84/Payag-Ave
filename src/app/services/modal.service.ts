import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { ModalNav } from '../components/navs/top-bar/topb-bar.nav'

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	constructor() {}

	private modal = new Subject<ModalType>()

	openModal(type: string, data: ModalNav) {
		this.modal.next({ type: type, data: data })
	}

	ModalonTrigger() {
		return this.modal.asObservable()
	}
}
export type ModalType = {
	type: string
	data: ModalNav
}
