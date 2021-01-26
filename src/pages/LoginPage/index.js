import LoginCard from '../../components/LoginCard';
import styles from './LoginPage.module.css';
import { useState } from 'react';

import { login } from '../../services/userService';

function LoginPage(props) {
    
    const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState() {
        return {
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

            await login(formState);

            setFormState(getInitialFormState());

            props.handleSignupOrLogin();

            props.history.push('/dashboard');

        } catch (error) {
            alert(error.message)
        }
    };

    return (
        <div className={styles.LogIn}>
            <LoginCard
                {...props}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formState={formState}
            />
        </div>
    );
};

export default LoginPage;