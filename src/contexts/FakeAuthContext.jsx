import { createContext, useReducer } from "react";

const AuthContext = createContext();


const initilState={
    user:null,
    isAuthenticated:false
}

function reducer(state,action){
    switch(action.type){
        case "login":
            return{...state,user:action.payload,isAuthenticated:true};

        case "logout":
            return{...state,user:null,isAuthenticated:false}

        default:
      throw new Error("Unknown action type");
    }
}
const FAKE_USER = {
    name: "Nezer",
    email: "nezer@example.com",
    password: "nezer123",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };


function AuthProvide({ children }) {
    const[{user,isAuthenticated},dispatch]=useReducer(reducer,initilState);

    function login(email,password){
        if(email===FAKE_USER.email && password===FAKE_USER.password)
           dispatch({type:"login",payload:FAKE_USER})
    }

    function logout(){
        dispatch({type:"logout"}) 
    }

  return <AuthContext.Provider value={{
    user,
    isAuthenticated,
    login,
    logout,
  }}>{children}</AuthContext.Provider>;
}
export  {AuthProvide}
export default AuthContext