import axios from "axios"
const WEBURL = process.env.REACT_APP_API_URL

export const getUsers = async(token) => {
    try{
        const response = await axios.get(`${WEBURL}fb/usuario/getall`,{
            headers: {
              token: token,
            },
          })
        return response
    }    catch(error){
        console.log(error)
    }
}

export const postUser = async(token,user) => {
    try{
        const response = await axios.post(`${WEBURL}fb/usuario/post`,user,{
            headers: {
              token: token,
            },
            
          })
        return response
    }    catch(error){
        console.log(error)
    }
}

export const updateUser = async(token,user) => {
  try{
      const response = await axios.post(`${WEBURL}fb/usuario/post`,user,{
          headers: {
            token: token,
          },
          
        })
      return response
  }    catch(error){
      console.log(error)
  }
}

export const deleteUser = async(token,id) => {
  try{
      const response = await axios.post(`${WEBURL}fb/usuario/delete/${id}`,{
          headers: {
            token: token,
          },
          
        })
      return response
  }    catch(error){
      console.log(error)
  }
}
