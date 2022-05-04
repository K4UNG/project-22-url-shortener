import styles from './Nav.module.css'

export default function Nav(props) {
    return <nav className={props.shown ? styles.shown : undefined}>
        <ul className={styles.nav__links}>
            <li><a onClick={props.close} href="#">Features</a></li>
            <li><a onClick={props.close} href="#">Pricing</a></li>
            <li><a onClick={props.close} href="#">Resources</a></li>
        </ul>
        <hr/>
        <button className={styles.login}>Login</button>
        <button className={styles.signup}>Sign Up</button>
    </nav>
}