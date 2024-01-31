import React from 'react'
import styles from './Search.module.scss';


const Search = ({setSearch, setPageNumber}) => {
  return (
    <form className="d-flex justify-content-center gap-3 my-4">
      <input placeholder="Search" type="text" className={styles.input}
        onChange={(e)=>{
            setPageNumber(1);
            setSearch(e.target.value);
        }}
      
      
      />
      <button onClick={e=>{e.preventDefault()}} type="button" class="btn btn-dark">Search</button>
    </form>


)
}

export default Search
