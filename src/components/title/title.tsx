import classes from './title.module.scss'

interface ITitle {
    text: string
}

const Title:React.FC<ITitle> = ({text}) => {
  return (
    <h2 className={classes.text}>{text}</h2>
  )
}

export default Title