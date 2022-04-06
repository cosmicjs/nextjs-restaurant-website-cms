import Image from 'next/image';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';
import images from '../../constants/images';

import styles from './styles.module.scss';

const Contact = () => (
  <div className={cn('app_bg', 'app_wrapper', 'section_padding')} id='contact'>
    <div className='app_wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext_cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className='app_wrapper_content'>
        <p className='opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className='cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className='opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type='button' className='custom_button' style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>
    <div className='app_wrapper_img'>
      <div className={cn(styles.wrapper_img, 'img_padding')} >
        <Image src={images.laurels} alt='find_us_img' />
      </div>
    </div>
  </div>
);

export default Contact;