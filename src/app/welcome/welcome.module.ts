import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { CategoryNavigationComponent } from './category-navigation/category-navigation.component';
import { HeroComponent } from './hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [WelcomeComponent, CategoryNavigationComponent, HeroComponent],
  imports: [CommonModule, WelcomeRoutingModule, TranslateModule, MatIconModule],
})
export class WelcomeModule {}
