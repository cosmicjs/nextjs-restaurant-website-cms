import { createBucketClient } from '@cosmicjs/sdk'

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const cosmic = createBucketClient({
  bucketSlug: BUCKET_SLUG,
  readKey: READ_KEY,
})

const is404 = (error) => /not found/i.test(error.message)

export async function getAllDataWithSlug() {
  const data = await cosmic.objects
    .find({
      type: 'menu',
    })
    .props(['slug'])

  return data.objects
}

export async function getDataFromBucket(preview) {
  const data = await cosmic.objects
    .find({
      type: 'sections',
    })
    .depth(1)
    .props(['title', 'slug', 'metadata', 'created_at'])
    .sort('-created_at')

  const _navigation = await cosmic.objects
    .find({
      type: 'navigation',
    })
    .props(['title', 'slug', 'metadata'])

  const _about = await cosmic.objects
    .find({
      type: 'about',
    })
    .props(['title', 'slug', 'metadata'])

  const _food = await cosmic.objects
    .find({
      type: 'food',
    })
    .depth(1)
    .props(['title', 'slug', 'metadata'])

  const _drink = await cosmic.objects
    .find({
      type: 'drink',
    })
    .depth(1)
    .props(['title', 'slug', 'metadata'])

  return [
    ...data.objects,
    ..._navigation.objects,
    ..._about.objects,
    ..._food.objects,
    ..._drink.objects,
  ]
}
