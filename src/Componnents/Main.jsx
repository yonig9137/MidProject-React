import React,{useState} from 'react'

import {UserProvider} from '../Services/UsersContext'
import UserService from '../Services/UserService'
import Users from './Users'
import Detailes from './Detailes'
import { useEffect } from 'react'


import  './Main.css'

export default function Main() {
    
    const [users,setUsers]=useState([])   
    const addUser=(user)=>{
        setUsers([...users,user])
        console.log('addUser')
    }
    const updateUser=(user)=>{
        console.log('updateUser')
    }
    const deleteUser=(id)=>{
        console.log('deleteUser')
    }
    const changeSelectedUser=(id)=>{
        console.log('changeSelectedUser')
    }
    const addTodo=(todo)=>{
        console.log('addTodo')
    }
    const markComplited=(todoId)=>{
        console.log('markComplited')
    }
    const addPost=(post)=>{
        console.log('addPost')
    }
    
    
    const contextValue={
        'users':users,
        'addUser':addUser,
        'updateUser':updateUser,
        'deleteUser':deleteUser,
        'changeSelectedUser':changeSelectedUser,
        'addTodo':addTodo,
        'markComplited':markComplited,
        'addPost':addPost
    }

    useEffect(()=>{
        console.log("main-change user")
        UserService.GetAllUsers().then(data=> setUsers(data))
    },[])
   

    return (
        <UserProvider value={contextValue}>
            <div className="Main">
                 <Users />
                 <Detailes />
            </div>
        </UserProvider>
    )
}
