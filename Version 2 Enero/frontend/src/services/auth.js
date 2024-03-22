import axios from "axios"
const WEBURL = process.env.REACT_APP_API_URL


export const checkToken = async(token) => {
    try{
        const response = await axios.get(`${WEBURL}fb/usuario`,{
            headers: {
              token: token,
            },
          })
        return response
    }    catch(error){
        console.log(error)
    }
}

export const getTokenData = async(token) => {
  try{
    const response = await axios.get(`${WEBURL}fb/auth`,{
      headers:{
        token: token,
      },
    })
    return response
      }
  catch(error){
    console.log(error)
  }
}

export const loginApp = async(user) => {
  try{
      const response = await axios.post(`${WEBURL}fb/usuario/login`,user,{
          headers: {
            'Content-Type': 'application/json'
          }
      })
      return response
  }
  catch(error){
      return(error);
  }
}

export const registerApp = async(user) => {
  try{
    const response = await axios.post(`${WEBURL}fb/usuario/register`,user, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response
  }
  catch(error){
      console.log(error)
  }
}
