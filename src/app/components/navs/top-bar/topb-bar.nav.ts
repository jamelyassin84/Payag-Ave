export const TopBarNavs: TopNav[] = [
	{
		name: 'Home',
		route: '/admin/',
	},
	{
		name: 'About',
		route: '/admin/',
	},
	{
		name: 'Popular Items',
		route: '/admin/',
	},
	{
		name: 'Menu',
		route: '/admin/',
	},
	{
		name: 'Gallery',
		route: '/admin/',
	},
	{
		name: 'Info',
		route: '/admin/',
	},
	{
		name: 'Contact',
		route: '/admin/',
	},
	{
		name: 'Jobs',
		route: '/staff/',
	},
	{
		name: 'Internships',
		route: '/staff/',
	},
	{
		name: 'Sign-in',
		route: '/staff/',
	},
]

export type TopNav = {
	name: string
	route: string
}

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

export type TopIcons = {
	icon: string
	route: string
}
