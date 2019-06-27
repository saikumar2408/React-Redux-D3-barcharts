import React from 'react'
import './UserList.css'

const userList=(props)=>{
  //  console.log(this.props.location.state.user)
        return (
     <div className='UserList' key={props.index}>      
     <p><strong>Name :</strong> {props.user.name}</p>
     <p><strong>Emial :</strong> {props.user.email}</p>
     <p><strong>Type :</strong> {props.user.type}</p>
     <p><button onClick={()=>props.clicked(props.index)}>Delete</button></p>
     </div>
     )
}

export default userList;