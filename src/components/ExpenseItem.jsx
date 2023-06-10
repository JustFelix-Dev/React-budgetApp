import React from 'react'
import { formatCurrency, formatDate, getMatchingItems } from '../helpers'
import { Link, useFetcher } from 'react-router-dom';

const ExpenseItem = ({expense}) => {
    const fetcher = useFetcher()
    const budget = getMatchingItems({
        category: "budgets",
        key: "id",
        value: expense.budgetId
    })[0];
  return (
       <>
       <td>{expense.name}</td>
       <td>{formatCurrency(expense.amount)}</td>
       <td>{formatDate(expense.createdAt)}</td>
       <td> <Link to={`budgets/${budget.id}`} style={{"--accent": budget.color}}>{budget.name}</Link></td>
       <td>
        <fetcher.Form method='post'>
               <input type="hidden" name='_action' value={'deleteExpense'} />
               <input type='hidden' name='expenseId' value={expense.id}/>
               <button type='submit' className='btn btn--warning'>Delete</button>
        </fetcher.Form>

       </td>

      </>

  )
}

export default ExpenseItem;
