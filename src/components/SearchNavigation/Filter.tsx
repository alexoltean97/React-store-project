const Filter = () => {
    return(
        <div className="filter">
        <select className="custom-select" id="inputGroupSelect01">
          <option selected>Filter by Category</option>
          <option value="1">Gaming</option>
          <option value="2">House</option>
          <option value="3">Car</option>
        </select>
      </div>
    );
}

export default Filter;