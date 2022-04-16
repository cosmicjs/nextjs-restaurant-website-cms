import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from 'components/Layout';
import Footer from 'components/Footer';
import Contacts from 'components/Contact';
import MenuIntro from 'components/MenuIntro';
import VideoIntro from 'components/VideoIntro';
import Gallery from 'components/Gallery';

import { getAllDataWithSlug,getDataFromBucket } from 'lib/api';
import chooseByType from 'utils/chooseValueByType';

function Menu({ data }) {
  const {
    query: {slug},
  } = useRouter();

  return (
    <>
      <Head>
        <title>Next.js Restaurant CMS</title>
        <meta name="description" content="Create template using cosmic.js CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navbar={chooseByType(data, 'navigation')}>
        <MenuIntro info={[chooseByType(data, 'food'), chooseByType(data, 'drink')]} slug={slug} />
        <Gallery info={[chooseByType(data, 'gallery'), chooseByType(data, 'food')]}/>
      </Layout>
      <Footer>
        <VideoIntro url={chooseByType(data, 'sushi')}/>
        <Contacts info={chooseByType(data, 'contact')}/>
      </Footer>
    </>
  )
}

export async function getStaticProps({ params, preview = null }) {
  const data = (await getDataFromBucket(preview)) || [];
  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const dataWithSlug = (await getAllDataWithSlug()) || [];
  
  return {
    paths: dataWithSlug.map((menu) => `/menu/${menu.slug}`),
    fallback: true,
  }
}

export default Menu;