import {Component} from '@angular/core';

/**
 * Component to handle the basic information of a character.
 */
@Component({
    selector: 'app-character-sheet-bio',
    templateUrl: './character-sheet-bio.component.html',
    styleUrls: ['./character-sheet-bio.component.css']
})
export class CharacterSheetBioComponent {
    /**
     * Character's first name.
     */
    public firstName: string;

    /**
     * Character's name.
     */
    public name: string;

    public constructor() {
    }
}
