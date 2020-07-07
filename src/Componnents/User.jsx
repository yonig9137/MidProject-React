import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import './User.css'

export default function User(props) {

    const [hide, setHide] = useState(true)

    const {register,handleSubmit,errors} =useForm({
        defaultValues:props.user
    });      
 
    const customSubmit = (data) =>
    {
        
        console.log(data)
    }

    const existsUncomplited=()=>{
        return props.user.todos.some(todo=> !todo.completed)
    }
    return (
        <div className={`User ${existsUncomplited()?"ExistsUncomplited":""}`} data-id={props.user.id}>
            <form onSubmit={handleSubmit(customSubmit)}>
                <label>User ID:</label> <span>{props.user.id}</span><br />
                <label>Name:</label><input type="text" name="name" ref={register} /><br />
                <label>Enail:</label><input type="text" name="email" ref={register} /><br />

                <div className={hide?"user-footer":""}>
                    <button className="btn-other" onClick={()=>setHide(!hide)}>Other Data</button>
                    <div className={`other-data ${hide?"hide":""}`}>
                        <label>Street:</label><input type="text" name="address.street" ref={register}/><br />
                        <label>City:</label><input type="text" name="address.city" ref={register}/><br />
                        <label>Zip Cod:</label><input type="text" name="address.zipcode" ref={register}/><br />
                    </div>
                    <div className="flow-right">
                        <button type="submit">Update</button>
                        <button >Delete</button>
                    </div>
                </div>
            
            </form>
        </div>
    )
}
