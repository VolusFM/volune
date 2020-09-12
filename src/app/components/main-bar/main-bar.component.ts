import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-main-bar',
    templateUrl: './main-bar.component.html',
    styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent {
    /**
     * Creates a new {@link MainBarComponent} instance.
     * @param TRANSLATE_SERVICE The TranslateService to inject.
     */
    public constructor(public readonly TRANSLATE_SERVICE: TranslateService) {
    }

}
