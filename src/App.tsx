import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './views/login'
import { Profile } from './views/profile'
import { Singup } from './views/singup'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='singup/' element={<Singup />} />
          <Route path='profile/' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
