import { FaSearch } from "react-icons/fa";
import classes from "./search.module.scss";

const Search = () => {
  return (
    <div className={classes['search-input']}>
       <div className={classes['cont']}>
            <input className={classes.input} placeholder="Search for anything" />
       </div>
       <button className={classes.btn}>
            <FaSearch />
       </button>
    </div>
  );
};

export default Search;
