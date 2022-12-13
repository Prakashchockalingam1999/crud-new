const UserTable = (props)=>(
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">mobile no</th>
        <th scope="col">Email ID</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody >
        {props.users.length>0?(
            props.users.map((user)=>(
                <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.number}</td>
                        <td>{user.email}</td>
                        <td>
                        <button onClick={()=>{
                            props.editRow(user)
                        }} className="button muted-button">Edit</button>
                        <button onClick={()=>props.deleteUser(user.id)} className="button muted-button">Delete</button>
                        </td>
                    </tr>

            ))
            ):(
                <tr>
                    <td colSpan={5} >No users</td>
                </tr>
            )
        }
      
    </tbody>
  </table>
);

export default UserTable;