import styles from './VGCard.module.css';

import Badge from 'react-bootstrap/Badge';

function VGCard(props) {
    
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
        <div className="container">
            <div className={styles.Card}>
                <div className={styles.Container}>
                    
                    <h2>{props.game.name}</h2>

                    <p><span style={{ fontWeight: "bold" }}>ESRB Rating: </span>{ props.game.esrb_rating ? props.game.esrb_rating.name : 'No Rating' }</p>

                    <p><span style={{ fontWeight: "bold" }}>Genres: </span>{ genreList(props.game.genres) }</p>

                    {
                        props.game.platforms.map((pltfrm, idx) =>
                        <Badge style={{ margin: "2px" }} key={idx} pltfrm={pltfrm} pill variant="dark">
                            {pltfrm.platform.name}
                        </Badge>
                        )
                    }

                </div>

                <img src={props.game.background_image} style={{ width: "100%" }} alt={`${props.game.name}'s poster`} />
            
            </div>
        </div>
    )
}

export default VGCard;