import http from './http-service';

class ShopService {

  getShop() {
		return http.get('shop').then(({data}) => data);
	}
	async addProduct({ title, description, price, image_url, type }) {
    const response = await http.post('shop', { title, description, price, image_url, type });
    return response;
	}
}

const shopService = new ShopService();

export default shopService;