import CategoryModel, {ICategory} from '../models/category.model';
import {Request, Response} from 'express';

const createCategory = async(req: Request, res: Response) => {
    const {title} = req.body;
    try {
        const category = await CategoryModel.create({
            title
        })

        res.status(201).json({category})
    }catch (e) {
        console.log(e)
        res.status(403).json({error: 'Could not create category'})
    }
}

const updateCategory = async (req: Request, res:Response)=> {
    const {id} = req.params;
    const {title} = req.body;
    try {
        const category = await CategoryModel.findByIdAndUpdate(id, {
            title: title
        }, {new: true})
        res.status(201).json({category})
    }catch (e) {
        res.status(403).json({error: 'Could not update category'})
    }
}


const getAllCategories = async (req: Request, res: Response) => {

    try {
        const categories = await CategoryModel.find();
        res.status(200).json({categories});
    }catch (e) {
        res.status(403).json({error: 'Could not find categories'})
    }
}

const deleteCategory = async (req: Request, res: Response) => {

    const {id} = req.params;
    try {
        await CategoryModel.findByIdAndDelete(id);
        res.status(204).json({message:'The ccategory has been deleted successfully'});
    }catch (e) {
        res.status(403).json({error: 'Could not delete category'})
    }
}

export {
    createCategory,
    updateCategory,
    getAllCategories,
    deleteCategory
}