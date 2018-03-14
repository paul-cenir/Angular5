import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class GlobalValidationServicesService {

    constructor() { }

    globalValidation = {
        'name': [null, Validators.required],
        'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        'validate': ''
    }
}
