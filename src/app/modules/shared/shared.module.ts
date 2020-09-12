import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NavBarComponent} from '../../components/nav-bar/nav-bar.component';
import {HttpClient} from '@angular/common/http';


@NgModule({
    declarations: [
        NavBarComponent
    ],
    exports: [
        CommonModule,
        NavBarComponent
    ],
    imports: [
        CommonModule,
        TranslateModule
    ]
})
export class SharedModule {
}
