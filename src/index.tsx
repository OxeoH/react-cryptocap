import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import UserStore from './store/user/user.store'

export const appContext = createContext({ user: UserStore })
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <appContext.Provider value={{ user: UserStore }}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </appContext.Provider>
)
