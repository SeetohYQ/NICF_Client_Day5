import { Directive } from "@angular/core";
import { NG_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[validRating]',
    providers: [{
        provide: NG_VALIDATORS, useExisting:  RatingValidator, multi: true
    }]
})

export class RatingValidator {

   // This method is the one required by the Validator interface
    validate(c: FormControl): ValidationErrors | null {
    // Here we call our static validator function 
    return RatingValidator.validateRating(c);
    }

    static validateRating(control: FormControl): ValidationErrors {
        if (control.value < 0 || control.value > 10) {
            return {ratingError : 'Rating must be between 0 and 10.'};
        }
        // If no error, return null  
        return null;
    }
}