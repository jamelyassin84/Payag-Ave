import { Component, OnInit } from '@angular/core'
import { LandingService } from 'src/app/services/landing/landing.service'
import { ModalService } from 'src/app/services/modal.service'
import { ModalNav } from '../top-bar/topb-bar.nav'
import { ModalMenu } from './Menu'
import { PopularItems } from './PopularItems'

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
	images: string[] = PopularItems
	menu: ModalNav[] = ModalMenu

	constructor(
		private service: LandingService,
		private modalService: ModalService
	) {
		this.service.getScrollPosition().subscribe((to) => {
			this.scroll(to)
		})
	}

	ngOnInit(): void {}

	scroll(id: string) {
		document.getElementById(id)?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'end',
		})
	}

	open(data: ModalNav | any) {
		this.modalService.openModal('right', data)
	}
}
