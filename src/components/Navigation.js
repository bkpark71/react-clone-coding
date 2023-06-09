import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    //<Link to={{pathname:"/about", state:{fromNavigation:true}}}>About</Link>
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>    
    );
}

export default Navigation;