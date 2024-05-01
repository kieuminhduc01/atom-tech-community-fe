import tailwindMerge from '@/util/tailwindMerge'
import styles from './index.module.css'

const Card = ({ children, className }) => {
  return <div className={tailwindMerge(styles.card, className)}>{children}</div>
}

export default Card
