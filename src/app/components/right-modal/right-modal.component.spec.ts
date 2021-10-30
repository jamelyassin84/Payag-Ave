import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RightModalComponent } from './right-modal.component'

describe('RightModalComponent', () => {
	let component: RightModalComponent
	let fixture: ComponentFixture<RightModalComponent>
	let debugElement: DebugElement
	let htmlElement: HTMLElement

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RightModalComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(RightModalComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should  be a transparent backdrop.', () => {
		debugElement = fixture.debugElement.query(
			By.css('.backdrop')
		).nativeElement
		expect(debugElement).toBeTruthy()
	})

	it('should  close a modal if backdrop is clicked.', () => {})

	it('should  close if ESC key is pressed.', () => {})

	it('should have modal-content', () => {})

	it('should should be on left.', () => {})

	it('should  have a header.', () => {})

	it('should  have a title.', () => {})

	it('should have close button', () => {})

	it('should have a modal body', () => {})

	it('should have a template outlet', () => {})

	it('should have a class attribute', () => {})

	it('should have a callback button', () => {})

	it('should have a cancel button', () => {})

	it('should have an animation', () => {})

	// it('', () => {})
})
