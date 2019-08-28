import http from "./http-service";

class BlogsService {
  async getBlogs() {
    const { data } = await http.get("blogs");
    return data;
  }
  async getSingleBlog(id) {
    const { data } = await http.get(`blogs/${id}`);
    return data;
  }
  async createBlog({ title, content, image_url }) {
    const response = await http.post("blogs", { title, content, image_url });
    return response;
  }
  async deleteSingleBlog(id) {
    const response = await http.delete(`blogs/${id}`);
    return response;
  }
  async editBlog(id, { title, image_url, content }) {
    const response = await http.put(`blogs/${id}`, {
      title,
      image_url,
      content
    });
    return response;
  }
}

const blogsService = new BlogsService();

export default blogsService;
