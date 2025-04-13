import styles from './styles.module.css'

const DrawerList = ({ children }) => {
    return <ul className={styles.list}>{children}</ul>
}

export default DrawerList
