import styles from './Comment.module.css';
import Button from 'react-bootstrap/Button';

function Comment(props) {
    return (
        <div className={styles.Table}>
            <h3>Comments</h3>
            <table>
                <thead style={{ textAlign: "center" }}>
                    <tr>
                        <th>Alias</th>
                        <th>Comment</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.comments.length > 0 ? (
                            
                            props.comments.map((comment) => (
                                <tr key={comment.id}>
                                <td>{comment.alias}</td>
                                <td>{comment.comment}</td>
                                <td>{comment.rating}</td>
                                <td>
                                    <Button
                                        style={{ marginRight: "5px"}}
                                        variant="dark"
                                        onClick={() => {
                                            props.editComment(comment)  
                                        }}
                                        className="button muted-button"
                                        >
                                        Edit
                                    </Button>
                                    
                                    <Button
                                        variant="danger" 
                                        onClick={() => props.deleteComment(comment.id)}
                                        className="button muted-button"
                                        >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                        ) : (
                            <tr>
                                <td colSpan={3}>No Comments yet</td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
};

export default Comment;