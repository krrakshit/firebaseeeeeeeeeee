import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Firestore from './firestore.jsx'
import Notification from './notification.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Firestore/> */}
    <Notification/>
  </StrictMode>,
)
