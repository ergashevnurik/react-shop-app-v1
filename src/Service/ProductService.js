import axios from 'axios'

const PRODUCT_BASE_API = "http://localhost:9999/api/v1/products";

class ProductService {
    getAllProducts() {
        return axios.get(PRODUCT_BASE_API);
    }
}

export default new ProductService() 