import { PublishingHouse } from './publishing-house.model';
import { Person } from './person.model';
import { Status } from './status.enum';

export class Book {
    name: string;
    author: Person;
    releaseYear: number;
    pages: number;
    publishingHouse: PublishingHouse;
    status: Status;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }

    public get publishingHouseString(): string {
        const ph = this.publishingHouse;
        return ph ? `${ph.country}, ${ph.city}, ${ph.phone}` : '';
    }
}
