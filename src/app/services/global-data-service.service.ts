import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class GlobalDataServiceService {
    apiRoot: string = "http://appfactorieapi-dev.azurewebsites.net/";
    constructor(private http: HttpClient) {

    }

    cars = [
        'ford', 'cheverlot', 'Buick'
    ];


    myData() {
        return 'My Reactive Form';
    }

    sampleHttpRequest() {
        console.log("GET");
        let url = `${this.apiRoot}/api/Preview/GetAllUserAppInfo?userId=2651`;
        this.http.get(url).subscribe(
            data => {
                console.log(data);
            }, err => {
                console.log("Error occured.");
            }
        )

    }
}
