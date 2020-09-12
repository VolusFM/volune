import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MainBarComponent} from '../../components/main-bar/main-bar.component';
import {HttpClient} from '@angular/common/http';


@NgModule({
    declarations: [
        MainBarComponent
    ],
    exports: [
        CommonModule,
        MainBarComponent
    ],
    imports: [
        CommonModule,
        TranslateModule
    ]
})
export class SharedModule {
}
