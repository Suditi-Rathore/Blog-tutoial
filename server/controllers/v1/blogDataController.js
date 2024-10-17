import { blogDataService } from "../../service/index.js";
import { MESSAGES } from "../../constants/index.js";

class BlogDataController {
  async createBlog(payload) {
    try {
      const blogID = crypto.randomUUID();
      const savedUser = await blogDataService.save({ ...payload, blogID });

      return {
        blogID: savedUser._id.toString(),
        title: savedUser.title,
        image: savedUser.image,
        content: savedUser.content,
      };
    } catch (error) {
      throw error;
    }
  }

  async getBlog(){
    try {
        const users = await blogDataService.list({});
        const value = users.data;

        return value
        
    } catch (error) {
        throw error
        
    }

  }

  async findBlog(payload){
    try {
        const result = await blogDataService.find(payload);
        return result
        
    } catch (error) {
        throw error
        
    }

  }


  async deleteBlog(payload){
    try {
        const users = await blogDataService.delete(payload);
        return users;

        
    } catch (error) {
        throw error
        
    }

  }
}

export default new BlogDataController();
