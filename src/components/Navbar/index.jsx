import { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import styles from './styles.module.scss';

const Navbar = ({ navbarInfo }) => {
  const { about, action, contact, home, menu, logo } = navbarInfo?.metadata;
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const navbarItems = [about, contact, home, menu];

  const handleToggle = () => {
    setToggleMenu( prev => !prev );
  };
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Image src={logo?.imgix_url || images.gericht} alt='logo' width={150} height={50}/>
      </div>
      <ul className={styles.navbar_links}>
        {navbarItems?.map((item) => (
          <li className={cn(styles.menu_item,'opensans')} key={item}>
            <Link href={`#${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.navbar_login}>
        <p className={cn(styles.menu_item,'opensans')}>
          <Link href='#contact' passHref>{action || 'Book Table'}</Link>
        </p>
      </div>
      <div className={styles.navbar_smallscreen}>
        <GiHamburgerMenu className={styles.navbar_hamburger} onClick={handleToggle} />
        {toggleMenu && (
          <div className={cn(styles.navbar_smallscreen_overlay, 'slide_bottom', 'flex_center')}>
            <MdOutlineRestaurantMenu className={styles.overlay_close} onClick={handleToggle} />
            <ul className={styles.navbar_smallscreen_links}>
              {navbarItems?.map(item => (
                <li onClick={handleToggle} key={item}>
                  <Link href={`#${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
