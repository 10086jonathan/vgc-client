import styles from './HomePage.module.css';

import VideoGameCard from '../../components/VideoGameCard';

function HomePage(props) {
    return (
        <div className={styles.Home}>
            {
                props.videoGameData.results.map((game, idx) =>
                <VideoGameCard key={ idx } game={ game } />
                
                )
            }
        </div>
    );
}

export default HomePage;