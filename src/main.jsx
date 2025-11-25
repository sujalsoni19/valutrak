import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Coin from './components/Coin.jsx'
import About from './components/About.jsx'
import './index.css'
import Contact from './components/Contact.jsx'


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
          path : "/coin/:coinid",
          element : <Coin />
        },
        {
          path : "/about",
          element : <About />
        },
        {
          path : "/contact",
          element : <Contact />
        }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  
  
)
