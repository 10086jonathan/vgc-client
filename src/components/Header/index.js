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
                                <Link style={{ textDecoration: "none", color: "white" }} to="/" onClick={props.handleLogout} >Logout</Link>
                            </li>
                            {/* <li>
                                <Link style={{ textDecoration: "none", color: "white" }} to="/Dashboard">Dashboard</Link>
                            </li> */}
                        </>

                        :

                        <>
                            <li>
                                <Link style={{ textDecoration: "none", color: "white" }} to="/login">Login</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: "none", color: "white" }} to="/signup">Signup</Link>
                            </li>
                        </>
                   }
               </ul>
           </nav>
        </header>
        
    );
};

export default Header;