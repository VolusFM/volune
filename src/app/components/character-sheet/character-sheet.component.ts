import { Component, OnInit } from '@angular/core';
import {Character} from '../../models/character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  public firstName: string = '';

  public name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public saveFile(): void {
    console.log(new Character({
      firstName: this.firstName,
      name: this.name
    }));
  }

}
