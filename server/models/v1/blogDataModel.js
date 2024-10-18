import { Schema,model } from "mongoose";
import {CONSTANTS } from '../../constants/index.js'


const blogSchema= new Schema(
    {
        blogID:{
            type: String,
            required: true,
        },
        image:{
            type: String,
            required: true,

        },
        title:{
            type: String,
            required: true,

        },
        content:{
            type: String,
            required: true,

        },
        status: {
            required: false,
            type: String,
            default: CONSTANTS.STATUS.ACTIVE,
            enum: Object.values(CONSTANTS.STATUS),
            
        },
    },{ versionKey: false, timestamps: true }
);


blogSchema.set('toObject', {virtuals: true});
blogSchema.set('toJSON', {virtuals: true,});

const BlogDataModel = model('Blog', blogSchema);

export default BlogDataModel;