import Head from 'next/head';
import Home from 'components/Home';
import Layout from 'components/Layout';
import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';
import SpacialMenu from 'components/Menu';
import Introduction from 'components/Introduction';
import VideoIntro from 'components/VideoIntro';
import Gallery from 'components/Gallery';
import Contacts from 'components/Contact';

import { getDataFromBucket } from 'lib/api';
import chooseByType from 'utils/chooseValueByType';

function Template({ data }) {
  return (
    <>
      <Head>
        <title>Next.js Restaurant CMS</title>
        <meta name="description" content="Create template using cosmic.js CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navbar={chooseByType(data, 'navigation')}>
        <Home info={chooseByType(data, 'header')}/>
        <AboutUs info={chooseByType(data, 'about')}/>
        <SpacialMenu info={[chooseByType(data, 'drink'), chooseByType(data, 'food')]}/>
        <Introduction info={chooseByType(data, 'history')}/>
        <Gallery info={[chooseByType(data, 'gallery'), chooseByType(data, 'food')]}/>
      </Layout>
      <Footer>
        <VideoIntro url={chooseByType(data, 'video')}/>
        <Contacts info={chooseByType(data, 'contact')}/>
      </Footer>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const data = (await getDataFromBucket(preview)) || [];
  return {
    props: { data },
  }
}

export default Template;