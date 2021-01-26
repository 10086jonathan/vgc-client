import { Link } from 'react-router-dom';

import styles from './HomePage.module.css';

import VGCard from '../../components/VGCard';

function HomePage(props) {
    
    return (
        <div className={styles.Home}>
            <section style={{ height: "100px" }} />
            {
                props.videoGameData.map(game =>
                    <Link style={{ textDecoration: "none" }} key={game.id} to={`/${game.id}`}>
                        <VGCard game={game} />
                    </Link>
                )
            }
        </div>
    );
}

export default HomePage;