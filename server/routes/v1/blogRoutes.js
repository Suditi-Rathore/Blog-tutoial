import express from "express";
import { blogDataValidator } from "../../validators/index.js";
import { blogDataController } from "../../controllers/index.js";
import { HTTP_STATUS_CODE, MESSAGES } from "../../constants/index.js";

const blogRouter = express.Router();


//find one
blogRouter.get(
  "/:x",
   async (req, res) => {
     try {
          const blogID= req.params.x;
          const result = await blogDataController.findBlog(blogID);
          res.status(HTTP_STATUS_CODE.OK)
          .send(MESSAGES.SUCCESS.BLOG_FOUND(result));
  } catch (error) {
    console.trace(error);
    res
      .status(error?.status || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
      .send(error);
  }
});


//find ALL
blogRouter.get(
    "/",
     async (req, res) => {
       try {
            const result = await blogDataController.getBlog();
            res.status(HTTP_STATUS_CODE.OK)
            .send(MESSAGES.SUCCESS.BLOG_UPLOAD(result));
    } catch (error) {
      console.trace(error);
      res
        .status(error?.status || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
        .send(error);
    }
  });




//Post blog to database
blogRouter.post(
  "/",
  blogDataValidator.createBlog,
  async (req, res) => {
    try {
      const result = await blogDataController.createBlog({
        title: req.body.title,
        image: req.body.image,
        content: req.body.content,
      });
      res
        .status(HTTP_STATUS_CODE.OK)
        .send(MESSAGES.SUCCESS.BLOG_UPLOAD(result));

    } catch (error) {
      res
        .status(error?.status || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
        .send(errUSER_REGISTRATIONor);
    }
  }
);


//update or edit blog
blogRouter.patch("/", async (req, res) => {
  try {
    res.send("patch BLOGS");
  } catch (error) {
    res
      .status(error?.status || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
      .send(error);
  }
});


//delete blog
blogRouter.delete("/:id", async (req, res) => {
  try {
    const blogID= req.params.id;
    await blogDataController.deleteBlog(blogID);
    res.status(HTTP_STATUS_CODE.OK)

  } catch (error) {
    res
      .status(error?.status || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
      .send(error);
  }
});

export default blogRouter;
