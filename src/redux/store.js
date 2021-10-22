import {createStore} from "redux";

const initialState = {
  loggedIn: false,
  userLogin: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN" :
      return {
        ...state,
        loggedIn: action.payload
      }
    case "SET_USER_LOGIN" :
      return {
        ...state,
        userLogin: action.payload
      }
    default:
      return state
  }
}

export const setLoggedIn = payload => ({type: "SET_LOGGED_IN", payload})
export const setUserLogin = payload => ({type: "SET_USER_LOGIN", payload})


export const store = createStore(reducer)
