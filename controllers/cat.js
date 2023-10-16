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

    addCat: (req, res) => {
        const { name, age, spices, src } = req.body;
        const newCat = new Cats(name, age, spices, src);
        newCat.addCat();
        res.status(200).render('success', { newCat: newCat });
    },
    updateCat: (req, res) => {
        const { id } = req.params;
        const { name, age, spices, src } = req.body;
        console.log(req.body);
        const newCat = Cats.updateCat(id, { name, age, spices, src });
        res.status(200).render('success', { newCat });
    },
    deleteCatById: (req, res) => {
        const { id } = req.params;
        const newCat = Cats.deleteCat(id);
        console.log(newCat);
        res.status(200).render('success', { newCat });
    }
};

export default catController;
