import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';
import MenuItem from 'components/Menu/Menuitem';

import { images } from '../../constants';

import styles from './styles.module.scss';

const SpacialMenu = ({ menu }) => {
  
  return (
    <div className={cn(styles.special, 'flex_center', 'section_padding')} id='menu'>
      <div className={styles.special_title}>
        <SubHeading title={menu?.[0]?.metadata?.sections?.[0]?.metadata?.section || 'Menu'} />
        <h1 className='headtext_cormorant'>{menu?.[0]?.metadata?.sections?.[0]?.metadata?.title || 'Special'}</h1>
    </div>
      <div className={styles.special_menu}>
      <div className={cn(styles.special_menu_wine,  'flex_center')}>
          <p className={styles.special_menu_heading}>{menu?.[1]?.metadata?.sub_menu_title || 'Wine'}</p>
          <div className={styles.special_menu_items}>
          {menu?.[1]?.metadata?.sub_menu?.map(({title, price, tags}) => (
            <div key={title}>
              <Link href={menu ? `/menu/${title}` : '#menu'} passHref>
                <a>
                  <MenuItem title={title} price={price} tags={tags} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.special_menu_img}>
        <Image src={menu?.[0]?.metadata?.sections?.[0]?.metadata?.picture?.imgix_url || images.menu} objectFit='contain' layout='fill' alt='menu_img' />
      </div>
      <div className={cn(styles.special_menu_cocktails,  'flex_center')}>
        <p className={styles.special_menu_heading}>{menu?.[0]?.metadata?.sub_menu_title || 'Cocktails'}</p>
        <div className={styles.special_menu_items}>
          {menu?.[0]?.metadata?.sub_menu?.map(({title, price, tags}) => (
            <Link key={title} href={menu ? `/menu/${price}` : '#menu'} passHref>
              <a>
                <MenuItem key={title} title={title} price={price} tags={tags} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <Link
      href='#gallery'
      passHref
      >
      <div className={styles.button_wrapper}>
        <button type='button' className='custom_button'>View More</button>
      </div>
    </Link>
  </div>
  )
}

export default SpacialMenu;