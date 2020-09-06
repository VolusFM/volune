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
    public firstName: string;

    public name: string;

    public constructor() {
    }
}
