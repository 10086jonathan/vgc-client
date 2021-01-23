import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddCommentForm(props) {
    console.log(props);
    const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState() {
        return {
            id: null,
            alias: "",
            comment: "",
            rating: 5
        }
    };

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    function handleSubmit(event) {
        try {
            event.preventDefault();
            if(!formState.alias || !formState.comment) return;

            props.addComment(formState);
            setFormState(getInitialFormState());

        } catch (error) {
            console.log(error);
            alert(error.message)
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Alias</Form.Label>
                <Form.Control
                    type="text"
                    name="alias"
                    value={formState.alias}
                    onChange={handleChange}
                />

            </Form.Group>
            <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                    type="text"
                    name="comment"
                    value={formState.comment}
                    onChange={handleChange}
                />

            </Form.Group>
            <Form.Group controlId="rating.SelectCustom">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                    as="select"
                    name="rating"
                    value={formState.rating}
                    onChange={handleChange}    
                    custom
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Button variant="dark" type="submit">Add Comment</Button>{' '}
            <Button onClick={getInitialFormState}>Cancel</Button>
        </Form>
    )
}

export default AddCommentForm;