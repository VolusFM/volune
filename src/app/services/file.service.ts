import {Injectable} from '@angular/core';
import {saveAs} from 'file-saver';

@Injectable({
    providedIn: 'root'
})
export class FileService {

    public constructor() {
    }

    /**
     * Download a file.
     * @param json the json content of the file.
     * @param fileName the name to give the file (without extension)
     */
    public downloadFile(json: string, fileName: string): void {
        saveAs(new Blob([json], {type: 'application/json'}), fileName);
    }
}
