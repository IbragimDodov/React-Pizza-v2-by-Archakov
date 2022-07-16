import React from 'react'
import { SearchContext } from '../../App'

import styles from './Search.module.scss'

function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext)
  return (
    <div className={styles.root}>
      <svg className={styles.icon} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/><path d="M0 0h48v48H0z" fill="none"/></svg>
      <input
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder='Поиск пиццы...' />
      {
        searchValue && (
          <svg onClick={() => setSearchValue('')} className={styles.clearIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
        )
      }
    </div>
  )
}

export default Search