import Image from 'next/image';
import cn from 'classnames';

import SubHeading from 'components/SubHeading';
import images from '../../constants/images';

import styles from './styles.module.scss';

const Header = ({image: url, intro, name, title}) => (
  <div className={cn(styles.header, 'app_wrapper', 'section_padding')} id="home">
    <div className={styles.wrapper_info}>
      <SubHeading title="Chase the new flavour" /> 
      <h1 className={styles.header_h1}>{name || 'The Key To Fine Dining'}</h1>
      <p className={cn(styles.header_p, 'opensans')}>{intro || 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus' }</p>
      <button type="button" className='custom_button'>Explore Menu</button>
    </div>
    <div className='app_wrapper_img'>
      <div className={cn(styles.wrapper_img, 'img_padding')} >
        <Image
          src={url || images.header}
          alt="header_img"
          />
      </div>
    </div>
  </div>
);

export default Header;