import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import loginImage from '../../imgs/LoginPageBackground.jpg';
import styles from './LoginCard.module.css';

function LoginCard(props) {
    return (
        <div>
            <img className={styles.Image} src={loginImage} alt='assassins creed valhalla' />
            <Form className={styles.Form} onSubmit={props.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        placeholder="Enter your Email"
                        value={props.formState.email}
                        onChange={props.handleChange}
                        name="email"
                        type="email"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        placeholder="Password"
                        value={props.formState.password}
                        onChange={props.handleChange}
                        name="password"
                        type="password"
                    />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
                <Button href="/" variant="danger">
                    Cancel
                </Button>
            </Form>
        </div>
    )
};

export default LoginCard;