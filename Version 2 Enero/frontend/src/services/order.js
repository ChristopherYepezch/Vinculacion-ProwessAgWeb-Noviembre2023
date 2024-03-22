import axios from "axios"
const WEBURL = process.env.REACT_APP_API_URL

export const createOrder = async (data) => {
    const response = await axios.post(`${WEBURL}fb/pedido/createOrder`, data , {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}