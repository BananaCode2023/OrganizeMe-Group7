import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
/* The code `<React.StrictMode>` is a component provided by React that helps in highlighting potential
problems in an application. It performs additional checks and warnings to ensure that the code
follows best practices and avoids common pitfalls. */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
