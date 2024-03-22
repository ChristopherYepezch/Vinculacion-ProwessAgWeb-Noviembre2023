import axios from "axios"
const WEBURL = process.env.REACT_APP_API_URL

export const getSellers = async(token) => {
    try {
        const response = await axios.get(`${WEBURL}fb/vendedor/getSeller`, {
          headers: {
            token: token,
          },
        });
        return response
      } catch (error) {
        console.error('Error al cargar las categorías', error);
      }

}