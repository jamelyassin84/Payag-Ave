import { Component, OnInit } from '@angular/core'
import { PopularItems } from './PopularItems'

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
	images: string[] = PopularItems

	constructor() {}

	ngOnInit(): void {}
}
