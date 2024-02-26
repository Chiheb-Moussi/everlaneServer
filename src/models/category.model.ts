import {model, Schema} from "mongoose";


export interface ICategory {
    id?: string;
    title: string;
}

const categorySchema =  new Schema<ICategory>({
    title: {
        type: String,
        required: true
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


export default model<ICategory>('Category', categorySchema)

