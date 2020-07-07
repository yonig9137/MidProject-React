import React,{useContext} from 'react'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'

import UsersContext from '../Services/UsersContext'
import  './NewUser.css'

function NewUser() {
    
    const {register,handleSubmit,errors} =useForm(); 
    const addUser=useContext(UsersContext).AddUser     
    
 

    return (
        <figure className="NewUser">
            <figcaption>Add New User</figcaption>
            <div className="border-black">
                <form onSubmit={handleSubmit(data=>addUser(data))}>
                    <label>Name:</label><input type="text" name="name" ref={register({required:"name is required!"})} />
                    <span className="err">{errors.name && errors.name.message}</span><br />
                
                    <label>Enail:</label><input type="text" name="email" ref={register({required:"email is required!",pattern:{
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  message: "invalid email address"}})} />
                     <span className="err">{errors.email && errors.email.message}</span> <br />                                   
                    <div className="flow-right">
                        <button type="submit">Add</button>
                        <Link className="button" to="/">Cancel</Link>    
                    </div>
                    
                </form>
            </div>
        </figure>
    )
}

export default NewUser
