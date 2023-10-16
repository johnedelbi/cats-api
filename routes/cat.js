import express from 'express';

import catController from '../controllers/cat.js';

const router = express.Router();

router.get('/', catController.getCats);
router.get('/:id', catController.getCatById);
router.get('/species/:species', catController.getCatByspecies);
router.post('/', catController.addCat);
router.put('/:id', catController.updateCat);
router.delete('/:id', catController.deleteCatById);

export default router;
