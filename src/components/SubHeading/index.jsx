import Image from 'next/image';

import images from '../../constants/images';

import styles from './styles.module.scss';

const SubHeading = ({ title, image }) => (
  <div className={styles.sub_heading}>
    <p className='cormorant'>{title}</p>
    <div className='spoon_img'>
      <Image src={image || images.spoon} alt="spoon_image" />
    </div>
  </div>
);

export default SubHeading;