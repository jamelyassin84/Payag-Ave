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
		title: 'Payag Ave. Jobs',
	},
	{
		name: 'Internships',
		title: 'Internships for Payag Ave.',
	},
	{
		name: 'Sign-in',
		title: 'Sign-in as Admin or Staff',
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
	title: string
	template?: string
	callback?: Function
}

export type TopNav = {
	name: string
	scrollTo?: string
}

export type TopIcons = {
	icon: string
	route: string
}
