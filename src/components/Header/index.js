import logo from '../../logo.png'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import styles from './Header.module.css';





function Header(props) {
    return (
            
        <header className={styles.Header}>
            <Link to="/">
                <Image src={logo} className="App-logo" alt="logo" />
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