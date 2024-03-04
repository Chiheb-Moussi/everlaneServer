import {model, Schema} from "mongoose";
import {categorySchema, ICategory} from "./category.model";


export interface ISubCategory {
    id?: string;
    title: string;
    category: ICategory
}

const subCategorySchema =  new Schema<ISubCategory>({
    title: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    }
}, {
    id: true,
    toJSON: {
        transform(doc, ret){
            ret.id = ret._id
            delete ret._id
        }
    }
});


export default model<ISubCategory>('SubCategory', subCategorySchema)

