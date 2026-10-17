import { Helmet } from 'react-helmet-async'
import { site, absoluteUrl } from '../config/site.js'
import { trackPageView } from '../lib/analytics.js'

export default function Seo({
  title,
  description = site.defaultDescription,
  path = '/',
  image = site.defaultImage,
  imageAlt = site.defaultImageAlt,
  imageWidth = site.defaultImageWidth,
  imageHeight = site.defaultImageHeight,
  type = 'website',
  noindex = false,
  jsonLd = [],
}) {
  const fullTitle = title ? `${title} | ${site.name}` : site.name
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return (
    <Helmet onChangeClientState={(state) => trackPageView(state.title)}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}

      <meta property="og:type" content={type} />
      <meta property="og:locale" content={site.locale} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      {imageWidth && <meta property="og:image:width" content={String(imageWidth)} />}
      {imageHeight && <meta property="og:image:height" content={String(imageHeight)} />}
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  )
}
