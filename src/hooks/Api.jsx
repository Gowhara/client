import { useEffect, useState } from "react";

/*const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;*/
// api.js
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

