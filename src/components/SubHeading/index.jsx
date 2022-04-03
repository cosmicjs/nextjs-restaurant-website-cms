import Image from 'next/image';

import images from '../../constants/images';

import styles from './styles.module.scss';

const SubHeading = ({ title, image }) => (
  <div className={styles.sub_heading}>
    <p className='cormorant'>{title}</p>
    <Image src={images.spoon} width={40} height={30} alt="spoon_image" />
  </div>
);

export default SubHeading;