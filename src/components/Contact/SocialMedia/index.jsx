import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';;

import styles from './styles.module.scss';

const SocialMedia = () => {
  return (
    <div className={styles.social_links_icons}>
      <FiFacebook className={styles.social_icon}/>
      <FiTwitter className={styles.social_icon}/>
      <FiInstagram className={styles.social_icon}/>
    </div>
  )
}

export default SocialMedia;