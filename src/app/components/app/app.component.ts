import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public constructor(private readonly _TRANSLATE_SERVICE: TranslateService) {
        _TRANSLATE_SERVICE.addLangs(['en', 'fr']);
        _TRANSLATE_SERVICE.setDefaultLang('en');

        const browserLang = _TRANSLATE_SERVICE.getBrowserLang();
        _TRANSLATE_SERVICE.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
}
