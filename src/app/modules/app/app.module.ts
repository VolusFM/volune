import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from '../../components/app/app.component';
import {CharacterSheetComponent} from '../../components/character-sheet/character-sheet.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CharacterSheetBioComponent} from '../../components/character-sheet-bio/character-sheet-bio.component';
import {TranslateLoader, TranslateModule, TranslateStore} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SharedModule} from '../shared/shared.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(httpClient);
}

@NgModule({
    declarations: [
        AppComponent,
        CharacterSheetComponent,
        CharacterSheetBioComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }
        ),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
