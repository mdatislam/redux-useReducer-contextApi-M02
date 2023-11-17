import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Pages/Routes/Routes'
import './index.css'
import FoodProvider from './Pages/Provider/FoodProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <FoodProvider>
  <React.StrictMode>
    <div className='w-3/4 mx-auto'>
    <RouterProvider router={router} />
    </div>
    </React.StrictMode>
    </FoodProvider>
)
