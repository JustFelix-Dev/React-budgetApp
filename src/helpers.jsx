// intentional delay upon form submission
  export const waait =()=> new Promise(res =>( setTimeout(res,Math.random() * 4000)))

// local Storage
// fetch Data
export const fetchData=(key)=>{
    return JSON.parse(localStorage.getItem(key))
}

// delete Data
export const deleteData=({key})=>{
    return localStorage.removeItem(key)
}
const generateColors = ()=>{
    const existingBudgetsLength = fetchData('budgets')?.length ?? 0 
    return `${existingBudgetsLength * 34} 65% 50%`
}
// creating budget 
export const createBudget=({name,amount})=>{
    const newBudget = {
        id: crypto.randomUUID(),
        name : name,
        amount : +amount,
        createdAt : Date.now(),
        color : generateColors()
    }
    const existingBudgets = fetchData('budgets') ?? []
    return localStorage.setItem('budgets',JSON.stringify([...existingBudgets,newBudget]))
}

// creating Expense
export const addExpense=({name,amount,budgetId})=>{
    const newExpense = {
        id: crypto.randomUUID(),
        name : name,
        amount : +amount,
        createdAt : Date.now(),
        budgetId : budgetId
    }
    const existingExpenses = fetchData('expenses') ?? []
    return localStorage.setItem('expenses',JSON.stringify([...existingExpenses,newExpense]))
}

// formatting Currency
export const formatCurrency = (amount)=>{
    return amount.toLocaleString(undefined,{
        style : "currency",
        currency : "USD"
    })
}
