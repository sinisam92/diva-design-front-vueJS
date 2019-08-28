import http from "./http-service";

class ShopService {
  async getShop() {
    const { data } = await http.get("shop");
    return data;
  }
  async addProduct({ title, description, price, currency, image_url, type }) {
    const response = await http.post("shop", {
      title,
      description,
      price,
      currency,
      image_url,
      type
    });
    return response;
  }
  async getSingleProduct(id) {
    const { data } = await http.get(`shop/${id}`);
    return data;
  }
  async deleteSingleProduct(id) {
    const response = await http.delete(`shop/${id}`);
    return response;
  }
  async editProduct(
    id,
    { title, description, price, currency, image_url, type }
  ) {
    const response = await http.put(`shop/${id}`, {
      title,
      description,
      price,
      currency,
      image_url,
      type
    });
    return response;
  }
}

const shopService = new ShopService();

export default shopService;
