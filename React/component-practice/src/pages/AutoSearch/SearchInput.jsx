/* eslint-disable react/prop-types */
import "./styles.css";
function SearchInput({ value, handleInput, ...rest }) {
  console.log(value);
  return (
    <div className="search-input">
      <input type="text" value={value} onChange={handleInput} {...rest} />
    </div>
  );
}

export default SearchInput;
