import { useEffect } from 'react'
import styles from './styles.module.css'
import { Icon } from '@iconify/react'

const DrawerRoot = ({ isOpen, onClose, children }) => {
	useEffect(() => {
		if (isOpen) {
			const handleEsc = event => {
				if (event.key === 'Escape') {
					onClose()
				}
			}

			window.addEventListener('keydown', handleEsc)

			return () => {
				window.removeEventListener('keydown', handleEsc)
			}
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	const handleOverlayClick = e => {
		if (e.target === e.currentTarget) {
			onClose?.()
		}
	}

	return (
		<div className={styles.container} onClick={handleOverlayClick}>
			<div className={styles.contentArea}>
				<div className={styles.topArea}>
					<button className={styles.button} title='Fechar' onClick={onClose}>
						<Icon icon='tabler:x' />
					</button>
				</div>
				{children}
			</div>
		</div>
	)
}

export default DrawerRoot
