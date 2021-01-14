import VideoGameCard from '../../components/VideoGameCard'

function HomePage(props) {
    console.log(props)
    return (
        <div>
            {
                props.videoGameData.results.map((game, idx) =>
                <VideoGameCard key={ idx } game={ game } />
                )
            }
        </div>
    );
}

export default HomePage;