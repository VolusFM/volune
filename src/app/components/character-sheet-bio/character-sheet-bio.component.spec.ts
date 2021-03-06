import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterSheetBioComponent} from './character-sheet-bio.component';
import {FormBuilder} from '@angular/forms';

describe('CharacterSheetBioComponent', () => {
    let component: CharacterSheetBioComponent;
    let fixture: ComponentFixture<CharacterSheetBioComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterSheetBioComponent],
            providers: [FormBuilder]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterSheetBioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
