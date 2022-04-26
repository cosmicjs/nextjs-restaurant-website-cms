# Restaurant Website with Next.js and Cosmic

To build this app, we’re going to use the following technologies:

- [Next.js](https://nextjs.org/docs) - A React framework for production that makes it easy to spin up a full-stack application.
- [Cosmic](https://www.cosmicjs.com/) - A Headless CMS enables the independence of the data (content) layer and gives us the ability to quickly manage template content.
- [Sass](https://sass-lang.com/) -  A stable, and powerful professional-grade CSS extension language.

### Links
- [Read how the template was built](https://www.cosmicjs.com/articles/how-to-build-a-restaurant-website-with-nextjs)
- [Install the App Template ](https://www.cosmicjs.com/apps/nextjs-restaurant-website) 
- [View the live demo](https://nextjs-restaurant-website-cms.vercel.app/)

![template](https://user-images.githubusercontent.com/34789741/164322014-c30d57f2-e00f-42dc-997a-fa4ba39803ce.gif)

## Getting started

### Environment Variables

You'll need to create an .env file in the root of the project. Log in to Cosmic and from Bucket Settings > API Access take the following values:

```bash
//.env
COSMIC_BUCKET_SLUG=your_cosmic_slug
COSMIC_READ_KEY=your_cosmic_read_key
```

Install the dependencies with
```bash
npm install
# or
yarn 
```

Then run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## Deploy on Vercel

<p>Use the following button to deploy to <a href="https://vercel.com/" rel="noopener noreferrer" target="_blank">Vercel</a>. You will need to add your Bucket API access keys as environment variables. Find these in <em>Bucket Settings &gt; API Access</em><em>.</em></p>
<p>
<a href="https://vercel.com/import/git?c=1&s=https://vercel.com/import/git?c=1&s=https://github.com/cosmicjs/nextjs-restaurant-website-cms&env=COSMIC_BUCKET_SLUG,COSMIC_READ_KEY" rel="noopener noreferrer" target="_blank"><img src="https://cdn.cosmicjs.com/d3f0d5e0-c064-11ea-9a05-6f8a16b0b14c-deploy-to-vercel.svg" style="width: 100px;" class="fr-fic fr-dib fr-fil"></a>
</p>

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Your feedback and contributions are welcome!
