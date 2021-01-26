import SignupCard from '../../components/SignupCard';
import styles from './SignupPage.module.css'
import { useState } from 'react';

import { signup } from '../../services/userService';


function SignupPage(props) {

    const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
    }

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            
            await signup(formState);

            setFormState(getInitialFormState());

            props.handleSignupOrLogin();
    
            props.history.push('/dashboard');
            
        } catch (error) {
            console.log(error);
            alert(error.message)
        }
    };

    return (
        <div className={styles.SignUp}>
                <SignupCard
                {...props}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formState={formState}
            />
        </div>
    );
}

export default SignupPage;