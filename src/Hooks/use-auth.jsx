import { useContext } from "react"
import AuthContext from "../contexts/FakeAuthContext";



 const useAuth=()=>{
    const authContext=useContext(AuthContext)
    if(authContext===undefined) throw new Error("AuthContext was used outside the AuthProvider");
    return authContext
}

export {useAuth}