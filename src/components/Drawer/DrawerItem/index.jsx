import styles from './styles.module.css'

const DrawerItem = ({ selected, href, children }) => {
    return (
        <li className={styles.item}>
            <a className={selected ? styles.selectedLink : styles.unselectedLink} href={href}>
                {children}
            </a>
        </li>
    )
}

export default DrawerItem
