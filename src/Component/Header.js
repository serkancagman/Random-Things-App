
import Logo from "../images/question.png"

const Header = ({ startA, start }) => {
  return (
    <header>
      <div className="container">
        <nav className="nav py-2">
          <a href="/" className="navbar-brand fs-1 g-3 text-light justify-content-between align-items-center d-flex">
           <img className="me-4" src={Logo} alt="" /> <span>Random Things</span>
          </a>
          <ul className="navbar-nav flex-row justify-content-center align-items-center">
            <li className="nav-item">
              <a href="/" className="nav-link text-light fs-2">
                Homepage 
              </a>
            </li>
            <li className="nav-item text-light"> | </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-light fs-2">
                Feedback
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
