import Image from 'next/image';
import cn from 'classnames';

import SubHeading from 'components/SubHeading';
import SocialMedia from 'components/Contact/SocialMedia';

import images from '../../constants/images';

import styles from './styles.module.scss';

const Contacts = ({info}) => (
  <div className={cn('app_bg', 'app_wrapper', 'section_padding')} id='contact'>
    <div className='app_wrapper_info'>
      <SubHeading title={info?.metadata?.section || 'Contact'} />
      <h1 className={cn( styles.contact_title,'headtext_cormorant' )}>{info?.metadata?.title || 'Contact Us'}</h1>
      <div className={cn(styles.contact_title, 'app_wrapper_content')}>
        <p className='opensans'>{info?.metadata?.intro || '+1 212-344-1230'}</p>
        <p className={cn( styles.contact_hours,'cormorant' )}>{info?.metadata?.details?.[0]?.title || 'Opening Hours'}</p>
        <p className='opensans'>{info?.metadata?.details?.[0]?.intro}</p>
      </div>
      <h1 className={cn( styles.contact_title,'headtext_cormorant' )}>{info?.metadata?.details?.[1]?.title || 'Find Us'}</h1>
      <div className='app_wrapper_content'>
        <p className='opensans'>{info?.metadata?.details?.[1]?.intro || 'Address: 9 W 53rd St, New York, NY 10019, USA'}</p>
      </div>
      <div className={styles.contact_social}>
        <SocialMedia />
      </div>
    </div>
    <div className='app_wrapper_img'>
      <div className={cn(styles.wrapper_img, 'img_padding')} >
        <Image
          src={info?.metadata?.picture?.imgix_url || images.laurels}
          alt='find_us_img'
          objectFit='cover'
          width={550}
          height={600} />
      </div>
    </div>
  </div>
);

export default Contacts;