import React , { Component } from 'react'
import { Button } from '@material-ui/core'
import './App1.css';

class Counter extends Component{
    state = {
        value:0
    }
    /*constructor()
    {
        super();
        this.increase = this.increase.bind(this);
    }*/
    render()
    {
        console.log(this.props)
        return(
            <div className='avatar'>
                <h2>counter-{this.props.id}</h2>
                <Button className='btn234' color="secondary" onClick={()=>this.decrease(1)} variant="contained">Decrease</Button>
                <h1>{this.formatCount()}</h1>
                <Button className='btn234' color="secondary" onClick={()=>this.increase(1)} variant="contained">Increase</Button>
                <Button className='btn2341' color="primary" onClick={()=>this.props.onDelete(this.props.id)} variant="contained">❌❌delete❌❌</Button>
            </div>
        )
    }
    //getList()
    //{
      //  if(this.state.tags.length===0) return (<p>IMPOSSIBLE</p>);
        //else return (<ul>{this.state.tags.map(tag=><li>{tag}</li>)}</ul>);
    //}
    formatCount(){
        const x = <h1>zero</h1>;
        return (this.state.value===0)?(x):(this.state.value);
    }
    increase = (k)=>{
        this.setState({value:this.state.value+k});
    }
    decrease = (k)=>{
        this.setState({value:this.state.value-k});
    }
    //increase = ()=>
    //{
      //  console.log("clicked",this);
    //}
}


export default Counter;