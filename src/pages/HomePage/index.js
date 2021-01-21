import { Link } from 'react-router-dom';

import styles from './HomePage.module.css';

import VideoGameCard from '../../components/VideoGameCard';

function HomePage(props) {
    
    return (
        <div className={styles.Home}>
            {
                props.videoGameData.map(game =>
                    <Link key={game.id} to={`/${game.id}`}>
                        <VideoGameCard game={game} />
                    </Link>
                )
            }
        </div>
    );
}

export default HomePage;