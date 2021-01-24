import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditCommentForm(props) {
    // console.log(props);
    const [formState, setFormState] = useState(props.currentComment);

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    function handleSubmit(event) {
        try {
            event.preventDefault();

            props.updateComment(formState.id, formState);

        } catch (error) {
            console.log(error);
            alert(error.message)
        }
    };

    useEffect(() => {
        props.setCommentEdit(props.currentComment)
    }, [props])

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
            <Button variant="dark" type="submit">Update Comment</Button>{' '}
            <Button
                variant="danger"
                onClick={() => props.setCommentEdit(false)}
            >
                Cancel
            </Button>
        </Form>
    )
}

export default EditCommentForm;