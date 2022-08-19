const initialState = {products:[]}
export const getallproducts= (state = initialState,action) => {
  switch (action.type) {

  case "PRODUCT_LOADING":
    return {
        success:false,
        products:[]
    }
  case "PRODUCT_SUCCESS":
  return {
      success:false,
      products:action.payload
  }


  default:
    return state
  }
}
