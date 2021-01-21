import styles from './VideoGameCard.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

function VideoGameCard(props) {
    
    function genreList(genres) {
        let list = [];
        let genList = '';
    
        genres.map(genre => 
            list.push(genre.name)
        );
    
        genList = list.join(', ');
        return genList;
    };

    return(
        <div className={styles.Card}>
            <div className={styles.Container}>

                <h2>{props.game.name}</h2>

                {/* <p>ESRB Rating: {props.game.esrb_rating.name}</p> */}

                <p>Genres: { genreList(props.game.genres) }</p>

                {
                    props.game.platforms.map((pltfrm, idx) =>
                        <Badge key={idx} pltfrm={pltfrm} pill variant="dark">
                            {pltfrm.platform.name}
                        </Badge>
                    )
                }
            </div>
            <img src={props.game.background_image} style={{ width: "100%" }} alt={`${props.game.name}'s poster`} />
        </div>
    )
}

export default VideoGameCard;