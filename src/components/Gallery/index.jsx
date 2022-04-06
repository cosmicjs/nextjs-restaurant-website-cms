import { useRef } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import SubHeading from 'components/SubHeading';
import images from '../../constants/images';

import styles from './styles.module.scss';

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className={cn(styles.app_gallery, 'flex_center')}>
      <div className={styles.app_gallery_content}>
        <SubHeading title='Instagram' />
        <h1 className='headtext_cormorant'>Photo Gallery</h1>
        <p className={cn('opensans')} style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom_button'>View More</button>
      </div>
      <div className={styles.app_gallery_images}>
        <div className={styles.app_gallery_images_container} ref={scrollRef}>
          {[ images.gallery01,images.gallery02,images.gallery03,images.gallery04 ].map( ( image,index ) => (
            <div className={cn(styles.app_gallery_images_card, 'flex_center' )} key={`gallery_image-${index + 1}`}>
              <Image src={image} alt='gallery_image' />
              <BsInstagram className={styles.gallery_image_icon} />
            </div>
          ))}
        </div>
        <div className={styles.app_gallery_images_arrows}>
          <BsArrowLeftShort className={styles.gallery_arrow_icon} onClick={() => scroll('left')} />
          <BsArrowRightShort className={styles.gallery_arrow_icon} onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;