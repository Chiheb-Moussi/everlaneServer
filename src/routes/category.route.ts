import express from 'express';
import {createCategory, deleteCategory, getAllCategories, updateCategory} from '../controllers/category.controller'
const categoryRoutes = express.Router();

categoryRoutes.post('/api/category/create', createCategory);
categoryRoutes.put('/api/category/:id', updateCategory);
categoryRoutes.delete('/api/category/:id', deleteCategory);
categoryRoutes.get('/api/category/', getAllCategories);

export default categoryRoutes;