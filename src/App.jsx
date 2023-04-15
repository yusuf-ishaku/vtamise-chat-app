import { useState } from 'react'
import {
  Routes, BrowserRouter as Router, Route, Link, 
} from 'react-router-dom';
import { SignUpPage } from './pages/signup-page';
import './index.css'
import { LoginPage } from './pages/login-page';
import { ChatPage } from './pages/chats-page';

function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path='/' element = {<SignUpPage/>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/chat' element= {<ChatPage></ChatPage>}></Route>
        </Routes>
      
    </div>
  )
}

export default App
