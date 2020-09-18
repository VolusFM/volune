import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
    /**
     * Creates a new {@link NavBarComponent} instance.
     * @param TRANSLATE_SERVICE The TranslateService to inject.
     */
    public constructor(public readonly TRANSLATE_SERVICE: TranslateService) {
    }

    public selectLanguage(lang: string): void {
        this.TRANSLATE_SERVICE.use(lang);
    }
}
