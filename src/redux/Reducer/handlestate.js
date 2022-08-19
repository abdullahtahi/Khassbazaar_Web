const initialState = {currentuser:[]}

export const handlereducer= (state = initialState, action) => {
  switch (action.type) {
  case "STATE__LOADING":
    return { 
        success:false,
        currentuser:[]
     }
     case "STATE__SUCCESS":
    return { 
        success:true,
        currentuser:action.payload
     }
  default:
    return state
  }
  
}
