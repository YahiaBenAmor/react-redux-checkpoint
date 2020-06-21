const initState={
    count:0
  }
  
  
const Reducer = (state = initState , action) => {

    if (action.type==='INCREMENT') return {count:state.count+1}
    if (action.type==='DECREMENT') return {count:state.count-1}

    return state
}

export default Reducer