import { Helmet } from 'react-helmet-async'
import { site, absoluteUrl } from '../config/site.js'

export default function Seo({
  title,
  description = site.defaultDescription,
  path = '/',
  image = site.defaultImage,
  type = 'website',
  noindex = false,
  jsonLd = [],
}) {
  const fullTitle = title ? `${title} | ${site.name}` : site.name
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return (
    <Helmet>
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
      <meta name="twitter:card" content="summary_large_image" />

      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  )
}
