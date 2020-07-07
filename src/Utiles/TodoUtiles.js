import axios from 'axios'

const url="https://jsonplaceholder.typicode.com/todos"

async function getAll(){
    let req=await  axios.get(url)
    return req.data
}

async function getById(id){
    let req=await  axios.get(`${url}/${id}`)
    return req.data
}

async function add(user){
    let req=await  axios.post(url,user)
    return req.data
}

async function update(id,user){
    let req=await  axios.put(`${url}/${id}`,user)
    return req.data
}

async function remove(id){
    let req=await  axios.delete(`${url}/${id}`)
    return req.data
}

export default {getAll,getById,add,update,remove}

