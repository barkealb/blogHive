const express = require('express');
const commentRouter = express.Router();
const Comment = require('../model/Comment');
const User = require('../model/User');

//Get all Comments

commentRouter.get('/', (req, res, next) => {
    Comment.find().sort({ createdAt: -1 }).populate({ path: 'user', select: 'username' })
    .then(comments => {
        res.status(200).send(comments)
    })
    .catch(err => console.log(err))
})

//Get Comments by Blog

commentRouter.get('/:blogId', (req, res, next) => {
    Comment.find({ blog: req.params.blogId } )
    .sort({ createdAt: -1 }).populate({ path: 'user', select: 'username' })
    .then(comments => {
        res.status(200).send(comments)
    })
    .catch(err => console.log(err))
})

//Post Comment by User

commentRouter.post('/:blogId', (req, res, next) => {
    let user;
    User.findById(req.auth._id)
      .then((foundUser) => {
        user = foundUser;
        req.body.user = user._id;
        req.body.blog = req.params.blogId;
        const newComment = new Comment(req.body);
        return newComment.save();
      })
      .then((savedComment) => {
        return savedComment.populate({ path: 'user', select: 'username' });
      })
      .then((populatedComment) => {
        return res.status(201).send(populatedComment);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send('Server Error');
      });
  });

// Add new Comment
// commentRouter.post(
//     '/:blogId',
//     async (req, res, next) => {
//       try {
//         const user = await User.findById(req.auth._id);
//         req.body.user = user._id;
//         req.body.issue = req.params.blogId;
//         const newComment = new Comment(req.body);
//         const savedComment = await newComment.save();
//         await savedComment.populate({
//           path: 'user',
//           select: 'username profileImage',
//         });
//         return res.status(201).send(savedComment);
//       } catch (err) {
//         res.status(500);
//         return next(err);
//       }
//     }
//   );

//Delete Comment by User

commentRouter.delete("/:commentId", (req, res, next) => {
    Comment.findByIdAndDelete({_id: req.params.commentId, user: req.auth._id})
    .then(deletedComment => {
     return res.status(200).send(`Successfully Deleted Comment: ${deletedComment.title}`)
    })
    .catch(err => console.log(err))
    })

/*Update Comment*/

commentRouter.put("/:commentId", (req, res, next) => {
    Comment.findByIdAndUpdate({_id: req.params.commentId, user: req.auth._id}, req.body, { new: true })
    .then(updatedComment => {
        return res.status(201).send(updatedComment)
    })
    .catch(err => console.log(err))
})      

module.exports = commentRouter