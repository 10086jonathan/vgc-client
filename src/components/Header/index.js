import logo from '../../logo.png';
import { Link } from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import styles from './Header.module.css';




function Header(props) {
    return (
            
        <header className={styles.Header}>
            <Link to="/">
                <Image src={logo} className="App-logo" alt="logo" width="100" height="100" />
            </Link>
             <nav>
               <ul>
                   {
                       props.user ?
                        <>
                            <li>
                                <Link to="/" onClick={props.handleLogout} >Logout</Link>
                            </li>
                            <li>
                                <Link to="/Dashboard">Dashboard</Link>
                            </li>
                        </>

                        :

                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Signup</Link>
                            </li>
                        </>
                   }
               </ul>
           </nav>
        </header>
        
    );
};

export default Header;