import { trigger, state, style, animate, transition } from '@angular/animations'

export const openFromRight = () => {
	const contentOpen = {
		transform: 'translateX(100%) scale(.5)',
	}
	const contentClose = {
		transform: 'translateX(100%) scale(5)',
	}
	return [
		trigger('content', [
			state('void', style(contentClose)),
			transition(':enter', [style(contentOpen), animate('.3s')]),
			transition(':leave', [animate('.3s', style(contentClose))]),
		]),
	]
}
