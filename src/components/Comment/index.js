function Comment(props) {
    return (
        <table>
            <thead>
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
                                <button
                                    onClick={() => {
                                        props.editComment(comment)  
                                    }}
                                    className="button muted-button"
                                >
                                    Edit
                                </button>
                                
                                <button
                                    onClick={() => props.deleteComment(comment.id)}
                                    className="button muted-button"
                                >
                                    Delete
                                </button>
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
    )
};

export default Comment;