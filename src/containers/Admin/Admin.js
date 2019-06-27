import React, {Component} from 'react';
import {connect} from 'react-redux'
import actionCreaters from '../../store/actions';
import UserList from '../../components/UserList/UserList'
import UserInfo from '../../components/UserInfo/UserInfo'
//import User from '../User/User'
import './Admin.css'
class Admin extends Component{
    state={
        user:{id:'',name:'saikumar',type:'user',email:'sai@1232',
        password:'12345',age:'',experience:'',mobileno:''},
        //users:JSON.parse(localStorage.getItem('userData'))
        users:[],
         }
    componentDidMount(){
    //   this.setState({users:JSON.parse(localStorage.getItem('userData')),user:this.props.location.state.user});
       // const dbUsers = JSON.parse(localStorage.getItem('userData'));
         const dbUsers = this.props.users;
        const loggedinUser = this.props.location.state.user;
        const currentUser = dbUsers.filter(data => data.email === loggedinUser.email)[0];
        this.setState({users:dbUsers,user:currentUser});
    }
    onDelete=(index)=>{
    this.props.deleteHandler(index)
   // this.setState({users:JSON.parse(localStorage.getItem('userData'))})
     this.setState({users:this.props.users})
    }
    // editHandler=(index)=>{
    //     this.props.history.push('/User',{index:index})
    // }
    inputChangeHandler=(event,identifier)=>{
        let updatedUser={...this.state.user}
            updatedUser[identifier]=event.target.value;
           this.setState({user:updatedUser})
      }
      onSubmit=(user,index)=>{
          this.props.submitHanlder(this.state,index);
          if(this.state.user.type==='user')
          {
          this.props.history.push('/User',{index:index})
          }
      }
render(){
   //  console.log(this.props.location.state.user)
    const currentUser=this.state.users.map((user,index)=>{
        if(user.email===this.props.location.state.user.email && user.password ===this.props.location.state.user.password)      
       {
       return  (<UserInfo user={this.state.user}
       changed={(event,identifier)=>this.inputChangeHandler(event,identifier)}
       submitted={(user,index)=>this.onSubmit(user,index)}
       edit={this.props.edit}
       edited={(edit)=>this.props.editHandler(edit)}
       index={index}
       />)
       }
       else{
           return null;
       }
    })
    const userList=this.state.users.map((user,index)=>{
        if(user.email!==this.props.location.state.user.email && user.password !==this.props.location.state.user.password)      
       {
       return (<UserList user={user}
                index={index}
                clicked={(index)=>this.onDelete(index)}/>)
     }else{
         return null;
     }
    })
    return(
        <div>
            {currentUser}
            {userList}
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
        deleteHandler:(index)=>dispatch(actionCreaters.delet(index)),
        submitHanlder:(data,index)=>dispatch(actionCreaters.edit(data,index)),
        editHandler:(data)=>dispatch(actionCreaters.editFlag(data))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Admin);



// console.log(this.props.location.state.user)
// const userList=this.state.users.map((user,index)=>{
//     if(user.email===this.props.location.state.user.email && user.password===this.props.location.state.user.password){
//       console.log('upadted admin')
//    return ( <div className='Admin' key={index}>      
//         <p><strong>Name :</strong> {user.name}</p>
//         <p><strong>Type :</strong> {user.type}</p>
//         <p><strong>Emial :</strong> {user.email}</p>
//         <p><button onClick={()=>this.editHandler(index)}>Edit</button></p>
//         </div>
//     ) 
//     }
//     else{
//     return (
//  <div className='Admin' key={index}>      
//  <p><strong>Name :</strong> {user.name}</p>
//  <p><strong>Type :</strong> {user.type}</p>
//  <p><strong>Emial :</strong> {user.email}</p>
//  <p><button onClick={()=>this.onDelete(index)}>Delete</button></p>
//  </div> 
//  )
//  }
// }) 
// return (
//     <div>
//         {userList}
//     </div>
// )