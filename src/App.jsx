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
import ExpensePage, { expenseAction, expensesLoader } from './pages/ExpensePage';
import BudgetPage, { budgetPageAction, budgetPageLoader } from './pages/BudgetPage';

const router = createBrowserRouter(
      createRoutesFromElements(
     <Route path='/' element={<Main/>} loader={mainLoader} errorElement={<Error/>} >
     <Route index element={<Dashboard/>} 
     loader={dashboardLoader} 
     action={formAction}
     errorElement={<Error/>}
     />
     <Route path='expenses' element={<ExpensePage/>} loader={expensesLoader} action={expenseAction} errorElement={<Error/>} />
     <Route path='budgets/:id' element={<BudgetPage/>} loader={budgetPageLoader} action={budgetPageAction} errorElement={<Error/>}/>
     <Route path='logout' action={logoutAction} />
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
