import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";
import { HiCurrencyDollar } from "react-icons/hi";

const AddBudgetForm = () => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state == 'submitting'
    const myRef = useRef()
    const focusRef = useRef()

    useEffect(()=>{
        if(!isSubmitting){
           myRef.current.reset()
           focusRef.current.focus()
        }
    },[isSubmitting])
    return ( 
           <>
           <div className="form-wrapper">
            <h2 className="h3">Create Budget</h2>
            <fetcher.Form method="post" className="grid-sm" ref={myRef}>
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input type="text" name="newBudget" id="newBudget" placeholder="e.g., Toiletries " required ref={focusRef} />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input type="number" step={0.01} name="newBudgetAmount" id="newBudgetAmount" placeholder="e.g., $550" required inputMode="decimal" />
                </div>
                <input type="hidden" name="_action" value={'createBudget'} />
                 <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? (<span>Submitting...</span>): ( <div style={{display:"flex",alignItems:"center"}}><span>Create Budget</span><HiCurrencyDollar/></div>)
                    }
                 </button>
            </fetcher.Form>
           </div>
           </>
     );
}
 
export default AddBudgetForm;