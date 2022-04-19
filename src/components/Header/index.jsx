import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import SubHeading from 'components/SubHeading';
import images from 'constants/images';

import styles from './styles.module.scss';

const Header = ({ info }) => {
  const { section, title, intro, baner } = info?.metadata;

  return (
    <div className={cn(styles.header, 'app_wrapper', 'section_padding')} id='home'>
      <div className={styles.wrapper_info}>
        <SubHeading title={section || 'Chase the new flavour'} /> 
        <h1 className={styles.header_h1}>{title || 'The Key To Fine Dining'}</h1>
        <p className={cn(styles.header_p, 'opensans')}>{intro || 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus' }</p>
        <Link
          href='#menu'
          passHref
          >
          <button type='button' className='custom_button'>Explore Menu</button>
        </Link>
      </div>
      <div className='app_wrapper_img'>
        <div className={cn(styles.wrapper_img, 'img_padding')} >
          <Image
            src={baner?.imgix_url || images?.header}
            alt='header_img'
            objectFit='cover'
            width={600}
            height={500}
            />
        </div>
      </div>
    </div>
  )
};

export default Header;