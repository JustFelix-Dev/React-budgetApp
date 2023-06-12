import { Link, useLoaderData } from "react-router-dom";
import { addExpense, createBudget, deleteItem, fetchData, waait } from "../helpers";
import Intro from "../components/Intro";
import { toast } from 'react-toastify';
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
import Table from "../components/Table";


export const formAction = async ({request})=>{
   await  waait()
    const data = await request.formData()
    const {_action,...formData} = Object.fromEntries(data)

    if(_action === 'newUser'){
        try{
            localStorage.setItem('userName',JSON.stringify(formData.userName))
           return toast.success(`Welcome ${formData.userName}`)
        }
        catch(error){
            throw Error('There was a problem creating your account!')
        }
    }

    if(_action === 'createBudget'){
        try{
            createBudget({
                name : formData.newBudget,
                amount : formData.newBudgetAmount
            })
          return toast.success('Budget Created!')
        }
        catch(error){
             throw Error('There was a problem creating a new Budget!')
        }
    }

    if(_action === 'addExpense'){
        try{
            addExpense({
                name : formData.newExpense,
                amount : formData.newExpenseAmount,
                budgetId : formData.newExpenseBudget
            })
              return toast.success(`Expense ${formData.newExpense} created!`)
        }
        catch(error){
           throw Error('There was a problem creating a new Expense!')
        }
    }
    if(_action === 'deleteExpense'){
        try{
            deleteItem({key:"expenses", id:formData.expenseId})
              return toast.success(`Expense deleted!`)
        }
        catch(error){
           throw Error('There was a problem deleting your Expense!')
        }
    }
}

export const dashboardLoader=()=>{
    const userName = fetchData('userName');
    const budgets = fetchData("budgets");
    const expenses = fetchData("expenses")
    return { userName,budgets,expenses}
}

const Dashboard = () => {
    const { userName,budgets,expenses} = useLoaderData()
    return ( 
            <>
             { userName ? <div className="dashboard">
                <div style={{display:"flex",alignItems:"center"}}><h2>Welcome,</h2><span className="userName">{userName}</span></div> 
                <div className="grid-sm">
                    {   
                      budgets && budgets.length > 0 ? 
                        <div className="grid-lg">
                        <div className="flex-lg">
                            <AddBudgetForm/>
                            <AddExpenseForm budgets={budgets}/>
                        </div>
                        <h2>Available Budgets</h2>
                          <div className="budgets">
                            {
                                budgets.map((budget)=>(
                                   <BudgetItem  key={budget.id} budget={budget}/>
                                ))
                            }
                          </div>
                          {
                             expenses && expenses.length > 0 && (
                                <div className="grid-md">
                                    <h2>Recent Expenses</h2>
                                    <Table expenses={expenses.sort((a,b)=>b.createdAt - a.createdAt).slice(0,6)}/>
                                    { expenses.length > 5 && (
                                        <Link to={'expenses'} className="btn btn--dark">
                                            See All Expenses
                                        </Link>
                                                    ) }
                                </div>
                                )
                          }
                    </div>
                      : (
                        <div className="grid-sm">
                            <p>Manage your finances anywhere, anytime with ease.</p>
                            <p>Create a budget to get started!</p>
                            <AddBudgetForm/>
                        </div>
                      )
                    
                }
                </div>
             </div> : <Intro/> }
            </>
     );
}




 
export default Dashboard;