## Partial Prerendering

This app is a POC of the new Partial Prerender (PPR) feature in Next.js 14.

What PPR does is it renders a page statically and if there are any Suspense boudaries on the page, it will render the fallback into the static HTML of the page,
provided that the suspended component is an async server component with a Suspense compatible data fetching mechanism.

Once this component actually renders, it will be streamed into its suspense hole by React.

This means that we can generate pages statically, leaving holes (or islands) for user-specific content. You can serve this static page from a CDN then. Vercel calls this "a shell".

The PPR mechanism is demonstrated here with the "You May Also Like" carousel that pretends to be user-specific. The static page will contain a carousel skeleton in
its place, then you will see the actual carousel getting streamed in with an artificial delay.
All the remaining content - hero and other carousels - are statically rendered on build time. They are server components that fetch their own data.

Movie tiles in the carousels are client components - interactive buttons that you can click. And yes, those aren't real carousels.

## Getting Started

You need a TMDB read token to run this app locally.

It's free, just sign up, then go to [account settings](https://www.themoviedb.org/settings/api)
and copy your token (not the API key, the API Read Access Token below it).

Create `.env.local` file and set TMDB API token

```
TMDB_API_TOKEN=your_token
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [PPR Preview](https://nextjs.org/blog/next-14#partial-prerendering-preview)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Remember to set ENV VARS in project settings.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
