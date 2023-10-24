const Search = () => {
  return (
    <div className="search">
      <form className="form-inline" style={{ flexDirection: "row" }}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;