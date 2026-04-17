import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Post.jsx';

import AuthorPosts from "./pages/AuthorPosts.jsx";


import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Indexpage from './pages/Indexpage.jsx'
import Login from './pages/Login.jsx'
import Registre from './pages/Registre.jsx'
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from "./pages/PostPage.jsx";



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
              <Route path="/author/:id" element={<AuthorPosts />} />
              <Route path="/post/:id" element={<PostPage/>} />
            </Route>

          </Routes>
        </UserContextProvider>

      </div>

    </>
  )
}

export default App
