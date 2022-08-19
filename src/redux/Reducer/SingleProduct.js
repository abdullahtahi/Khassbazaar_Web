const initialState = {singleproduct:[]}

export const SingleProduct=(state = initialState, action) => {
  switch (action.type) {

  case 'SINGLEPRODUCT_LOADING':
    return { 
        success:false,
        singleproduct:[]
     }
     
     case 'SINGLEPRODUCT_SUCCESS':
    return { 
             success:false,
             singleproduct:action.payload
         
    }

  default:
    return state
  }
}
