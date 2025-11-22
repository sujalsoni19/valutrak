import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Coin from './components/Coin.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element :<App />,
    children : [
      {
            path: "/",
            element: <Home />,
        },
        {
          path : "/coin",
          element : <Coin />
        }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  
  
)
