import { Link } from 'react-router-dom';
import styles from './VideoGameCard.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

function Cards(props) {
    console.log(props);
    function genreList(genres) {
        let list = [];
        let genList = '';

        genres.map((genre) => {
            list.push(genre.name)
        });

        genList = list.join(', ');
        return genList;
    }
    return(
        <div className={styles.Card}>
            <div className={styles.Container}>
                <Link videoGameId={props.game.id} to="/:id">
                    <h2>{props.game.name}</h2>
                </Link>   
         
                {
                        // <p>ESRB Rating: {props.game.esrb_rating.name}</p>  
                }

                {
                    <p>
                        Genres: { genreList(props.game.genres) }
                    </p>
                }

                {
                    props.game.platforms.map((pltfrm, idx) =>
                    <Badge key={ idx } pltfrm={ pltfrm } pill variant="dark">
                        { pltfrm.platform.name }
                    </Badge>
                    )
                }
            </div>
            <Link to="/">
                <Image src={props.game.background_image} style={{ width: "100%"}} />
            </Link>
       
        </div>
    )
}

export default Cards;