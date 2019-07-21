import axios from "axios";
// import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";

/**
 * INITIAL STATE
 */
const initialState = {
  products: [],
  selectedProduct: {}
};

/**
 * ACTION CREATORS
 */
const getProducts = products => ({ type: GET_PRODUCTS, products });
const getSelectedProduct = product => ({ type: GET_ONE_PRODUCT, product });

/**
 * THUNK CREATORS
 */

//get all products thunk
export const fetchProducts = category => async dispatch => {
  try {
    const cat = category;
    const res = await axios.get(`/api/products/${cat}`);
    const data = res.data;
    const action = getProducts(data);
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};

export const fetchOneProduct = productId => async dispatch => {
  try {
    const res = await axios.get(`/api/products/category/${productId}`);
    const data = res.data;
    const action = getSelectedProduct(data);
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products };
    case GET_ONE_PRODUCT: {
      const newState = { ...state, selectedProduct: action.product };
      return newState;
    }
    default:
      return state;
  }
}
