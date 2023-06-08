import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard, { dashboardLoader ,formAction} from './pages/Dashboard';
import Error from './pages/Error';
import Main, { mainLoader } from './layouts/Main';
import { logoutAction } from './components/Nav';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
      createRoutesFromElements(
    <Route path='/' element={<Main/>} loader={mainLoader} >
     <Route index element={<Dashboard/>} 
     loader={dashboardLoader} 
     action={formAction}
     errorElement={<Error/>}
     />
     <Route path='logout' action={logoutAction} errorElement={<Error/>}/>

        </Route>
      )
)

function App() {

  return (
    <>
    <RouterProvider router={router}/>
      <ToastContainer/>
       
    </>
  )
}

export default App
