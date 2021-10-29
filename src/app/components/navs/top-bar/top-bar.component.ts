import { Component, OnInit } from '@angular/core'
import { TopBarIcons, TopBarNavs, TopIcons, TopNav } from './topb-bar.nav'

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
	navs: TopNav[] = TopBarNavs
	icons: TopIcons[] = TopBarIcons
	constructor() {}

	ngOnInit(): void {}
}
