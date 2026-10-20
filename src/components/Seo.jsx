import { Helmet } from 'react-helmet-async'
import { site, absoluteUrl } from '../config/site.js'
import { useLang } from '../i18n/index.js'
import { ui } from '../i18n/ui.js'
import { trackPageView } from '../lib/analytics.js'

// `alternates`: la misma página en cada idioma ({ es: '/', en: '/en/' }), para los hreflang.
export default function Seo({
  title,
  description,
  path = '/',
  alternates,
  image = site.defaultImage,
  imageAlt,
  imageWidth = site.defaultImageWidth,
  imageHeight = site.defaultImageHeight,
  type = 'website',
  noindex = false,
  jsonLd = [],
}) {
  const lang = useLang()
  const t = ui[lang]
  const otro = lang === 'en' ? ui.es : ui.en
  const fullTitle = title ? `${title} | ${site.name}` : site.name
  const desc = description ?? t.seo.description
  const alt = imageAlt ?? t.seo.imageAlt
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return (
    <Helmet onChangeClientState={(state) => trackPageView(state.title)}>
      <html lang={t.htmlLang} />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
      {!noindex &&
        alternates &&
        Object.entries(alternates).map(([l, p]) => <link key={l} rel="alternate" hrefLang={l} href={absoluteUrl(p)} />)}
      {!noindex && alternates && <link rel="alternate" hrefLang="x-default" href={absoluteUrl(alternates.es)} />}

      <meta property="og:type" content={type} />
      <meta property="og:locale" content={t.ogLocale} />
      <meta property="og:locale:alternate" content={otro.ogLocale} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      {imageWidth && <meta property="og:image:width" content={String(imageWidth)} />}
      {imageHeight && <meta property="og:image:height" content={String(imageHeight)} />}
      <meta property="og:image:alt" content={alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={alt} />

      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  )
}
