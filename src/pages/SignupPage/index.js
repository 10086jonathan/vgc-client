import { useState } from 'react';
import { signup } from '../../services/userService';
import { Link } from 'react-router-dom';
import styles from './SignupPage.module.css';

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
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <div className={styles.Page}>
                    <label>First Name</label>
                    <input
                        value={formState.firstName}
                        onChange={handleChange}
                        name="firstName"
                        type="text"
                    />
                    <label>Last Name</label>
                    <input
                        value={formState.lastName}
                        onChange={handleChange}
                        name="lastName"
                        type="text"
                    />
                    <label>Email</label>
                    <input
                        value={formState.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                    />
                    <label>Password</label>
                    <input
                        value={formState.password}
                        onChange={handleChange}
                        name="password"
                        type="password"
                    />
                    <button>Sign Up</button>
                    <p><Link to="/" >Cancel</Link></p>
                </div>
            </form>
        </div>
    );
}

export default SignupPage;