import express from 'express';
import {addNewService, getServices, deleteService, updateService} from '../controllers/services.js';

const router = express.Router();

router.get('/', getServices);

router.post('/add-new', addNewService);

router.delete('/:id', deleteService);

router.put('/update', updateService);

export default router;