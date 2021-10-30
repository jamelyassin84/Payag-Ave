export const TopBarNavs: TopNav[] = [
	{
		name: 'Home',
		scrollTo: 'home',
	},
	{
		name: 'About',
		scrollTo: 'about',
	},
	{
		name: 'Popular Items',
		scrollTo: 'popular-items',
	},
	{
		name: 'Menu',
		scrollTo: 'menu',
	},
	{
		name: 'Gallery',
		scrollTo: 'gallery',
	},
	{
		name: 'Info',
		scrollTo: 'info',
	},
	{
		name: 'Contact',
		scrollTo: 'contact',
	},
]

export const ModalTopNavs: ModalNav[] = [
	{
		name: 'Jobs',
		data: {
			title: 'Payag Ave. Jobs',
			body: 'jobs',
			actionButtonName: 'Apply',
			callback: void 0,
		},
	},
	{
		name: 'Internships',
		data: {
			title: 'Internships at Payag Ave.',
			body: 'internship',
			actionButtonName: 'Apply',
			callback: void 0,
		},
	},
	{
		name: 'Sign-in',
		data: {
			title: 'Sign-in as Admin or Staff',
			body: 'sign-in',
			actionButtonName: 'Sign-in',
			callback: void 0,
		},
	},
]

export const TopBarIcons: TopIcons[] = [
	{
		icon: 'bi-facebook',
		route: 'facebook',
	},
	{
		icon: 'bi-twitter',
		route: 'facebook',
	},
	{
		icon: 'bi-instagram',
		route: 'facebook',
	},
]

export type ModalNav = {
	name: string
	data: {
		title: string
		body: string
		callback?: Function
		actionButtonName: string
	}
}

export type TopNav = {
	name: string
	scrollTo?: string
}

export type TopIcons = {
	icon: string
	route: string
}
