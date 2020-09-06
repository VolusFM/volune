export class Alias {
    public label: string;

    public reason: string;

    public constructor(data: unknown) {
        for (const PROP of PROPERTIES) {
            if (data.hasOwnProperty(PROP)) {
                this[PROP] = data[PROP];
            }
        }
    }
}

const PROPERTIES = ['label', 'reason'];
