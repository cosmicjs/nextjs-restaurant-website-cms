import Image from 'next/image';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';

import images from 'constants/images';

import styles from './styles.module.scss';

const Intro = ({ info }) => {
  return (
    <div className={cn('app_bg', 'app_wrapper', 'section_padding')} id='intro'>
      <div className={cn('app_wrapper_img','app_wrapper_img_reverse')}>
        <div className={cn(styles.wrapper_img, 'img_padding')} >
          <Image
            src={info?.metadata?.picture?.imgix_url || images.chef}
            alt='intro_image'
            objectFit='cover'
            width={550}
            height={600}
            />
        </div>
    </div>
    <div className='app_wrapper_info'>
      <SubHeading title={info?.metadata?.section || 'Our Value'} />
        <h1 className='headtext_cormorant'>{info?.metadata?.title || 'We believe in'}</h1>
        <div className={styles.intro_content}>
          <div className={styles.intro_content_quote}>
            <p className='opensans'>{info?.metadata?.intro || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .'}</p>
          </div>
        </div>
        <div className={styles.intro_sign}>
          <p>{info?.metadata?.sub_info || 'Kevin Luo'}</p>
          <p className='opensans'>Chef & Founder</p>
          <Image src={images.sign} alt='sign_image' objectFit='cover' />
        </div>
      </div>
    </div>
  )
}

export default Intro;