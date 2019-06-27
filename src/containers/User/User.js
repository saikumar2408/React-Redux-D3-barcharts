import React, {Component} from 'react';
import './User.css'
import {connect} from 'react-redux'
//import * as actionTypes from '../../store/actions/actionTypes'
import actionCreaters from '../../store/actions';
import UserInfo from '../../components/UserInfo/UserInfo'

class User extends Component{
    state={
        user:{id:'',name:'saikumar',type:'user',email:'sai@1232',
        password:'12345',age:'',experience:'',mobileno:''},
        edit:false,
        index:null
    }
    componentDidMount(){
     // let users=JSON.parse(localStorage.getItem('userData'));
      let users=this.props.users;
      console.log(this.props)
      this.setState({user:users[this.props.location.state.index],index:this.props.location.state.index}) 
    }
   inputChangeHandler=(event,identifier)=>{
      let updatedUser={...this.state.user}
          updatedUser[identifier]=event.target.value;
          this.setState({user:updatedUser})
    }
    onSubmit=(user,index)=>{
        this.props.submitHanlder(this.state,index);
        if(this.state.user.type==='admin')
        {
        this.props.history.push('/Admin',{user:user})
        }
    }
render(){
return (
    <div>
     <UserInfo user={this.state.user}
                changed={(event,identifier)=>this.inputChangeHandler(event,identifier)}
                index={this.state.index}
                submitted={(user,index)=>this.onSubmit(user,index)}
                edit={this.props.edit}
                edited={(edit)=>this.props.editHandler(edit)}
     /> 
    </div>
)
}
}
const mapStateToProps = state=>{
    return {
      user:state.user,
      edit:state.edit,
      users:state.allUsers
    };
  }
  const mapDispatchToProps=dispatch=>{
    return{
        submitHanlder:(data,index)=>dispatch(actionCreaters.edit(data,index)),
        editHandler:(data)=>dispatch(actionCreaters.editFlag(data))
  }
  }

export default connect(mapStateToProps,mapDispatchToProps)(User);


// let editInfo=(
//     <div className="User">
//     <h1>Update User Info</h1>
//     <input className='InputElement' type="text" value={this.state.user.name} onChange={(event)=>this.inputChangeHandler(event,'name')}/>
//     <input className='InputElement' type="email" value={this.state.user.email} onChange={(event) =>this.inputChangeHandler(event,'email')} />
//     <select className='InputElement' value={this.state.type} onChange={(event) =>this.inputChangeHandler(event,'type')}>
//         <option value='admin'>Admin</option>
//         <option value='user'>User</option>
//     </select>
//     <input className='InputElement' type="password" value={this.state.user.password}  onChange={(event)  =>this.inputChangeHandler(event,'password')} />
//     <button className='ButtonElement' onClick={this.onSubmit}>Submit</button>
// </div>
// )
// let actualInfo=(
// <div className='User'> 
// <h1>User Info</h1>  
// <p><strong>Name :</strong> {this.state.user.name}</p>
// <p><strong>Type :</strong> {this.state.user.type}</p>
// <p><strong>Emial :</strong> {this.state.user.email}</p>
// <p><button onClick={()=>this.props.editHandler(this.props.edit)}>Edit</button></p>
// </div>
// )
// let newInfo=this.props.edit?editInfo:actualInfo;
//     return (
//         <div>      
//          {newInfo} 
//          </div>        
//  )