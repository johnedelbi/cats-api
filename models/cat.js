import { v4 as newId } from 'uuid';

let cats = [
    {
        id: '1',
        name: 'john',
        age: '5',
        spices: 'human',
        src: 'sss'
    }
];

class Cats {
    constructor(name, age, spices, src) {
        this.name = name;
        this.age = age;
        this.spices = spices;
        this.src = src;
        this.id = newId();
    }

    static getCats = () => {
        return cats;
    };

    static getCatById = (id) => {
        return cats.find((cat) => cat.id === id);
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
