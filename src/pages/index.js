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
import handleChooseByValue from 'utils/chooseByValue';

function Home({ data }) {
  console.log( 'data',handleChooseByValue(data, 'menu') );
  const { metadata } = data[0];

  return (
    <>
      <Head>
        <title>Cosmic Template</title>
        <meta name="description" content="Create template using cosmic.js CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navbar={handleChooseByValue(data, 'menu')}>
        <Header info={handleChooseByValue(data, 'header')}/>
        <AboutUs />
        <SpacialMenu />
        <Intro />
        <Gallery />
      </Layout>
      <Footer>
        <VideoIntro />
        <Contacts />
      </Footer>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const data = (await getInfoForHome('header', preview)) || [];
  return {
    props: { data },
  }
}

export default Home;