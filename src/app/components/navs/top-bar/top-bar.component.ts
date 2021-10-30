import { ModalService } from './../../../services/modal.service'
import { Component, OnInit } from '@angular/core'
import { LandingService } from 'src/app/services/landing/landing.service'
import {
	ModalNav,
	ModalTopNavs,
	TopBarIcons,
	TopBarNavs,
	TopIcons,
	TopNav,
} from './topb-bar.nav'

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
	navs: TopNav[] = TopBarNavs
	navs1: ModalNav[] = ModalTopNavs
	icons: TopIcons[] = TopBarIcons

	constructor(
		private service: LandingService,
		private modalService: ModalService
	) {}

	ngOnInit(): void {}

	scroll(id: string | any) {
		this.service.scrollTo(id)
	}

	open(data: ModalNav | any) {
		this.modalService.openModal('right', data)
	}
}
