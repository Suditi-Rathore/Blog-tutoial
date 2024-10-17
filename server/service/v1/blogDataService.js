import { BlogDataModel } from "../../models/index.js";
import { CONSTANTS } from "../../constants/index.js";

class BlogDataService {
  async list(query = {}, page = 1, limit = Number.MAX_SAFE_INTEGER) {
    try {
      const data = await BlogDataModel.aggregate([
        {
          $match: {
            ...query,
            status: CONSTANTS.STATUS.ACTIVE,
          },
        },
        {
          $sort: {
            createdAt: -1,
          },
        },
        {
          $project: {
            blogID: 1,
            image: 1,
            title: 1,
            content: 1,
            createdAt: 1,
            _id: 0
          },
        },
        {
          $skip: (page - 1) * limit,
        },
        {
          $limit: limit,
        },
      ]);

      const count = (
        await BlogDataModel.aggregate([
          {
            $match: {
              ...query,
            },
          },
        ])
      ).length;

      return { data, count };
    } catch (error) {
      throw error;
    }
  }
  async find(blogID) {
    try {
      return BlogDataModel.findOne({ blogID });
    } catch (error) {
      throw error;
    }
  }
  async save(blog) {
    try {
      return BlogDataModel.create(blog);
    } catch (error) {
      throw error;
    }
  }
  async update(blogID, blog) {
    try {
      return BlogDataModel.updateMany({ blogID }, blog);
    } catch (error) {
      throw error;
    }
  }
  async delete(blogID) {
    try {
      return BlogDataModel.deleteMany({ blogID });
    } catch (error) {
      throw error;
    }
  }
}

export default new BlogDataService();
