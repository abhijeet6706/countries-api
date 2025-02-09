// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.jsx'
import App from './App.jsx'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Error from './components/Error.jsx'
import CountryDetails from './components/CountryDetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:'/contact',
        element: <Contact/>,
      },
      {
        path:'/',
        element: <Home/>,
      },
      {
        path:'/:country',
        element: <CountryDetails/>,
      },
    ]
  },
  
])

const root = createRoot(document.querySelector('#root'))
root.render(<RouterProvider router = {router}/>)