import { Status } from 'src/app/models/status.enum';
import { Person } from './person.model';

export class Movie {
    public name: string;
    public releaseYear: number;
    public studio: string;
    public country: string;
    public status: Status;
    public actors: Person[];

    constructor(obj?: any) {
        Object.assign(this, obj);
    }

    public get actorsString(): string {
        return this.actors ? this.actors.map(a => a.name).join(', ') : '';
    }
}
