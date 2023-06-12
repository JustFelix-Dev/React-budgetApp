import { Form, useFetcher } from "react-router-dom";
import { TbMoneybag } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa";
import {
    AiOutlineArrowDown
} from "react-icons/ai";
import  illustration  from '../assets/illustration.svg'

const Intro = () => {

    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === 'submitting'
    return (  
            <>
            <div className="intro" >
                <div>
                    <h1>
                        Administer Your <span className="accent">Finances<TbMoneybag/></span> without fuss
                    </h1>
                    <p>Personal Budgeting is the key to financial freedom.Have your finances in one place. <aside style={{display:"inline-flex",alignItems:"center"}}>Get Started<AiOutlineArrowDown/></aside></p>
                    <fetcher.Form method="post">
                        <input type="text" name="userName" required placeholder="Your Name" aria-label="Your Name"/>
                        <input type="hidden" name="_action" value={'newUser'}/>
                        <button type='submit' className="btn btn--dark" disabled={isSubmitting}>
                            {
                           isSubmitting ? <span>Submitting...</span> : <div style={{display:"flex",alignItems:"center"}}>
                             <span>Create Account</span><FaUserPlus/>
                           </div> 
                        }
                           </button>
                    </fetcher.Form>
                </div>
                <img src={illustration} alt="person's__image" width={600} />

            </div>
            </>
    );
}




 
export default Intro;