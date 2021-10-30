import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-right-modal',
	templateUrl: './right-modal.component.html',
	styleUrls: ['./right-modal.component.scss'],
})
export class RightModalComponent implements OnInit {
	@Input() body: any
	@Input() title: string = 'Modal Title'
	@Input() actionButtonName: string = 'Save'

	constructor() {}

	ngOnInit(): void {}
}
