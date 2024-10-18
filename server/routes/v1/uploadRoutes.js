import express from "express";
import { uploadController } from "../../controllers/index.js";
import { HTTP_STATUS_CODE, MESSAGES } from "../../constants/index.js";
const uploadRouter = express.Router();

uploadRouter.post(
  "/",
  async (req, res) => {
    try {
      const result = await uploadController.upload(req.files);
      res
        .status(HTTP_STATUS_CODE.OK)
        .send(MESSAGES.SUCCESS.FILE_UPLOADED_SUCCESSFULLY({ url: result }));
    } catch (error) {
      res
        .status(error?.status || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
        .send(error);
    }
  },

  
);

uploadRouter.get("/", (req, res) => {
    res.send("uploading...................");
  });

export default uploadRouter;
