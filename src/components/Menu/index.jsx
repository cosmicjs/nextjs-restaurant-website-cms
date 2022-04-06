import cn from 'classnames';
import Image from 'next/image';
import SubHeading from 'components/SubHeading';
import MenuItem from 'components/MenuItem';

import { images, data } from '../../constants';

import styles from './styles.module.scss';

const SpacialMenu = () => {
  return (
    <div className={cn(styles.specialMenu, 'flex_center', 'section_padding')} id='menu'>
      <div className={styles.specialMenu_title}>
      <SubHeading title='Menu that fits your palatte' />
      <h1 className='headtext_cormorant'>Today&apos;s Special</h1>
    </div>

      <div className={styles.specialMenu_menu}>
      <div className={cn(styles.specialMenu_menu_wine,  'flex_center')}>
          <p className={styles.specialMenu_menu_heading}>Wine & Beer</p>
          <div className={styles.specialMenu_menu_items}>
          {data?.wines?.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div className={styles.specialMenu_menu_img}>
        <Image src={images.menu} alt='menu_img' />
      </div>
      <div className={cn(styles.specialMenu_menu_cocktails,  'flex_center')}>
          <p className={styles.specialMenu_menu_heading}>Cocktails</p>
          <div className={styles.specialMenu_menu_items}>
          {data?.cocktails?.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className={styles.button_wrapper}>
      <button type='button' className='custom_button'>View More</button>
    </div>
  </div>
  )
}

export default SpacialMenu;