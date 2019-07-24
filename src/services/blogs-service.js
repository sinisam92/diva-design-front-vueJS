import http from "./http-service";

class BlogsService {
  getBlogs() {
    return http.get("blogs").then(({ data }) => data);
  }
  getSingleBlog(id) {
    return http.get(`blogs/${id}`).then(({ data }) => data);
  }
  async createBlog({ title,content, image_url }) {
    const response = await http.post('blogs', { title, content, image_url });
    return response;
     
  }
}

const blogsService = new BlogsService();

export default blogsService;
