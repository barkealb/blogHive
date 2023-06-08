const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    blog: {
        type: Schema.Types.ObjectId,
        ref: "Blog"
    }
}, { timestamps: true })

module.exports = mongoose.model("Comment", commentSchema)
