import Image from 'next/image';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';

import images from '../../constants/images';

import styles from './styles.module.scss';

const Intro = () => {
  return (
    <div className={cn('app_bg', 'app_wrapper', 'section_padding')}>
      <div className={cn('app_wrapper_img','app_wrapper_img_reverse')}>
        <div className={cn(styles.wrapper_img, 'img_padding')} >
          <Image
            src={images.chef}
            alt='intro_image'
            />
        </div>
    </div>
    <div className='app_wrapper_info'>
      <SubHeading title="Chef's word" />
      <h1 className='headtext_cormorant'>What we believe in</h1>
        <div className={styles.intro_content}>
          <div className={styles.intro_content_quote}>
            <p className='opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>
          <p className='opensans'> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
        </div>
        <div className={styles.intro_sign}>
          <p>Kevin Luo</p>
          <p className='opensans'>Chef & Founder</p>
          <Image src={images.sign} alt='sign_image' />
        </div>
      </div>
    </div>
  )
}

export default Intro;