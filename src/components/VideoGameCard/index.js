import styles from './VideoGameCard.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

function Cards(props) {
    console.log(props)
    return(
        <div className={styles.Card}>
            <div className={styles.Container}>
                <h2>{props.game.name}</h2>
                {
                    // <p>ESRB Rating: {props.game.esrb_rating.name}</p>
                    
                }
                {
                    props.game.genres.map((genre, idx) =>
                    <p key={ idx } genre={ genre }>
                        Genres: { genre.name }
                    </p>
                    )
                }
                {
                    props.game.parent_platforms.map((pltfrm, idx) =>
                    <Badge key={ idx } pltfrm={ pltfrm } pill variant="dark">
                        { pltfrm.platform.name }
                    </Badge>
                    )
                }
            </div>
            <Image src={props.game.background_image} style={{ width: "100%"}} />
        </div>
    )
}

export default Cards;