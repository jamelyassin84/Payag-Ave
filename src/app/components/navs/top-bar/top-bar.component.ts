import { Component, OnInit } from '@angular/core'
import { LandingService } from 'src/app/services/landing.service'
import { TopBarIcons, TopBarNavs, TopIcons, TopNav } from './topb-bar.nav'

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
	navs: TopNav[] = TopBarNavs
	icons: TopIcons[] = TopBarIcons

	constructor(private service: LandingService) {}

	ngOnInit(): void {}

	scroll(id: string | any) {
		this.service.scrollTo(id)
	}
}
