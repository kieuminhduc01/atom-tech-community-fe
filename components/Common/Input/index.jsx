import SearchIcon from '@/components/Images/search-icon'
import { twMerge } from 'tw-merge'
import styles from './index.module.css'

const Input = () => {
  return <input></input>
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

Input.Search = Search
export default Input
