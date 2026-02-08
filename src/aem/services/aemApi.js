import api from "../../services/api"

export const fetchProducts = async () =>{
    const response = await api.get("/products");
    return response.data;
}

export const fetchProductById = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
}