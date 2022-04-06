import Image from 'next/image';
import cn from 'classnames';

import images from '../../constants/images';

import styles from './styles.module.scss';

const AboutUs = () =>{
  return (
    <div className={cn( styles.aboutus,'app_bg','flex_center','section_padding' )} id='about'>
      <div className={cn( styles.aboutus_overlay,'flex_center' )}>
        <div className={styles.aboutus_overlay_img}>
          <Image src={images.G} alt='G_overlay' />
        </div>
      </div>
      <div className={cn(styles.aboutus_content, 'flex_center')}>
        <div className={styles.aboutus_content_about}>
          <h1 className='headtext_cormorant'>About Us</h1>
          <div className='spoon_img'>
            <Image src={images.spoon} alt="spoon_image" />
          </div>
          <p className='opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type='button' className='custom_button'>Know More</button>
        </div>
        <div className={cn(styles.aboutus_content_knife, 'flex_center')}>
          <div className={styles.aboutus_content_img}>
            <Image src={images.knife} alt='about_knife' />
          </div>
        </div>
        <div className={styles.aboutus_content_history}>
          <h1 className='headtext_cormorant'>Our History</h1>
          <div className='spoon_img'>
            <Image src={images.spoon} alt="spoon_image" />
          </div>
          <p className='opensans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          <button type='button' className='custom_button'>Know More</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;