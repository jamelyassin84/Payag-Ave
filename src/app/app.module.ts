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
import { LandingComponent } from './components/navs/landing/landing.component'
import { RightModalComponent } from './components/right-modal/right-modal.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StopPropagationDirective } from './directives/stop-propagation.directive'
import { LandingModule } from './modules/landing/landing.module'
import { HTMLSanitizerPipe } from './pipes/htmlsanitizer.pipe'

@NgModule({
	declarations: [
		AppComponent,
		TopBarComponent,
		SidebarComponent,
		NavbarComponent,
		SideBarComponent,
		LandingComponent,
		RightModalComponent,
		StopPropagationDirective,
		HTMLSanitizerPipe,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		NgbModule,
		IvyCarouselModule,
		LandingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
