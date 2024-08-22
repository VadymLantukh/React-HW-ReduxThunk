import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectFilter } from '../../redux/constants';
import { searchFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.boxSeacrh}>
      <p className={css.searchPara}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(searchFilter(evt.target.value))}
      />
    </div>
  );
};

export default SearchBox;
