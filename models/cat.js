import { v4 as newId } from 'uuid';

let cats = [
    {
        id: '1',
        name: 'Cheetah',
        age: 15,
        species: 'cheetah',
        src: '/img/Cheetah.jpg'
    },
    {
        id: '2',
        name: 'Puma',
        age: 20,
        species: 'puma',
        src: '/img/Puma.jpg'
    },
    {
        id: '3',
        name: 'Jaguar',
        age: 18,
        species: 'jaguar',
        src: '/img/Jaguar.jpg'
    },
    {
        id: '4',
        name: 'Leopard',
        age: 17,
        species: 'leopard',
        src: '/img/Leopard.jpg'
    },
    {
        id: '5',
        name: 'Sprint',
        age: 14,
        species: 'cheetah',
        src: '/img/Sprint.jpg'
    },
    {
        id: '6',
        name: 'Rocky',
        age: 22,
        species: 'puma',
        src: '/img/Rocky.jpg'
    },
    {
        id: '7',
        name: 'Spotty',
        age: 16,
        species: 'jaguar',
        src: '/img/Spotty.jpg'
    },
    {
        id: '8',
        name: 'Whiskers',
        age: 19,
        species: 'leopard',
        src: '/img/Whiskers.jpg'
    },
    {
        id: '9',
        name: 'Flash',
        age: 13,
        species: 'cheetah',
        src: '/img/Flash.jpg'
    },
    {
        id: '10',
        name: 'Shadow',
        age: 21,
        species: 'puma',
        src: '/img/Shadow.jpg'
    }
];

class Cats {
    constructor(name, age, species, src) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.src = src;
        this.id = newId();
    }

    static getCats = () => {
        return cats;
    };

    static getCatById = (id) => {
        return cats.find((cat) => cat.id === id);
    };

    static getCatByspecies = (species) => {
        return cats.filter((cat) => cat.species === species);
    };

    addCat = () => {
        return cats.push(this);
    };

    static updateCat = (id, updateCat) => {
        const catIndex = cats.findIndex((cat) => cat.id === id);
        if (catIndex === -1) {
            return false;
        } else {
            cats[catIndex] = { id, ...updateCat };
            return true;
        }
    };

    static deleteCat = (id) => {
        const catIndex = cats.findIndex((cat) => cat.id === id);
        return cats.splice(catIndex, 1);
    };
}

export default Cats;
