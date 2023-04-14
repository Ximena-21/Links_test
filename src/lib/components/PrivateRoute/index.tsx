import { Navigate } from "react-router-dom"
import { useUserStore } from "../../stores/userStore";

export const PrivateRoute = ({ children } : { children: JSX.Element }) => {

    const user = useUserStore( (state: any ) => state.user)

    const isAuthenticated = !!user.token
        
    if (isAuthenticated ) {
      return children
    }
      
    return <Navigate to='/' replace />
  }
