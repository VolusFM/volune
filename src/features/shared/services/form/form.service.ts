import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    /**
     * Creates a new {@link FormService} instance.
     */
    public constructor() {
    }

    /**
     * Check whether a given form is valid.
     * @param form the form to check.
     * @returns boolean, whether the form is valid.
     */
    public isFormValid(form: FormGroup): boolean {
        return form && form.valid;
    }
}
