import AboutUs from 'components/AboutUs'
import Contacts from 'components/Contact'
import Footer from 'components/Footer'
import Gallery from 'components/Gallery'
import Home from 'components/Home'
import Introduction from 'components/Introduction'
import Layout from 'components/Layout'
import SpacialMenu from 'components/Menu'
import VideoIntro from 'components/VideoIntro'
import Head from 'next/head'

import { getDataFromBucket } from 'lib/api'
import chooseByType from 'utils/chooseValueByType'

function TopPage({ data }) {
  return (
    <>
      <Head>
        <title>1989s craftbeer</title>
        <meta name="description" content="Da Nang local craft beer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navbar={chooseByType(data, 'navigation')}>
        <Home info={chooseByType(data, 'header')} />
        <AboutUs info={chooseByType(data, 'about')} />
        <SpacialMenu
          info={[chooseByType(data, 'drink'), chooseByType(data, 'food')]}
        />
        <Gallery
          info={[chooseByType(data, 'gallery'), chooseByType(data, 'drink')]}
          // info={data}
        />
        <VideoIntro url={chooseByType(data, 'video')} />
      </Layout>
      <Footer>
        <Introduction info={chooseByType(data, 'history')} />
        <Contacts info={chooseByType(data, 'contact')} />
      </Footer>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const data = (await getDataFromBucket(preview)) || []
  return {
    props: { data },
  }
}

export default TopPage
