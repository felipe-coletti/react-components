import { Link } from '../../components/Link'
import styles from './styles.module.css'

export const Home = () => {
    return (
        <div className='container'>
            <ul className={styles.list}>
                <li>
                    <Link href='/drawer'>Drawer</Link>
                </li>
                <li>
                    <Link href='/modal'>Modal</Link>
                </li>
                <li>
                    <Link href='/rating'>Rating</Link>
                </li>
            </ul>
        </div>
    )
}
