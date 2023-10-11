import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Index from './components/index'
import About from './components/about'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>,
    },
    {
      path: "/about",
      element: <About/>,
    },

  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App

