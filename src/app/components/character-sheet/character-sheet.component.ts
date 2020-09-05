import {Component, OnInit} from '@angular/core';
import {Character} from '../../models/character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  public firstName: string = '';

  public name: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  public saveFile(): void {
    const JSON_STRING: string = JSON.stringify(new Character({
      firstName: this.firstName,
      name: this.name
    }));

    const ANCHOR: HTMLAnchorElement = document.createElement('a');
    const BLOB: Blob = new Blob([JSON_STRING], {type: 'application/json'});
    const URL: string = window.URL.createObjectURL(BLOB);
    document.body.append(ANCHOR);

    ANCHOR.href = URL;
    ANCHOR.download = this.firstName + '_' + this.name;
    console.log(ANCHOR);
    ANCHOR.click();
    window.URL.revokeObjectURL(URL);
  }
}
