import Card from "./Card";
import styles from './Cards.module.css';

function Cards({cities, onClose}) {
    return ( 
        <div className={styles.cards_container}>
            {cities.map( city => 
            <Card
                key={city.id}
                max={city.max}
                min={city.min}
                name={city.name}
                img={city.img}
                onClose={()=> onClose(city.id)}
                id={city.id}
            ></Card>)}
        </div>
     );
}

export default Cards
