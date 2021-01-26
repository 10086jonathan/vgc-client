import VGInfo from '../../components/VGInfo';
import Comment from '../../components/Comment';
import AddCommentForm from '../../forms/AddCommentForm';
import EditCommentForm from '../../forms/EditCommentForm';
import styles from './VideoGamePage.module.css';


function VideoGamePage(props) {
    
    return (
        <div className={styles.Info}>
            <section style={{ height: "100px" }}  />
            <VGInfo {...props} />
            <div className={styles.Comments}>
                <Comment {...props} />
                {
                    props.commentEdit ?
                    (
                        <div className={styles.FormTitle}>
                                <h3>Edit Comment</h3>
                                <EditCommentForm {...props} />
                            </div>
                        )
                        :
                        (
                            <div className={styles.FormTitle}>
                                <h3>Add Comment</h3>
                                <AddCommentForm {...props} />
                            </div>
                        )
                }
            </div>
        </div>
    )
};

export default VideoGamePage;