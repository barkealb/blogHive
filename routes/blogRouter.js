const express = require('express');
const blogRouter = express.Router()
const Blog = require('../model/Blog')


//Get all Blogs 

blogRouter.get('/', (req, res, next) => {
    Blog.find()
    .then(blogs => {
        res.status(200).send(blogs)
    })
    .catch(err => console.log(err))
})

//Get Blogs by User 

blogRouter.get('/user', (req, res, next) => {
    Blog.find({ user: req.auth._id } )
    .then(blogs => {
        res.status(200).send(blogs)
    })
    .catch(err => console.log(err))
})

//get Blog by ID

blogRouter.get('/:blogId', (req, res, next) => {
    const blogId = req.params.blogId;
    Blog.findById(blogId)
      .then(blog => {
        if (!blog) {
          return res.status(404).send('Blog not found');
        }
        res.status(200).send(blog);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Server error');
      });
  });
  

//Post Blog by User 

blogRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id;
    const newBlog = new Blog(req.body)
    newBlog.save()
    .then(savedBlog => {
        return res.status(201).send(savedBlog)
    })
    .catch(err => console.log(err))
})

//Delete Blog by User 

blogRouter.delete("/:blogId", (req, res, next) => {
   Blog.findByIdAndDelete({_id: req.params.blogId, user: req.auth._id})
   .then(deletedBlog => {
    return res.status(200).send(`Successfully Deleted Blog: ${deletedBlog.title}`)
   })
   .catch(err => console.log(err))
})

/*Update Blog*/

blogRouter.put("/:blogId", (req, res, next) => {
    Blog.findByIdAndUpdate({_id: req.params.blogId, user: req.auth._id}, req.body, { new: true })
    .then(updatedBlog => {
        return res.status(201).send(updatedBlog)
    })
    .catch(err => console.log(err))
})


module.exports = blogRouter