import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import SubHeading from 'components/SubHeading';

import styles from './styles.module.scss';

const Gallery = ({info}) => {
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
    <div className={cn(styles.gallery, 'flex_center')} id='gallery'>
      <div className={styles.gallery_content}>
        <SubHeading title={info?.metadata?.section || 'Instagram'} />
        <h1 className='headtext_cormorant'>{info?.metadata?.title || 'Gallery'}</h1>
        <p className={cn(styles.gallery_content_intro || 'opensans')}>{info?.metadata?.intro || 'Lorem ipsum dolor sit amet.'}</p>
        <Link
          href='#menu'
          passHref
          >
          <button type='button' className='custom_button'>View More</button>
        </Link>
      </div>
      <div className={styles.gallery_images}>
        <div className={styles.gallery_images_container} ref={scrollRef}>
          {info?.metadata?.details?.map( ( { title, picture },index ) => (
            <Link key={title} href={info ? `/menu/${title}` : '#menu_intro'} passHref>
              <a>
                <div className={cn(styles.gallery_images_card, 'flex_center' )} key={index}>
                  <Image src={picture?.imgix_url} layout='fill' objectFit='cover' alt='gallery_image' />
                  <BsInstagram className={styles.gallery_image_icon} />
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className={styles.gallery_images_arrows}>
          <BsArrowLeftShort className={styles.gallery_arrow_icon} onClick={() => scroll('left')} />
          <BsArrowRightShort className={styles.gallery_arrow_icon} onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;