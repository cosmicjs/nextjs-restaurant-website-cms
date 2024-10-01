import styles from './styles.module.scss'

const Footer = ({ children }) => (
  <footer className={styles.footer}>
    {children}

    <div className={styles.footer_copyright}>
      <p className="opensans">&copy; 2022-2024 | 1989 BEER</p>
    </div>
  </footer>
)

export default Footer
