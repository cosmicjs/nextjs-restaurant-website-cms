import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import images from '../../constants/images';

import styles from './styles.module.scss';

const AboutUs = ({info}) =>{
  const {about, about_intro, title, title_intro, initials, picture } = info?.metadata;

  return (
    <div className={cn( styles.about,'app_bg','flex_center','section_padding' )} id='about'>
      <div className={cn( styles.about_overlay,'flex_center' )}>
        <div className={styles.about_overlay_img}>
          <Image src={initials?.imgix_url || images.G} layout='fill' objectFit='cover' alt='overlay' />
        </div>
      </div>
      <div className={cn(styles.about_content, 'flex_center')}>
        <div className={styles.about_content_about}>
          <h1 className='headtext_cormorant'>{about || 'About Us'}</h1>
          <div className='spoon_img'>
            <Image src={images.spoon} alt="spoon_image" />
          </div>
          <p className='opensans'>{about_intro || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
          <Link
              href='#intro'
              passHref
            >
            <button type='button' className='custom_button'>Know More</button>
          </Link>
        </div>
        <div className={cn(styles.about_content_knife, 'flex_center')}>
          <div className={styles.about_content_img}>
            <Image src={picture?.imgix_url || images.knife} layout='fill' objectFit='contain' alt='about_knife' />
          </div>
        </div>
        <div className={styles.about_content_history}>
          <h1 className='headtext_cormorant'>{title || 'Our History'}</h1>
          <div className='spoon_img'>
            <Image src={images.spoon} alt="spoon_image" />
          </div>
          <p className='opensans'>{title_intro || 'Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.'}</p>
          <Link
              href='#gallery'
              passHref
            >
            <button type='button' className='custom_button'>Know More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;