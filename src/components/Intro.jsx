import { Form, useFetcher } from "react-router-dom";
const Intro = () => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === 'submitting'
    return (  
            <>
            <div className="intro">
                <div>
                    <h1>
                        Take Control of <span className="accent">Your Money</span>
                    </h1>
                    <p>Personal Budgeting is the key to financial freedom. Start your journey today.</p>
                    <fetcher.Form method="post">
                        <input type="text" name="userName" required placeholder="Your Name" aria-label="Your Name"/>
                        <input type="hidden" name="_action" value={'newUser'}/>
                        <button type='submit' className="btn btn--dark" disabled={isSubmitting}>
                            {
                           isSubmitting ? <span>Submitting...</span> : <span>Create Account</span>
                        }
                           </button>
                    </fetcher.Form>
                </div>
            </div>
            </>
    );
}




 
export default Intro;