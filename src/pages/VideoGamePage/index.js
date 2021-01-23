import VGInfo from '../../components/VGInfo';
import Comment from '../../components/Comment';
import AddCommentForm from '../../forms/AddCommentForm';

function VideoGamePage(props) {
    
    return (
        <div>
            <VGInfo {...props} />
            <Comment {...props} />
            <AddCommentForm {...props} />
        </div>
    )
}

export default VideoGamePage;