import {Alias} from './alias';

export class Character {
    public aliases: Alias[];

    public firstName: string;

    public name: string;

    public constructor(data: unknown) {
        for (const PROP of PROPERTIES) {
            if (data.hasOwnProperty(PROP)) {
                this[PROP] = data[PROP];
            }
        }
    }
}

const PROPERTIES = ['aliases', 'firstName', 'name'];
