import { useState } from "react"
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"
import '../styles/HomeStyle.css'


const HomePage = () => {

    const [tab, setTab] =useState<'login' | 'register'>('login')
  return (
    <div className="container">
    <div className="auth-container">
    <div className="tab-button">
      <button onClick={() => setTab('login')}>Login</button>
      <button onClick={() => setTab('register')}>Register</button>
    </div>
    <div className="tab-content">
        {tab==='login' ? <LoginPage/> : <RegisterPage/>}
    </div>
    </div>
    </div>
  )
}

export default HomePage
