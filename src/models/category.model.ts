import {model, Schema} from "mongoose";
import {ISubCategory} from "./subCategory.model";


export interface ICategory {
    id?: string;
    title: string;
    subCategories?: ISubCategory[]
}

export const categorySchema =  new Schema<ICategory>({
    title: {
        type: String,
        required: true
    },
    subCategories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'SubCategory'
        }
    ]
}, {
    id: true,
    toJSON: {
        transform(doc, ret){
            ret.id = ret._id
            delete ret._id
        }
    }
});
// categorySchema.virtual('subCategories',  {
//     ref: 'SubCategory',
//     localField: '_id',
//     foreignField: 'category'
// })

export default model<ICategory>('Category', categorySchema)

