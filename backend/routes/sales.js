import express from 'express'
import {addNewSale, getSales, deleteSale} from '../controllers/sales.js';

const router = express.Router();

router.get('/', getSales);

router.post('/add-new', addNewSale);

router.delete('/:id', deleteSale);

export default router;