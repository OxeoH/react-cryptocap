import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { authRoutes, defaultRoutes } from './routes'
import { useStore } from './store'
import { Header } from './components/Header'

function App() {
  const { userStore } = useStore()
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* userStore.isAuth */}
        {true &&
          authRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

        {defaultRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  )
}

export default App
