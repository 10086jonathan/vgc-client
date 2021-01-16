import VideoGameInfo from '../../components/VideoGameInfo';

function VideoGamePage(props) {
    console.log(props)
    return (
        <div>
            <VideoGameInfo />
            <h1>video game page</h1>
        </div>
    )
}

export default VideoGamePage;