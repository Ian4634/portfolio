import {Link} from 'react-router'

import getLang from '../../utils/getLang';

import './Header.css';
function Header(){
    return (
        <div className="header-container">
            <div className="name-section">{getLang("en", "name")}</div>
            <div className="button-section">
                <nav>
                    <Link to="/">home</Link>
                    <Link to="/">snowboard</Link>
                    <Link to="/">software development</Link>
                    <Link to="/">surfing</Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;