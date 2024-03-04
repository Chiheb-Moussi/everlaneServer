import CategoryModel, {ICategory} from '../models/category.model';
import SubCategoryModel, {ISubCategory} from '../models/subCategory.model';
import {Request, Response} from 'express';

const createSubCategory = async(req: Request, res: Response) => {
    const {title, category_id} = req.body;
    try {
        const category = await  CategoryModel.findById(category_id);
        if(!category) {
            throw new Error('Category not found');
        }
        const subCategory = await SubCategoryModel.create({
            title,
            category
        })

        res.status(201).json({subCategory})
    }catch (e) {
        console.log(e)
        res.status(403).json({error: 'Could not create sub category'})
    }
}

// const updateCategory = async (req: Request, res:Response)=> {
//     const {id} = req.params;
//     const {title} = req.body;
//     try {
//         const category = await CategoryModel.findByIdAndUpdate(id, {
//             title: title
//         }, {new: true})
//         res.status(201).json({category})
//     }catch (e) {
//         res.status(403).json({error: 'Could not update category'})
//     }
// }
//
//
const getAllSubCategories = async (req: Request, res: Response) => {

    try {
        const subCategories = await SubCategoryModel.find().populate('category');
        res.status(200).json({subCategories});
    }catch (e) {
        res.status(403).json({error: 'Could not find subCategories'})
    }
}

// const deleteCategory = async (req: Request, res: Response) => {
//
//     const {id} = req.params;
//     try {
//         await CategoryModel.findByIdAndDelete(id);
//         res.status(204).json({message:'The ccategory has been deleted successfully'});
//     }catch (e) {
//         res.status(403).json({error: 'Could not delete category'})
//     }
// }

export {
    createSubCategory,
    // updateCategory,
    getAllSubCategories,
    // deleteCategory
}