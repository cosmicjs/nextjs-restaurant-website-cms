import Cosmic from 'cosmicjs';

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const bucket = Cosmic().bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
});

const is404 = (error) => /not found/i.test(error.message);

export async function getAllDataWithSlug() {
  const params = {
    type: 'menu',
    props: 'slug',
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getDataFromBucket(preview) {
  const params = {
    type: 'header',
    props: 'title,slug,metadata,created_at',
    sort: '-created_at',
    ...(preview && { status: 'all' }),
  }
  const data = await bucket.getObjects(params)
  return data.objects
}