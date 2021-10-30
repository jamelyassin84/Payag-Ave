import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobsComponent } from './jobs/jobs.component'
import { InternshipsComponent } from './internships/internships.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { MenuComponent } from './menu/menu.component'
import { PriceTagComponent } from 'src/app/components/shared/price-tag/price-tag.component'

@NgModule({
	declarations: [
		JobsComponent,
		InternshipsComponent,
		SignInComponent,
		MenuComponent,
		PriceTagComponent,
	],
	imports: [CommonModule],
	exports: [
		JobsComponent,
		InternshipsComponent,
		SignInComponent,
		MenuComponent,
		PriceTagComponent,
	],
})
export class LandingModule {}
