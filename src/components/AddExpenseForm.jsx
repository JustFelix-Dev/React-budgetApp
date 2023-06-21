import React, { useRef,useEffect } from 'react'
import { useFetcher } from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'
const AddExpenseForm = ({ budgets }) => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state == 'submitting'
    const formRef = useRef()
    const focusRef  = useRef()

    useEffect(()=>{
        if(!isSubmitting){
            formRef.current.reset()
            focusRef.current.focus()
        }
    })
  return (
    <>
     <div className="form-wrapper">
        <h2 className='h3'>Add New <span className='accent'>{budgets.length === 1 && `${budgets.map((budget)=>budget.name)}`}</span> Expense</h2>
        <fetcher.Form method='post' className='grid-sm' ref={formRef}>
                <div className="expense-inputs">
                    <div className="grid-xs">
                        <label htmlFor="newExpense">Expense Name</label>
                        <input type="text" name='newExpense' id='newExpense' placeholder='e.g Internet bills' ref={focusRef} required/>
                    </div>
                    <div className="grid-xs">
                        <label htmlFor="newExpenseAmount">Expense Amount</label>
                        <input type="number" name='newExpenseAmount' id='newExpenseAmount' placeholder='e.g $100' step={0.01} inputMode='decimal' required/>
                    </div>
                    <div className="grid-xs " hidden={budgets.length === 1}>
                        <label htmlFor="newExpenseBudget">Budget Category</label>
                        <select name="newExpenseBudget" id="newExpenseBudget" required>
                            {
                                budgets.sort((a,b)=>a.createdAt - b.createdAt).map((budget)=>{
                                    return (
                                        <option key={budget.id} value={budget.id}>{budget.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <input type="hidden" name="_action" value={'addExpense'} /> 
                    <button  style={{alignSelf:"end",display:"flex",justifyContent:"center",alignItems:"center"}} type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? (
                            <div class="loader">
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                                <div class="bar3"></div>
                                <div class="bar4"></div>
                                <div class="bar5"></div>
                                <div class="bar6"></div>
                                <div class="bar7"></div>
                                <div class="bar8"></div>
                                <div class="bar9"></div>
                                <div class="bar10"></div>
                                <div class="bar11"></div>
                                <div class="bar12"></div>
                            </div>
                        ): (<span style={{display:"flex"}}><AiOutlinePlus height={30}/></span>)
                    }
                 </button>
                </div>
        </fetcher.Form>
     </div>
    </>
  )
}

export default AddExpenseForm
