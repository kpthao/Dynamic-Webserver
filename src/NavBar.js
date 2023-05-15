import './NavBar.css';
import {Link , useLocation} from 'react-router-dom';


function NavBar(){
    const location = useLocation();

    return (
      <nav>
        <ul>
        <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
        <li className={location.pathname === '/about-me' ? 'active' : ''}><Link to="/about-me">About Me</Link></li>
        <li className={location.pathname === '/projects' ? 'active' : ''}><Link to="/projects">Projects</Link></li>
        <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }

export default NavBar;