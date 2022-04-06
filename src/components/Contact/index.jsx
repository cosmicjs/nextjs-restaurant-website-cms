import Image from 'next/image';
import cn from 'classnames';

import SubHeading from 'components/SubHeading';
import SocialMedia from 'components/Contact/SocialMedia';

import images from '../../constants/images';

import styles from './styles.module.scss';

const Contacts = () => (
  <div className={cn('app_bg', 'app_wrapper', 'section_padding')} id='contact'>
    <div className='app_wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className={cn( styles.contact_title,'headtext_cormorant' )}>Contact Us</h1>
      <div className={cn(styles.contact_title, 'app_wrapper_content')}>
        <p className='opensans'>+1 212-344-1230</p>
        <p className='opensans'>+1 212-555-1230</p>
        <p className={cn( styles.contact_hours,'cormorant' )}>Opening Hours</p>
        <p className='opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <h1 className={cn(styles.contact_title ,'headtext_cormorant' )}>Find Us</h1>
      <div className='app_wrapper_content'>
        <p className='opensans'>Address: 9 W 53rd St, New York, NY 10019, USA</p>
      </div>
      <div className={styles.contact_social}>
        <SocialMedia />
      </div>
    </div>
    <div className='app_wrapper_img'>
      <div className={cn(styles.wrapper_img, 'img_padding')} >
        <Image src={images.laurels} alt='find_us_img' />
      </div>
    </div>
  </div>
);

export default Contacts;