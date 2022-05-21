import Image from 'next/image';
import cn from 'classnames';
import LineBreak from 'components/SubHeading/LineBreak';
import Button from 'components/Button';

import styles from './styles.module.scss';

const AboutUs = ({ info }) => {
  return (
    <div className={cn( styles.about,'app_bg','flex_center','section_padding' )} id='about'>
      <div className={cn( styles.about_overlay,'flex_center' )}>
        <div className={styles.about_overlay_img}>
          <Image src={info?.metadata?.initials?.imgix_url} layout='fill' objectFit='cover' alt='overlay'/>
        </div>
      </div>
      <div className={cn(styles.about_content, 'flex_center')}>
        <div className={styles.about_content_about}>
          <h1 className='headtext_cormorant'>{info?.metadata?.about}</h1>
          <LineBreak />
          <p className='opensans'>{info?.metadata?.about_intro}</p>
          <Button name='Know More' path='#intro' />
        </div>
        <div className={cn(styles.about_content_knife, 'flex_center')}>
          <div className={styles.about_content_img}>
            <Image src={info?.metadata?.picture?.imgix_url} layout='fill' objectFit='contain' alt='about_knife'  priority/>
          </div>
        </div>
        <div className={styles.about_content_history}>
          <h1 className='headtext_cormorant'>{info?.metadata?.title}</h1>
          <LineBreak />
          <p className='opensans'>{info?.metadata?.title_intro}</p>
          <Button name='Know More' path='#gallery' />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;