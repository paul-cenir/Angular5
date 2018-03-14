import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './modules/global-pages/header/header.component';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { FormsComponent } from './modules/pages/forms/forms.component';
import { GlobalDataServiceService } from './services/global-data-service.service'
import { GlobalValidationServicesService } from './services/global-validation/global-validation-services.service';




@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomePageComponent,
        FormsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [GlobalDataServiceService, GlobalValidationServicesService],
    bootstrap: [AppComponent]
})
export class AppModule {


}
