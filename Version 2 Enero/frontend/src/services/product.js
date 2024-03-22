import axios from "axios"
const WEBURL = process.env.REACT_APP_API_URL

export const getProductsFromApi = async (token) => {
    const response = await axios.get(`${WEBURL}fb/producto/get`, {
        headers: {
            token: token,
        },
    });
    return response;
}

export const deleteProduct = async (productId, token) => {
    const response = await axios.delete(`${WEBURL}fb/producto/delete/${productId}`, {
        headers: {
            token: token,
        },
    });
    return response;
}

export const postProduct = async (product, token) => {
    const response = await axios.post(`${WEBURL}fb/producto/post`, product, {
        headers: {
            token: token,
        },
    });
    return response;
}