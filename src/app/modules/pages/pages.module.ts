import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomePageComponent, FormsComponent]
})
export class PagesModule { }
