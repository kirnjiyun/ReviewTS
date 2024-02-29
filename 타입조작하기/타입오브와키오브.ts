const personInstance = {
    name: "이정환",
    age: 27,
};

type PersonType = typeof personInstance;

interface Person {
    name: string;
    age: number;
    location: string;
}

function getPropertyKey(person: Person, key: keyof PersonType) {
    return person[key];
}

const person: Person = {
    name: "이정환",
    age: 27,
    location: "seoul",
};
