import express from 'express';
import {createSubCategory, getAllSubCategories} from '../controllers/subCategory.controller'
const subCategoryRoutes = express.Router();

subCategoryRoutes.post('/api/subcategory/create', createSubCategory);
// subCategoryRoutes.put('/api/category/:id', updateCategory);
// subCategoryRoutes.delete('/api/category/:id', deleteCategory);
subCategoryRoutes.get('/api/subcategory/', getAllSubCategories);


export default subCategoryRoutes;