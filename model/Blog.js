const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    blog: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})




 
module.exports = mongoose.model("Blog", blogSchema)