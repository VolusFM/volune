import {Component, ViewChild} from '@angular/core';
import {Character} from '../../models/character';
import {FileService} from '../../../../app/services/file/file.service';
import {CharacterSheetBioComponent} from '../character-sheet-bio/character-sheet-bio.component';
import {FormService} from '../../../shared/services/form/form.service';
import {Alias} from '../../models/alias';

@Component({
    selector: 'app-character-sheet',
    templateUrl: './character-sheet.component.html',
    styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent {

    /**
     * Creates a new {@link CharacterSheetComponent} instance.
     * @param _FILE_SERVICE The FileService to inject.
     * @param _FORM_SERVICE The FormService to inject.
     */
    public constructor(private _FILE_SERVICE: FileService,
                       private _FORM_SERVICE: FormService) {
    }

    /**
     * The {@link CharacterSheetBioComponent} child component.
     */
    @ViewChild('bioComponent') public bio: CharacterSheetBioComponent;

    /**
     * Check whether the sheet is valid and can be downloaded.
     * @returns boolean, whether the sheet is valid.
     */
    public isSheetValid(): boolean {
        return this._FORM_SERVICE.isFormValid(this.bio?.characterBioForm);
    }

    /**
     * Save the user's input into a JSON file.
     */
    public saveFile(): void {
        const JSON_STRING: string = JSON.stringify(new Character({
            aliases: this.bio.aliases as Alias[],
            firstName: this.bio.firstName,
            name: this.bio.name
        }), null, 4);

        const FILE_NAME: string = this.bio.firstName + '_' + this.bio.name + '_' + new Date().toLocaleDateString();

        this._FILE_SERVICE.downloadFile(JSON_STRING, FILE_NAME);
    }
}
