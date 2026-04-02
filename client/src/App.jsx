import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './post'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Indexpage from './pages/indexpage'
import Login from './pages/Login'
import Registre from './pages/Registre'
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UserContextProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path="" element={<Indexpage />} />
              <Route path={'Login'} element={<Login />} />
              <Route path={'Registre'} element={<Registre />} />
              <Route path={'Create'} element={<CreatePost/>}/>

            </Route>

          </Routes>
        </UserContextProvider>

      </div>

    </>
  )
}

export default App
