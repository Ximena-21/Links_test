import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './views/login'
import { Profile } from './views/profile'
import { Singup } from './views/singup'
import { PrivateRoute } from './lib/components/PrivateRoute'

const App = () => {
  // const [count, setCount] = useState(0)

  const routes = [
    { path: "singup/", element: <Singup /> },
    { path: "profile/", element: <Profile /> }
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
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
