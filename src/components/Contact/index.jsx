import Image from 'next/image'
import cn from 'classnames'

import SubHeading from 'components/SubHeading'
import SocialMedia from 'components/Contact/SocialMedia'

import styles from './styles.module.scss'
import GoogleMap from 'components/GoogleMap'
import { GiGreenhouse, GiPhone } from 'react-icons/gi'

const Contacts = ({ info }) => {
  return (
    <div
      className={cn('app_bg', 'app_wrapper', 'section_padding')}
      id="contact"
    >
      <div className={cn('app_container', 'app_wrapper')}>
        <div
          className={cn(
            styles.contact_info,
            'app_wrapper_info',
            'max-width: 1200px;'
          )}
        >
          <SubHeading title={info?.metadata?.section} />
          <h1 className="headtext_cormorant">{info?.metadata?.title}</h1>
          <div className={cn(styles.contact_title, 'app_wrapper_content')}>
            <p className="opensans">{info?.metadata?.intro}</p>
            <div className="app_wrapper_content">
              <div className="opensans">
                <GiGreenhouse />
                &nbsp;Address:&nbsp;{info?.metadata?.details?.[1]?.intro}
              </div>
              {info?.metadata?.sub_intro && (
                <div className={cn(styles.contact_sub_intro, 'opensans')}>
                  <GiPhone />
                  <a href={`tel:${info.metadata.sub_intro}`}>
                    &nbsp;Tel:&nbsp;{info.metadata.sub_intro}
                  </a>
                </div>
              )}
            </div>
            <p className={cn(styles.contact_hours, 'cormorant')}>
              {info?.metadata?.details?.[0]?.title}
            </p>
            <p className={cn(styles.contact_title, 'opensans')}>
              {info?.metadata?.details?.[0]?.intro}
            </p>
          </div>
          <h1 className={cn(styles.follow_title, 'headtext_cormorant')}>
            {info?.metadata?.details?.[1]?.title}
          </h1>
          <div className={styles.contact_social}>
            <SocialMedia />
          </div>
        </div>

        <GoogleMap />
        {/* <div className={cn(styles.wrapper_img, 'img_padding')}>
          <Image
            src={info?.metadata?.picture?.imgix_url}
            alt="find_us_img"
            objectFit="contain"
            width={500}
            height={550}
          />
        </div> */}
      </div>
    </div>
  )
}

export default Contacts
