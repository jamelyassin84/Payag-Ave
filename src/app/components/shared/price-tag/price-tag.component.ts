import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-price-tag',
	templateUrl: './price-tag.component.html',
	styleUrls: ['./price-tag.component.scss'],
})
export class PriceTagComponent implements OnInit {
	constructor() {}

	@Input() price: number = 0

	ngOnInit(): void {}
}
