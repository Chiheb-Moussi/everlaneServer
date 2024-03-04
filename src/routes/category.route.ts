import express from 'express';
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateCategory
} from '../controllers/category.controller'
const categoryRoutes = express.Router();

categoryRoutes.post('/api/category/create', createCategory);
categoryRoutes.put('/api/category/:id', updateCategory);
categoryRoutes.get('/api/category/:id', getCategoryById);
categoryRoutes.delete('/api/category/:id', deleteCategory);
categoryRoutes.get('/api/category/', getAllCategories);

export default categoryRoutes;