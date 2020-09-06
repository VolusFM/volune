import {Component, ViewChild} from '@angular/core';
import {Character} from '../../models/character';
import {FileService} from '../../services/file.service';
import {CharacterSheetBioComponent} from '../character-sheet-bio/character-sheet-bio.component';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-character-sheet',
    templateUrl: './character-sheet.component.html',
    styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent{

    /**
     * Creates a new {@link CharacterSheetComponent} instance.
     * @param _FILE_SERVICE The FileService to inject.
     */
    public constructor(private _FILE_SERVICE: FileService) {
    }
    /**
     * The {@link CharacterSheetBioComponent} child component.
     */
    @ViewChild('bioComponent') public bio: CharacterSheetBioComponent;

    private static isFormValid(form: FormGroup): boolean {
        return form.valid;
    }

    public isSheetValid(): boolean {
        // return CharacterSheetComponent.isFormValid(this.bio.characterBioForm);
        return true;
    }

    /**
     * Save the user's input into a JSON file.
     */
    public saveFile(): void {
        const JSON_STRING: string = JSON.stringify(new Character({
            firstName: this.bio.firstName,
            name: this.bio.firstName
        }));

        const FILE_NAME: string = this.bio.firstName + '_' + this.bio.name + '_' + new Date().toLocaleDateString();

        this._FILE_SERVICE.downloadFile(JSON_STRING, FILE_NAME);
    }
}
