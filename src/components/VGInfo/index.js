import Badge  from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import styles from './VGInfo.module.css';

function VGInfo(props) {
    // console.log(props)
    function genreList(genres) {
        let list = [];
        let genList='';

        genres.map(genre =>
            list.push(genre.name)    
        );

        genList= list.join(', ');
        return genList;
    };
    return (
        <div className="container">
            <Button style={{ marginBottom: "50px", marginTop: "25px" }} href="/" variant="danger">Back</Button>
            <h1 style={{ color: "white" }}>{props.game.name}</h1>

            <div className={styles.Info}>
                <img src={props.game.background_image} width="100%" alt={`${props.game.name}'s poster`} />
            </div>

            <div className={styles.Container}>
                <h5><span style={{ fontWeight: "bold" }}>ESRB Rating: </span>
                {
                    props.game.esrb_rating ?
                    props.game.esrb_rating.name
                    :
                    'No Rating'
                }
                </h5>
                <h5><span style={{ fontWeight: "bold" }}>Average Playtime: </span>{props.game.playtime}hrs</h5>
                <h5><span style={{ fontWeight: "bold" }}>Genres: </span>{genreList(props.game.genres)}</h5>
                <h5><span style={{ fontWeight: "bold" }}>Meta Score: </span>{props.game.metacritic}</h5>
                <h5 style={{ fontWeight: "bold", marginBottom: "5px" }}>Platforms:</h5>
                    {
                        props.game.platforms.map((pltfrm, idx) =>
                        <Badge style={{ margin: "2px" }} key={idx} pltfrm={pltfrm} pill variant="light">
                            {pltfrm.platform.name}
                        </Badge>
                        )
                    }
                <h5 style={{ marginTop: "10px" }}><span style={{ fontWeight: "bold" }}>Release Date: </span>{props.game.released}</h5>
            </div>
        </div>
    )
}

export default VGInfo;