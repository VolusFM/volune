import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from '../../components/app/app.component';
import {CharacterSheetComponent} from '../../components/character-sheet/character-sheet.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CharacterSheetBioComponent} from '../../components/character-sheet-bio/character-sheet-bio.component';

@NgModule({
    declarations: [
        AppComponent,
        CharacterSheetComponent,
        CharacterSheetBioComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
