import Image from 'next/image';

import images from 'constants/images';

const LineBreak = () => {
  return (
    <div className='spoon_img'>
      <Image src={images?.spoon || images?.logo} alt="spoon_image" />
    </div>
  )
}

export default LineBreak;