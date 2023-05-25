import styles from "./styles.module.css"
import Button from "../Button"

export default function Card(props) {
  return (
    <div className={ styles.container }>
      <img src={ props.posterImg } alt="{props.title}" className={ styles.poster }/>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <Button />
      </div>
    </div>
  )
}
