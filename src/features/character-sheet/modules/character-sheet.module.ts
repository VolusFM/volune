import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterSheetComponent} from '../components/character-sheet/character-sheet.component';
import {CharacterSheetBioComponent} from '../components/character-sheet-bio/character-sheet-bio.component';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        CharacterSheetComponent,
        CharacterSheetBioComponent
    ],
    exports: [
        CharacterSheetComponent,
        CharacterSheetBioComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ReactiveFormsModule
    ]
})
export class CharacterSheetModule {
}
