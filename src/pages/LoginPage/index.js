import { useState } from 'react';
import { Link } from 'react-router-dom'
import { login } from '../../services/userService';

import styles from './LoginPage.module.css';
import { Form, Button } from 'react-bootstrap';

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
        <main className={styles.LogIn}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={formState.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={formState.password}
                        onChange={handleChange}
                        name="password"
                        type="password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p><Link to="/">Cancel</Link></p>
            </Form>
        </main>
    );
};

export default LoginPage;