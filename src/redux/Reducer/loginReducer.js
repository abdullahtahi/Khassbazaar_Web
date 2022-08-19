const initialState = {user:[]}

export const loginreducer=(state = initialState, action) => {
  switch (action.type) {

  case "LOGIN__LOADING":
    return {
    loading:true,
    user:[]
}
case "LOGIN__SUCCESS":
  return {
    loading:false,
    user:action.payload
  }
  default:
    return state
  }
}
