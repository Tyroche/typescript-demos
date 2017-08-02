/*  Partial Types
    Ability to create a partial type from an existing type where
    the properties are not required.
*/
interface Person {
    name: string;
    age: number;
    location: string;
}

let chris: Person = {
    name: 'Chris Pratt',
    //age: 24,
    //location: 'Indianapolis, IN'
};

// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

type PartialPerson = Partial<Person>;

let teddy: PartialPerson = {
    name: 'Teddy Sterne'
};

///////////////////////////////////////////////////////////////////

interface MetaData {
    age: number,
    location: string
}

interface NamedPerson extends Partial<MetaData> {
    name: string;
}

let johnny: NamedPerson = {
    name: "Johnny Bretz"
}

johnny.age = 1;