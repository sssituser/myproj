import React, { useState } from "react";

function Users(){
 let[users,setUsers]=useState([])
 function ShowData(){
    setUsers(
        [
            {
                userid:111,
                username:"sudarshan",
                email:"sudarshan@gmail.com"
            },
            {
                userid:112,
                username:"Durga Parasad",
                email:"durga@gmail.com"
            },
            {
                userid:113,
                username:"swathi",
                email:"swthi@gmail.com"
            }
        ]
    )
 }
    return(
        <React.Fragment>
            <div className="container text-center">
                <p className="display-4">Users Information</p>
                {
                    users.length>0 ? 
                    <table>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>User Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user=>{
                                    return(
                                        <tr>
                                            <td>{user.userid}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    :
                    <h1 className="text-danger text-center">Records not found</h1>
                }
                <button className="btn btn-sm btn-primary" onClick={ShowData}>ShowData</button>

            </div>
        </React.Fragment>
    )

}
export default Users;