import api from './api';
import Product from '../dtos/Product';
import Meta from '../dtos/Meta';

interface IProductsIndexData {
  products: Product[];
  meta: Meta;
}

const ProductsService = {
  index: (url: string) => {
    return api.get(url).then(response => response.data);
  },

  create: (product: FormData) => {
    return api.post('/admin/v1/products', product);
  },

  update: (product: FormData) => {
    return api.put(
      `/admin/v1/products/${product.get('product[id]')}`,
      product
    );
  },

  delete: (id: number) => {
    return api.delete(`/admin/v1/products/${id}`);
  }
}

export default ProductsService;