import React,{useContext,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import UsersContext from '../Services/UsersContext'
import User from './User'
import './Users.css'

export default function Users() {
    
    const data=useContext(UsersContext).users
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
       
        setUsers(data)
    },[data])

    const getUsers=()=>{
        let _users=users
        if(search !=='') _users=_users.filter(u=>u.name.includes(search))
         return _users.map(user=><User key={user.id} user={user}  />)
    }
    return (
        <div className="Users">
            <div className="Users-header">
                <div><label>Search</label><input type="text" id="search" onChange={e=>setSearch(e.target.value)}/></div> 
                <Link to="/NewUser" className="button">Add</Link>
            </div>
            <div className="Users-data">
                {getUsers()}
            </div>
            
        </div>
    )
}
