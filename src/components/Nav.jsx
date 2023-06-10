import { Form, NavLink, redirect } from "react-router-dom";
import logowave from '../assets/logomark.svg'
import TrashIcon from '../assets/trash.svg'
import { deleteData } from "../helpers";
import { toast } from 'react-toastify';

const Nav = ( {userName} ) => {
    return ( 
          <>
           <nav>
             <NavLink to={'/'} aria-label="Home">
                <img src={logowave} alt="" height={30} />
                <span>HomeBudget</span>
             </NavLink>
             { userName &&
                  (
                    <Form method="post" action="/logout" onSubmit={(e)=>{if(!confirm('Delete User and all Data ?')) e.preventDefault()}}>
                        <button type="submit" className="btn btn--warning">
                            <span>Delete User <img src={TrashIcon} alt="" height={20} /> </span>
                        </button>
                    </Form>
                )
             }
           </nav>
          </>
     );
}

export const logoutAction = ()=>{
         deleteData({
            key:"userName"
         })
         deleteData({
            key:"budgets"
         })
         deleteData({
            key:"expenses"
         })

        //  toast.promise({pending,error,sucess})
         toast.success('You have deleted this user!')

     return  redirect('/')
}
 
export default Nav;