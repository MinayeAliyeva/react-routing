
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Routes } from './routes/Routes'
function App() {
const router=createBrowserRouter(Routes)

  return (
    <>
  <RouterProvider router={router}>

  </RouterProvider>
    </>
  )
}

export default App
