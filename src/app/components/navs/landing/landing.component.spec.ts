import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LandingComponent } from './landing.component'

describe('LandingComponent', () => {
	let component: LandingComponent
	let fixture: ComponentFixture<LandingComponent>
	let h1: HTMLElement
	let button: HTMLElement
	let img: HTMLElement

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LandingComponent],
		}).compileComponents()
		fixture = TestBed.createComponent(LandingComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
		h1 = fixture.nativeElement.querySelector('h1')
		button = fixture.nativeElement.querySelector('button')
		img = fixture.nativeElement.querySelector('img')
	})

	it('should create the component', () => {
		expect(component).toBeDefined()
		expect(component).toBeTruthy()
	})

	it('should have a headline.', () => {
		expect(h1).toBeTruthy()
	})

	it('should have a button.', () => {
		expect(button).toBeTruthy()
	})

	it('should have a headline Image', () => {
		expect(img).toBeTruthy()
	})

	it('should be responsive.', () => {})

	it('should have animations.', () => {})
})
