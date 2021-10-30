import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobsComponent } from './jobs/jobs.component'
import { InternshipsComponent } from './internships/internships.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { MenuComponent } from './menu/menu.component'

@NgModule({
	declarations: [
		JobsComponent,
		InternshipsComponent,
		SignInComponent,
		MenuComponent,
	],
	imports: [CommonModule],
	exports: [
		JobsComponent,
		InternshipsComponent,
		MenuComponent,
		SignInComponent,
	],
})
export class LandingModule {}
