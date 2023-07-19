import "./BookFilter.css";

const BookFilter = (props) => {
  const selectOptionHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectOptionHandler} value={props.selected}>
          <option value="2021">2021</option>
          <option value="2008">2008</option>
          <option value="2000">2000</option>
        </select>
      </div>
    </div>
  );
};

export default BookFilter;