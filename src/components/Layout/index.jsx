import Navbar from 'components/Navbar';

import styles from './styles.module.scss';

const Layout = ({children, navbar}) => (
    <main className={styles.layout}>
      <Navbar navbarInfo={navbar} />
      <section className={styles.container}>
        {children}
      </section>
    </main>
);

export default Layout;