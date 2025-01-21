import styles from './NavBar.module.css'
import { faHouse, faDatabase, faToolbox, faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar(){

    return(<>

        <nav>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>
                        <FontAwesomeIcon icon={faHouse}/>
                        <span className={styles.linkText}>Home</span>
                    </a>
                </li>

                <li className={styles.navItem}>
                    <a href="#" className={styles.navLink}>
                        <FontAwesomeIcon icon={faDatabase}/>
                        <span className={styles.linkText}>Storage</span>
                    </a>
                </li>

                <li className={styles.navItem}>
                    <a href="#"  className={styles.navLink}>
                        <FontAwesomeIcon icon={faToolbox}/>
                        <span className={styles.linkText}>Settings</span>
                    </a>
                </li>

                <li className={styles.navItem}>
                    <a href="#"  className={styles.navLink}>
                        <FontAwesomeIcon icon={faCircleHalfStroke}/>
                        <span className={styles.linkText}>Toggle</span>
                    </a>
                </li>

            </ul>
        </nav>
    </>)

}

export default NavBar