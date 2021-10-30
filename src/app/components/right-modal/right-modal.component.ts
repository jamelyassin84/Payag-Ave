import { Component, Input, OnInit } from '@angular/core'
import { ModalService, ModalType } from 'src/app/services/modal.service'

@Component({
	selector: 'app-right-modal',
	templateUrl: './right-modal.component.html',
	styleUrls: ['./right-modal.component.scss'],
})
export class RightModalComponent implements OnInit {
	@Input() body: any
	@Input() title: string = 'Modal Title'
	@Input() actionButtonName: string = 'Save'

	close: boolean = true

	constructor(private service: ModalService) {
		this.service.ModalonTrigger().subscribe((response: any) => {
			if (response.type === 'right') {
				console.log(response.title)
				this.title = response.data.title
				this.actionButtonName = response.data.actionButtonName
				this.body = response.data.body
				this.close = false
			}
		})
	}

	ngOnInit(): void {}

	closeModal() {
		this.close = true
	}
}
