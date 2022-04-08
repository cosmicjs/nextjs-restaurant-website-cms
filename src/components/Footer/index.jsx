import React from 'react';
import styles from './styles.module.scss';

const Footer = ({children}) => {
  return (
    <footer className={styles.footer}>
      {children}
      <div className={styles.footer_copyright}>
        <p className='opensans'>{new Date().getFullYear()} Cosmic.js Templates. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;