import { combineReducers } from 'redux';

import auth from './auth/reducer';
import category from './admin/category/reducer';
import product from './admin/product/reducer';

import search from './admin/shared/search/reducer';

import cartProducts from './storefront/cartProducts/reducer';

export default combineReducers({
    auth,
    category,
    product,
    search,
    cartProducts
});