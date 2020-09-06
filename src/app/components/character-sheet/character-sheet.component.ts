import {Component, OnInit} from '@angular/core';
import {Character} from '../../models/character';
import {FileService} from '../../services/file.service';

@Component({
    selector: 'app-character-sheet',
    templateUrl: './character-sheet.component.html',
    styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

    public firstName: string = '';

    public name: string = '';

    public constructor(private _FILE_SERVICE: FileService) {
    }

    ngOnInit(): void {
    }

    /**
     * Save the user's input into a JSON file.
     */
    public saveFile(): void {
        const JSON_STRING: string = JSON.stringify(new Character({
            firstName: this.firstName,
            name: this.name
        }));

        const FILE_NAME: string = this.firstName + '_' + this.name;

        this._FILE_SERVICE.downloadFile(JSON_STRING, FILE_NAME);
    }
}
