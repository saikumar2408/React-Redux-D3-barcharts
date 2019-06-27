import React from 'react'
import './UserInfo.css'

const userInfo=(props)=>{
    let editInfo=(
        <div className="UserInfo">
        <h1>Update User Info</h1>
        <input className='InputElement' type="number" value={props.user.id} onChange={(event)=>props.changed(event,'id')}/>
        <input className='InputElement' type="text" value={props.user.name} onChange={(event)=>props.changed(event,'name')}/>
        <input className='InputElement' type="email" value={props.user.email} onChange={(event) =>props.changed(event,'email')} />
        <select className='InputElement' value={props.user.type} onChange={(event) =>props.changed(event,'type')}>
            <option value='admin'>Admin</option>
            <option value='user'>User</option>
        </select>
        <input className='InputElement' type="password" value={props.user.password}  onChange={(event)=>props.changed(event,'password')} />
        <input className='InputElement' type="number" value={props.user.age} onChange={(event)=>props.changed(event,'age')}/>
        <input className='InputElement' type="number" value={props.user.experience} onChange={(event)=>props.changed(event,'experience')}/>
        <input className='InputElement' type="number" value={props.user.mobileno} onChange={(event)=>props.changed(event,'mobileno')}/>
        <button className='ButtonElement' onClick={()=>props.submitted(props.user,props.index)}>Submit</button>
    </div>
    )
    let actualInfo=(
    <div className='UserInfo'> 
    <h1>User Info</h1>
   <p><strong>ID :</strong> {props.user.id}</p>  
   <p><strong>Name :</strong> {props.user.name}</p>
   <p><strong>Type :</strong> {props.user.type}</p>
   <p><strong>Emial :</strong> {props.user.email}</p>
   <p><strong>age :</strong> {props.user.age}</p>
   <p><strong>experience :</strong> {props.user.experience} years</p>
   <p><strong>mobileno :</strong> {props.user.mobileno}</p>
   <p><button onClick={()=>props.edited(props.edit)}>Edit</button></p>
   </div>
    )
    let newInfo=props.edit?editInfo:actualInfo;
        return (
            <div>      
             {newInfo} 
             </div>        
     )
}
export default userInfo