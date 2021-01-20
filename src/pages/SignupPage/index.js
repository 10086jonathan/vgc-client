import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { signup } from '../../services/userService';
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
        <main className={styles.SignUp}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        placeholder="What do they call you?"
                        value={formState.firstName}
                        onChange={handleChange}
                        name="firstName"
                        type="text"
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        placeholder="What is your family name?"
                        value={formState.lastName}
                        onChange={handleChange}
                        name="lastName"
                        type="text"
                        />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        placeholder="Enter Email"
                        value={formState.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                        />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        placeholder="Password"
                        value={formState.password}
                        onChange={handleChange}
                        name="password"
                        type="password"
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p><Link to="/" >Cancel</Link></p>
            </Form>
        </main>
    );
}

export default SignupPage;