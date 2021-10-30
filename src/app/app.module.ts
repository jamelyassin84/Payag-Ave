import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { IvyCarouselModule } from 'angular-responsive-carousel'

import { AppComponent } from './app.component'
import { NavbarComponent } from './components/modules/navbar/navbar.component'
import { SidebarComponent } from './components/modules/sidebar/sidebar.component'
import { SideBarComponent } from './components/navs/side-bar/side-bar.component'
import { TopBarComponent } from './components/navs/top-bar/top-bar.component'
import { LandingComponent } from './components/navs/landing/landing.component';
import { RightModalComponent } from './components/right-modal/right-modal.component'

@NgModule({
	declarations: [
		AppComponent,
		TopBarComponent,
		SidebarComponent,
		NavbarComponent,
		SideBarComponent,
		LandingComponent,
  RightModalComponent,
	],
	imports: [BrowserModule, AppRoutingModule, NgbModule, IvyCarouselModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
