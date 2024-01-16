import axios from 'axios'
import base_url from './constant.js'

export const addUser=async(data)=>{
    const headers = {
        'Content-Type':'application/json'
    }
    
    try {
        await axios.post(`${base_url}/api/add`,data,{headers})
    } catch (error) {
        console.log("Error while addUser api",error)
    }
}

export const getUser=async()=>{
    const headers = {
        'Content-Type':'application/json'
    }

    try {
       const response = await axios.get(`${base_url}/api/users`,{headers})
       return response.data
    } catch (error) {
        console.log("Error while addUser api",error)
    }
}