import { useEffect, useState } from "react"

const EditUserForm = (props)=>{
   const [user,setUser] = useState(props.currentUser)

   useEffect(()=>{
        setUser(props.currentUser)
   },[props])

   const handleInputChange = (event)=>{
    const {name,value} = event.target

    setUser({...user,[name]:value})
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if(!user.name||!user.username) return;
                props.updateUser(user.id,user);
            }
        }>
            <label>Name</label>
            <input type="text" onChange={handleInputChange} name="name" value={user.name} />
            <label>Username</label>
            <input type="text" onChange={handleInputChange} name="username" value={user.username} />
            <label>mobile no</label>
            <input type="number" onChange={handleInputChange} name="number" value={user.number} />
            <label>email</label>
            <input type="email" onChange={handleInputChange} name="email" value={user.email} />
            <button>Update user</button>
            <button className="button muted-button" onClick={()=>{props.setEditing(false)
            }}>Cancel</button>
          </form>
    )
}

export default EditUserForm;