// import { GoogleMapsEmbed } from '@next/third-parties/google'

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d239.59495982027408!2d108.2307389!3d16.0904127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d53c213a13%3A0x795c3bc00085df5a!2zMTk4OSBCRUVSIC0gQmlhIFRo4bunIEPDtG5n!5e0!3m2!1svi!2s!4v1727641445122!5m2!1svi!2s"
      width={600}
      height={450}
      // style="border:0;"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

    // <GoogleMapsEmbed
    //   apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}
    //   height={200}
    //   width="100%"
    //   mode="place"
    //   q="36RJ+68 Sơn Trà, Đà Nẵng, Việt Nam"
    // />
  )
}

export default GoogleMap
