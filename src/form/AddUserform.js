import { useState } from "react";

 const AddUserForm = (props)=>{
    const initialFormState = {id:null,name:'',username:'',number:'',email:''}
    const [user,setUser] =  useState(initialFormState);
    // const [errors,setErrors]=useState({})

    const handleInputChange = (event)=>{
       const {name,value} = event.target
       setUser({...user,[name]:value})
    }
   
  
    
    return (
    <form onSubmit={
        event => {
            event.preventDefault();
            if(!user.name||!user.username) return;
            props.addUser(user);
            setUser(initialFormState);
        }
    }>
        <label>Name</label>
        <input type="text" onChange={handleInputChange} name="name" value={user.name} />
        
        <label>Username</label>
        <input type="text" onChange={handleInputChange} name="username" value={user.username} />
        {/* {errors.username && <p>{errors.username}</p>} */}
        <label>mobile no</label>
        <input type="number" onChange={handleInputChange} name="number" value={user.number} />
        <label>email</label>
        <input type="email" onChange={handleInputChange} name="email" value={user.email} />
        <button type="submit">Add new user</button>

      </form>
    )
 }

export default AddUserForm;

// const Validate=()=>{
//     let errors={}
//     if(!user.username.trim()){
//         errors.username="username required"
//     }
//     if(!user.email.trim()){
//         errors.email="email required"
//     }
//     else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(user.email)){
//         errors.email="Email address is invalid"
//     }
//     if(!user.password.trim()){
//         errors.password="password required"
//     }
//     else if(user.password.length<6){
//         errors.password="password needs to be six are more";
//     }
//     if(!user.name.trim()){
//         errors.name="name required"
//     }
//     return errors;
// }