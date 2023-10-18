import Cats from '../models/cat.js';

const catController = {
    getCats: (req, res) => {
        const cats = Cats.getCats();
        res.status(200).render('cats', { cats });
    },

    getCatById: (req, res) => {
        const { id } = req.params;
        const cat = Cats.getCatById(id);
        res.status(200).render('cat', { cat });
    },

    getCatBySpecies: (req, res) => {
        const { species } = req.params;
        const cats = Cats.getCatBySpecies(species);
        res.status(200).render('cats', { cats });
    },

    addCat: (req, res) => {
        const { name, age, species, src } = req.body;
        const newCat = new Cats(name, age, species, src);
        newCat.addCat();
        res.status(200).render('success', { newCat: newCat });
    },
    updateCat: (req, res) => {
        const { id } = req.params;
        const { name, age, species, src } = req.body;
        const newCat = Cats.updateCat(id, { name, age, species, src });
        res.status(200).render('success', { newCat });
    },
    deleteCatById: (req, res) => {
        const { id } = req.params;
        const newCat = Cats.deleteCat(id);
        res.status(200).render('success', { newCat });
    }
};

export default catController;
