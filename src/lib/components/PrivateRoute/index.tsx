import { Navigate } from "react-router-dom"
import { useUserStore } from "../../stores/userStore";

export const PrivateRoute = ({ children } : { children: JSX.Element }) => {

    const currentUser = JSON.parse(localStorage.getItem("user") as string)

    const isAuthenticated = currentUser != null ? true : false
        
    if (isAuthenticated ) {
      return children
    }
      
    return <Navigate to='/' replace />
  }


//   const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
//     return isAuthenticated ? children : <Navigate to="/login" />;
//   };