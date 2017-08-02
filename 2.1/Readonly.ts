// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };

function freeze<T>(obj: T): Readonly<T> {
    return obj;
}

interface Person {
    name: string;
}

let fixedPerson = freeze<Person>({ name: "Teddy" });

fixedPerson.name = "Chris";