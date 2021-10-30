import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TopBarComponent } from './top-bar.component'
import { TopNav } from './topb-bar.nav'

describe('TopBarComponent', () => {
	let component: TopBarComponent
	let fixture: ComponentFixture<TopBarComponent>
	let nav: HTMLElement
	let ul: HTMLElement
	let li: HTMLElement
	let navs: TopNav[] | any

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TopBarComponent],
		}).compileComponents()
		fixture = TestBed.createComponent(TopBarComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
		nav = fixture.nativeElement.querySelector('nav')
		ul = fixture.nativeElement.querySelector('ul')
		li = fixture.nativeElement.querySelector('li')
		navs = component.navs
	})

	it('should create the component', () => {
		expect(component).toBeDefined()
		expect(component).toBeTruthy()
	})

	it('should have a <nav></nav> element wrapper', () => {
		expect(nav).toBeTruthy()
	})

	it('should have navigations', () => {
		expect(ul).toBeTruthy()
		expect(li).toBeTruthy()
	})

	it(`it should not proceed if user is unauthenticated`, () => {})

	it(`it should save credentials to Local Storage`, () => {})

	it(`LocalStorage key should have token and user`, () => {})

	it(`LocalStorage key should have token should not be null`, () => {})

	it(`LocalStorage key should have token user should not be null`, () => {})

	it(`'Login as Admin' should navigate to /admin`, () => {})

	it(`'Login as Staff' should navigate to /staff`, () => {})
})
