import Filter from "./Filter";
import Search from "./Search";

const SearchNavigation = ({ onSearch }: { onSearch: (term: string) => void }) => {
    return (
        <nav
          className="navbar navbar-light bg-light"
          style={{ margin: "20px", padding: "10px" }}
        >
          <div className="col-lg-6">
            <Filter />
          </div>

          <div className="col-lg-6">
            <Search onSearch={onSearch} />
          </div>
        </nav>
    );
};

export default SearchNavigation;
