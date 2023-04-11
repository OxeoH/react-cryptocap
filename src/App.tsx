import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { authRoutes, defaultRoutes } from './routes'

function App() {
  return (
    <div className="App">
      <Routes>
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
