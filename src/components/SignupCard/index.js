import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import signupImage from '../../imgs/SignupPageBackground.jpg';
import styles from './SignupCard.module.css';

function SignupCard(props) {
    return (
        <div>
            <img className={styles.Image} src={signupImage} alt='ghost of tsushima' />
            <Form className={styles.Form} onSubmit={props.handleSubmit}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        placeholder="What do they call you?"
                        value={props.formState.firstName}
                        onChange={props.handleChange}
                        name="firstName"
                        type="text"
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        placeholder="What is your family name?"
                        value={props.formState.lastName}
                        onChange={props.handleChange}
                        name="lastName"
                        type="text"
                        />
                </Form.Group>
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
}

export default SignupCard;