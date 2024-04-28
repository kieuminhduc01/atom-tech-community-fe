import tailwindMerge from '@/util/tailwindMerge'
import styles from './index.module.css'

const Button = ({ children, variant = BUTTON_VARIANT.DEFAULT, className }) => {
  return (
    <button className={tailwindMerge(styles.button, styles[variant], className)}>{children}</button>
  )
}
export default Button

const BUTTON_VARIANT = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  TEXT: 'text',
}
