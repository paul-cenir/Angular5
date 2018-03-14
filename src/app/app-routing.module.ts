import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { FormsComponent } from './modules/pages/forms/forms.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'forms', component: FormsComponent },



    // all other routes and finally at the last add
    { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            routes,
            { enableTracing: false }
        )
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
