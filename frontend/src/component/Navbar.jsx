import "../css/Navbar.css"
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    return(
        <>
      <div className="navbar-div">
        <div className="navbar">
          <h1 className='logo'>URBANWEAR</h1>
          <div className="search-container">
            <SearchIcon className="search-icon" />
            <input type="text" className="search-bar" placeholder="Type any product here..." />
          </div>
        </div>
        <div className="category-nav">
          <a className="category-nav-element">Category</a>
          <a className="category-nav-element">Category</a>
          <a className="category-nav-element">Category</a>
          <a className="category-nav-element">Category</a>
          <a className="category-nav-element">Category</a>
        </div>
      </div>
    </>
    )
}

export default Navbar;