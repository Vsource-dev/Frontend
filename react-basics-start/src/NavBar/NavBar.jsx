import styles from './NavBar.module.css'
import { faHouse, faDatabase, faToolbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar(){

    return(<>

        <nav>
            <ul className={styles.navbar}>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        <FontAwesomeIcon icon={faHouse}/>
                        <span className='link-text'>Home</span>
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        <FontAwesomeIcon icon={faDatabase}/>
                        <span className='link-text'>Database</span>
                    </a>
                </li>

                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        <FontAwesomeIcon icon={faToolbox}/>
                        <span className='link-text'>Home</span>
                    </a>
                </li>

            </ul>
        </nav>
    </>)

}

export default NavBar