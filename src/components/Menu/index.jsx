import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';
import MenuItem from 'components/Menu/Menuitem';
import Button from 'components/Button';

import chooseByType from 'utils/chooseValueByType';

import styles from './styles.module.scss';

const SpacialMenu = ({ info }) => {
  const food = chooseByType(info, 'food');
  const drink = chooseByType(info, 'drink');

  return (
    <div className={cn(styles.special, 'flex_center', 'section_padding')} id='menu'>
      <div className={styles.special_title}>
        <SubHeading title={food?.metadata?.section?.[0]?.metadata?.section} />
        <h1 className='headtext_cormorant'>{food?.metadata?.section?.[0]?.metadata?.title}</h1>
      </div>
      <div className={styles.special_menu}>
      {food && <div className={cn(styles.special_menu_wine,  'flex_center')}>
          <p className={styles.special_menu_heading}>{food?.metadata?.title}</p>
          <div className={styles.special_menu_items}>
          {food?.metadata?.menu?.map(({title, slug, price, tags}) => (
            <div className={styles.menu_item_wrapper} key={slug}>
              <Link href={info ? `/menu/${slug}?#menu-intro` : '/#menu'} passHref>
                <a>
                  <MenuItem title={title} price={price} tags={tags} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>}
      <div className={styles.special_menu_img}>
        <Image src={food?.metadata?.section?.[0]?.metadata?.picture?.imgix_url} objectFit='contain' layout='fill' alt='menu_img' />
      </div>
      {drink && <div className={cn(styles.special_menu_cocktails,  'flex_center')}>
        <p className={styles.special_menu_heading}>{drink?.metadata?.title}</p>
        <div className={styles.special_menu_items}>
          {drink?.metadata?.menu?.map(({title, slug, price, tags}) => (
            <div key={slug}>
              <Link href={info ? `/menu/${slug}?#menu-intro` : '/#menu'} passHref>
                <a>
                  <MenuItem title={title} price={price} tags={tags} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>}
    </div>
    <Button name='View More' path='#gallery' />
  </div>
  )
}

export default SpacialMenu;