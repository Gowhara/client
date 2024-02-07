
const apiUrl = 'https://fakestoreapi.com';

export const fetchAllProducts = () => {
  return fetch(`${apiUrl}/products/?limit=4`).then(response => response.json());
};

export const fetchProductDetail = (productId) => {
  return fetch(`${apiUrl}/products/${productId}`).then(response => response.json());
};

export const fetchAllCategories = () => {
  return fetch(`${apiUrl}/products/categories`).then(response => response.json());
};

export const fetchProductsByCategory = (category) => {
  return fetch(`${apiUrl}/products/category/${category}`).then(response => response.json());
};

export const fetchProductsinCart = () => {
  return fetch(`${apiUrl}/carts`).then(response => response.json());
};

