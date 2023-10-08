import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Index from './components/index'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>,
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

