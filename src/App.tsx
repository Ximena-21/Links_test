import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Login } from './views/login'
import { Profile } from './views/profile'
import { Signup } from './views/signup'
import { PrivateRoute } from './lib/components/PrivateRoute'
import { useUserStore } from './lib/stores/userStore'
import { useEffect } from 'react'

const App = () => {

  const routes = [
    { path: "profile", element: <Profile /> }
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          {
            routes.map((route, index)=>(
              <Route key={index} path={route.path} element={
                <PrivateRoute>
                  {route.element}
                </PrivateRoute>
              }/>
            ))
          }
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
