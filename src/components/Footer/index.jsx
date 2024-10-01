import Image from "next/legacy/image"
import Link from 'next/link'

import styles from './styles.module.scss'

const Footer = ({ children }) => (
  <footer className={styles.footer}>
    {children}

    <div className={styles.footer_copyright}>
      <p className="opensans">&copy; 2022-2024 | 1989s Solutions Co. Ltd</p>
    </div>
  </footer>
)

export default Footer
