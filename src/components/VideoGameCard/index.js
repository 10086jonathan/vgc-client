import styles from './VideoGameCard.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function Cards(props) {
    return(
        <Card className={styles.Card} >
            <Card.Body>
                <Card.Text>
                    {props.game.name}
                </Card.Text>
            <Card.Img className={styles.CardImg} src={props.game.background_image} alt="Video Game Background" />
            </Card.Body>
        </Card>
    )
}

export default Cards;