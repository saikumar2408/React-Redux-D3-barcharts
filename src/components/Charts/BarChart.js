import React,{Component} from 'react';
import * as d3 from 'd3'
import {connect} from 'react-redux'
class BarChart extends Component {
    state={
        data:[],
        names:[]
    }
    componentWillMount() {
       let data=this.props.users.map(user=>{
            return {name:user.name,age:Number(user.age)-Number(user.experience),experience:Number(user.experience)};
        })
        this.setState({data:data})
        console.log(this.state.ages)
        let names=this.props.users.map(user=>{
            return user.name
        })
        this.setState({names:names})
        console.log(this.state.names)
    }
    componentDidMount(){
     this.drawChart(this.state.data,this.state.names)
    }  
    drawChart(data)
    {
    var svg = d3.select("svg"),
    margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
  var x = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.05)
    .align(0.1);

  var y = d3.scaleLinear()
    .rangeRound([height, 0]);

  var z = d3.scaleOrdinal()
    .range(["#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
    var keys = [];
  for (let key in data[0]){
    if (key !== "name")
      keys.push(key);
      }
  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
    console.log(data)
   });

  data.sort(function(a, b) {
    return b.age - a.age;
  });
  x.domain(data.map(function(d) {
    return d.name;
  }));
  y.domain([0, d3.max(data, function(d) {
    return d.total;
  })]).nice();
  z.domain(keys);
  
  g.append("g")
    .selectAll("g")
    .data(d3.stack().keys(keys)(data))
    .enter().append("g")
    .attr("fill", function(d) {
      return z(d.key);
    })
    .selectAll("rect")
    .data(function(d) {
      console.log(d)
      return d;
    })
    .enter().append("rect")
    .attr("x", function(d) {
      return x(d.data.name);
    })
    .attr("y", function(d) {
      console.log(d)
      return y(d[1]);
    })
    .attr("height", function(d) {
      return y(d[0]) - y(d[1]);
    })
    .attr("width", x.bandwidth());

  g.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  g.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("x", 2)
    .attr("y",0.5)
    .attr("dy", "0.32em")
    .attr("fill", "#000")
    .attr("font-weight", "bold")
    .attr("text-anchor", "start")
    .text("Ages");

  var legend = g.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "end")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
    .attr("transform", function(d, i) {
      return "translate(0," + i * 20 + ")";
    });

  legend.append("rect")
    .attr("x", width - 19)
    .attr("width", 19)
    .attr("height", 19)
    .attr("fill", z);
    
  legend.append("text")
    .attr("x", width - 24)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(function(d) {
      return d;
    });
  }
    render(){
      return   <div id='layout'>
      <div className='container'>
        <svg width='600' height='500'/>
      </div>
    </div>
    }
  }

   const mapStateToProps = state=>{
     return {
       users:state.allUsers
     };
}
export default connect(mapStateToProps)(BarChart);

//     drawChart(ages,names) {
//       const data = ages;
//       const name = names;
//       var h=310;
//       var w=450;

//       const svg = d3.select("#chart")
//       .append("svg")
//       .attr("width",w)
//       .attr("height",h)
//       .style("margin-left", 10);

      
      
//       svg.selectAll("rect")
//       .data(data)
//       .enter()
//       .append("rect")
//       .attr("x", (d, i) => i * 50)
//       .attr("y", (d, i) => h - d * 10)
//       .attr("width", 40)
//       .attr("height", (d, i) => d * 10)
//       .attr("fill", "green")


//       svg.selectAll("text")
//       .data(name)
//       .enter()
//       .append("text")
//       .text((d) => d)
//       .attr("x", (d, i) => i * 50)
//       .attr("y", (d, i) => h)

// } 