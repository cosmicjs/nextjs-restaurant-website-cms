import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import styles from './styles.module.scss'

const SocialMedia = () => {
  return (
    <div className={styles.social_links_icons}>
      <FiFacebook
        className={styles.social_icon}
        onClick={(e) => {
          e.preventDefault()
          window.open('https://www.facebook.com/1989.craftbeer', '_blank')
        }}
      />
      <FiTwitter
        className={styles.social_icon}
        onClick={(e) => {
          e.preventDefault()
          window.open('https://x.com/1989craftbeer', '_blank')
        }}
      />
      <FiInstagram
        className={styles.social_icon}
        onClick={(e) => {
          e.preventDefault()
          window.open('https://www.instagram.com/1989.craft.beer', '_blank')
        }}
      />
    </div>
  )
}

export default SocialMedia
