import { Component, OnInit } from '@angular/core'
import { LandingService } from 'src/app/services/landing.service'
import { PopularItems } from './PopularItems'

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
	images: string[] = PopularItems

	constructor(private service: LandingService) {
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
}
