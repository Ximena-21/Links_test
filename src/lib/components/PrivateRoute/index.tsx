import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children } : { children: JSX.Element }) => {
    const isAuthenticated = true;
        
    if (isAuthenticated ) {
      return children
    }
      
    return <Navigate to="/" />
  }


//   const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
//     return isAuthenticated ? children : <Navigate to="/login" />;
//   };