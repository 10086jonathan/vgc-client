import { Badge, Button, Image } from 'react-bootstrap'

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
        <div>
            <Image src={props.game.background_image} width="750vh" alt={`${props.game.name}'s poster`} thumbnail />
            <h1>{props.game.name}</h1>
            <p>Average Playtime: {props.game.playtime}hrs</p>
            <p>ESRB Rating: { props.game.esrb_rating ? props.game.esrb_rating.name : 'No Rating' }</p>
            <p>Genres: {genreList(props.game.genres)}</p>
            <p>Meta Score: {props.game.metacritic}</p>
            <p>Platforms:</p>
            {
                props.game.platforms.map((pltfrm, idx) =>
                    <Badge key={idx} pltfrm={pltfrm} pill variant="dark">
                        {pltfrm.platform.name}
                    </Badge>
                )
            }
            <p>Release Date: {props.game.released}</p>
            <Button href="/" variant="dark">Back</Button>{' '}
        </div>
    )
}

export default VGInfo;