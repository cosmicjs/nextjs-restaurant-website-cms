import Head from 'next/head';
import Image from 'next/image';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';
import SpacialMenu from 'components/Menu';
import Intro from 'components/Intro';
import VideoIntro from 'components/VideoIntro';
import Gallery from 'components/Gallery';
import Contacts from 'components/Contact';

import { getInfoForHome } from 'lib/api';
import chooseByType from 'utils/chooseByValue';

function Home({ data }) {

  return (
    <>
      <Head>
        <title>Cosmic Template v1</title>
        <meta name="description" content="Create template using cosmic.js CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navbar={chooseByType(data, 'navigation')}>
        <Header info={chooseByType(data, 'header')}/>
        <AboutUs info={chooseByType(data, 'about')}/>
        <SpacialMenu menu={[chooseByType(data, 'cocktails'), chooseByType(data, 'wines')]}/>
        <Intro info={chooseByType(data, 'history')}/>
        <Gallery info={chooseByType(data, 'gallery')}/>
      </Layout>
      <Footer>
        <VideoIntro url={chooseByType(data, 'video')}/>
        <Contacts info={chooseByType(data, 'contact')}/>
      </Footer>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const data = (await getInfoForHome(preview)) || [];
  return {
    props: { data },
  }
}

export default Home;