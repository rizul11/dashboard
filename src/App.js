import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Posts from './pages/Posts'

import Users from './pages/Users'
import PostDetail from './pages/PostDetail'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (

    <BrowserRouter>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/posts' element={<Posts/>}/>
  <Route path='/users' element={<Users/>}/>
  <Route path='/post-detail' element={<PostDetail/>}/>

</Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App
