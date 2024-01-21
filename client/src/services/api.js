import axios from 'axios'
import base_url from './constant.js'

export const addUser=async(data)=>{
    const headers = {
        'Content-Type':'application/json'
    }
    
    try {
        await axios.post(`${base_url}/api/add`,data,{headers})
    } catch (error) {
        console.log("Error while calling addUser api",error)
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
        console.log("Error while calling getUser api",error)
    }
}

export const setConversation=async(data)=>{
    const headers = {
        'Content-Type':'application/json'
    }

    try {
       const response = await axios.post(`${base_url}/api/conversation/add`,data,{headers})
       return response.data
    } catch (error) {
        console.log("Error while calling setConversation api",error)
    }
}

export const getConversation=async(data)=>{
    const headers = {
        'Content-Type':'application/json'
    }

    try {
       const response = await axios.post(`${base_url}/api/conversation`,data,{headers})
       return response.data
    } catch (error) {
        console.log("Error while calling getConversation api",error)
    }
}

export const newMessage=async(data)=>{
    const headers = {
        'Content-Type':'application/json'
    }

    try {
       const response = await axios.post(`${base_url}/api/add/message`,data,{headers})
       return response.data
    } catch (error) {
        console.log("Error while calling newMessage api",error)
    }
}

export const getMessages=async(id)=>{
    const headers = {
        'Content-Type':'application/json'
    }

    try {
       const response = await axios.get(`${base_url}/api/messages/${id}`,{headers})
       return response.data
    } catch (error) {
        console.log("Error while calling getMessages api",error)
    }
}

export const uploadFile=async(data)=>{
    const headers = {
        'Content-Type':'multipart/form-data'
    }
console.log(data)
    try {
       const response = await axios.post(`${base_url}/api/file/upload`,data,{headers})
       return response.data
    } catch (error) {
        console.log("Error while calling uploadFile api",error)
    }
}