import React,{Component} from 'react'
import {connect} from 'react-redux'
import {BarChart} from 'react-d3-components'
class BarChartContainer extends Component{
    state={
        ages:[],
        experience:[]
    }
    componentWillMount(){
     let ages=this.props.users.map(user=>{
       return {"x":user.name,"y":Number(user.age)-Number(user.experience),"y0":0}
     })
     let experience=this.props.users.map(user=>{
        return {"x":user.name,"y":Number(user.experience),"y0":0}
      })
     this.setState({ages:ages,experience:experience},()=>{
         console.log(this.state)
     })
    }
    render()
    {
        // let data = [
        //     {
        //         label: "somethingA",
        //         values: [
        //           { x: "SomethingA", y: 5 },
        //           { x: "SomethingB", y: 10 },
        //           { x: "SomethingC", y: 3 }
        //         ]
        //       },
        //     {
        //         label: "somethingB",
        //         values: [
        //           { x: "SomethingA", y: 5 },
        //           { x: "SomethingB", y: 10 },
        //           { x: "SomethingC", y: 3 }
        //         ]
        //       }
        //   ];
        //  console.log(data)
          let data2 = [
            {
              label: "ages",
              values: this.state.ages
            },
                {
                  label: "experience",
                  values: this.state.experience
                }
        ]
            console.log(data2)
        return (<div><BarChart data={data2}
                        width={400}
                        height={400}
                        margin={{ top: 10, bottom: 50, left: 50, right: 10 }}/>
                
                <li style={{ color:'#1f77b4'}}>age excluding experience</li>
                <li style={{ color:'#aec7e8'}}>experience</li>
                </div> )

    }
}
const mapStateToProps = state=>{
    return {
      users:state.allUsers
    };
  }
  export default connect(mapStateToProps)(BarChartContainer);