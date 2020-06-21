import React from 'react'
import {connect} from 'react-redux'

const Counter = (props) => {
    const increment =()=>{
        props.dispatch({type:"INCREMENT"})
        console.log(props)

    }
    const decrement =()=>{
        props.dispatch({type:"DECREMENT"})
    }
    return (
        <div style={{backgroundColor:"grey"}} className="position">
            <div><h1>Press (+) to Increment and (-) to Decrement</h1></div>
            <div>
            <button style={{height:"50px", width:"50px"}} className="btn btn-success mt-5" onClick={()=>increment()}>+</button>
            <div style={{color:"red"}} className="pt-2 pb-2"><h2>{props.count}</h2></div>
            <button style={{height:"50px", width:"50px"}} className="btn btn-success mb-5" onClick={()=>decrement()}>-</button>
            </div>
        </div>
    )
}
    const mapStateToProps=(state)=>{
         return{  count:state.count}
}

export default connect (mapStateToProps)(Counter)