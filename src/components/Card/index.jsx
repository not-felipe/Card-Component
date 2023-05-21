import posterImg from "../../assets/images.jpeg"
import styles from "./styles.module.css"

export default function Card() {
  return (
    <div className={ styles.container }>
      <img src={ posterImg } alt="Poster Frank Ocean" className={ styles.poster }/>
      <div>
        <h2>Pôster Blonde</h2>
        <p>Blonde (estilizado como blond) é o segundo álbum de estúdio do cantor e compositor norte-americano Frank Ocean. Foi lançado a 20 de Agosto de 2016 em exclusivo, inicialmente, na loja digital da iTunes e no serviço de streaming Apple Music como um acompanhamento ao álbum visual Endless, lançado no dia anterior sob as mesmas circunstâncias.</p>
        <a href="https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf?si=R5oNqOvrQz-SuDGojhtydw" target="_blank" className="button">Ouça Agora!</a>
      </div>
    </div>
  )
}
