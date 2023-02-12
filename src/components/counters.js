import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:4},
            {id:2,value:4},
            {id:3,value:4},
            {id:4,value:4},
        ]
     } 
    handleDelete = (id)=>{
        console.log("called",id);
        const counters = this.state.counters.filter((c)=>(c.id!==id));
        this.setState({counters})
    }
    render() { 
        return (<div>
            {this.state.counters.map(counter=>(
            <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}></Counter>))}
        </div>);
    }
}
 
export default Counters;