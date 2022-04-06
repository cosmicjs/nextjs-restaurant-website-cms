import { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

import styles from './styles.module.scss';

const Navbar = ({ menuItems }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(prev => !prev);
  }
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Image src={images.gericht} alt='logo' width={150} height={50}/>
      </div>
      <ul className={styles.navbar_links}>
        {menuItems?.map(({ name }) => (
          <li className={cn(styles.menu_item,'opensans')} key={name}>
            <Link href='#home'>{name}</Link>
          </li>
        ))}

        <li className={cn(styles.menu_item,'opensans')}><Link href='#home'>Home</Link></li>
        <li className={cn(styles.menu_item,'opensans')}><Link href='#about'>About</Link></li>
        <li className={cn(styles.menu_item,'opensans')}><Link href='#menu'>Menu</Link></li>
        <li className={cn(styles.menu_item,'opensans')}><Link href='#contact'>Contact</Link></li>
      </ul>
      <div className={styles.navbar_login}>
        <p className={cn(styles.menu_item,'opensans')}>
          <Link href='#contact' passHref>Book Table</Link>
        </p>
      </div>
      <div className={styles.navbar_smallscreen}>
        <GiHamburgerMenu className={styles.navbar_hamburger} onClick={handleToggle} />
        {toggleMenu && (
          <div className={cn(styles.navbar_smallscreen_overlay, 'slide_bottom', 'flex_center')}>
            <MdOutlineRestaurantMenu className={styles.overlay_close} onClick={handleToggle} />
            <ul className={styles.navbar_smallscreen_links}>
              <li onClick={handleToggle}><Link href='#home'>Home</Link></li>
              <li onClick={handleToggle}><Link href='#about'>About</Link></li>
              <li onClick={handleToggle}><Link href='#menu'>Menu</Link></li>
              <li onClick={handleToggle}><Link href='#contact'>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
