import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/reset.scss"
import MainProvider from './context/mainProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainProvider>
         <App />
    </MainProvider>
 
  </React.StrictMode>,
)
