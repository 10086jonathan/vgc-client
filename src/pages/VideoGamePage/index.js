import VideoGameInfo from '../../components/VideoGameInfo';
import VideoGameComments from '../../components/VideoGameComments';

function VideoGamePage(props) {
    
    return (
        <div>
            <VideoGameInfo {...props} />
            <VideoGameComments {...props} />
        </div>
    )
}

export default VideoGamePage;