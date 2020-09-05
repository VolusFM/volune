import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() {
  }

  /**
   * Download a file.
   * @param json the json content of the file.
   * @param fileName the name to give the file (without extension)
   */
  public downloadFile(json: string, fileName: string): void {
    const ANCHOR: HTMLAnchorElement = document.createElement('a');
    const BLOB: Blob = new Blob([json], {type: 'application/json'});
    const URL: string = window.URL.createObjectURL(BLOB);
    document.body.append(ANCHOR);

    ANCHOR.href = URL;
    ANCHOR.download = fileName;
    console.log(ANCHOR);
    ANCHOR.click();
    window.URL.revokeObjectURL(URL);
  }
}
