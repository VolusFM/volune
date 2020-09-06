import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

/**
 * Component to handle the basic information of a character.
 */
@Component({
    selector: 'app-character-sheet-bio',
    templateUrl: './character-sheet-bio.component.html',
    styleUrls: ['./character-sheet-bio.component.css']
})
export class CharacterSheetBioComponent implements OnInit {
    /**
     * Character's first name.
     */
    public get firstName(): string { return this.characterBioForm.get('firstName').value; }

    /**
     * Character's name.
     */
    public get name(): string { return this.characterBioForm.get('name').value; }

    /**
     * The form for this component.
     */
    public characterBioForm: FormGroup;

    /**
     * Creates a new {@link CharacterSheetBioComponent} instance.
     * @param _FORM_BUILDER The FormBuilder to inject.
     */
    public constructor(private readonly _FORM_BUILDER: FormBuilder) {
    }

    /**
     * ngOnInit Angular lifecycle hook
     */
    public ngOnInit(): void {
        this.characterBioForm = this._FORM_BUILDER.group({
            firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-éèàù]+$')]),
            name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-éèàù]+$')])
        });
    }
}
