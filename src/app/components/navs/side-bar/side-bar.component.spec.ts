import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SideBarComponent } from './side-bar.component'

describe('SideBarComponent', () => {
	let component: SideBarComponent
	let fixture: ComponentFixture<SideBarComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SideBarComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(SideBarComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create the component', () => {
		expect(component).toBeTruthy()
	})

	it('should be responsive', () => {})

	it('should have floating hamburger icon', () => {})

	it('should have navigations', () => {})

	it('should have an active navigation', () => {})

	it('should have navigation state for refreshing the app', () => {})

	it('navigations should be in this JSON Format', () => {})

	it('navigations should navigate on the different route', () => {})
})
