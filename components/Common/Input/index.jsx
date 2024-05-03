import SearchIcon from '@/components/Images/search-icon'
import { twMerge } from 'tw-merge'
import styles from './index.module.css'

const Input = () => {
  return <input className={twMerge(styles.input)}></input>
}

const Search = ({ placeholder }) => {
  return (
    <div className={twMerge(styles.search)}>
      <input placeholder={placeholder} />
      <button>
        <SearchIcon />
      </button>
    </div>
  )
}

const Password = ({ placeholder }) => {
  return <input type="password" className={twMerge(styles.input)}></input>
}

Input.Search = Search
Input.Password = Password

export default Input
