import VGInfo from '../../components/VGInfo';
import Comment from '../../components/Comment';
import AddCommentForm from '../../forms/AddCommentForm';
import EditCommentForm from '../../forms/EditCommentForm';

function VideoGamePage(props) {
    
    return (
        <div>
            <VGInfo {...props} />
            <Comment {...props} />
            {
                props.commentEdit ?
                    (
                        <div>
                            <h3>Edit Comment</h3>
                            <EditCommentForm {...props} />
                        </div>
                    )
                    :
                    (
                        <div>
                            <h3>Add Comment</h3>
                            <AddCommentForm {...props} />
                        </div>
                    )
            }
        </div>
    )
}

export default VideoGamePage;