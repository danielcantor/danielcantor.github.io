<?xml version="1.0" encoding="UTF-8"?>
<!-- Presentación legible de sitemap.xml en el navegador. Los buscadores la ignoran. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="s xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

  <xsl:template match="/">
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap · Daniel Cantor</title>
        <style>
          :root {
            color-scheme: light dark;
            --surface: light-dark(#f4f3ef, #0a1024);
            --card: light-dark(#ffffff, #131b38);
            --ink: light-dark(#0f1b3d, #eeece6);
            --muted: light-dark(#575f75, #a3abc2);
            --line: light-dark(#d9d6cc, #3a4260);
            --accent: light-dark(#a9471a, #f2a65a);
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            background: var(--surface);
            color: var(--ink);
            font: 15px/1.5 system-ui, -apple-system, 'Segoe UI', sans-serif;
          }
          main { max-width: 1100px; margin: 0 auto; padding: 48px 16px 64px; }
          h1 { font: 400 clamp(36px, 6vw, 56px)/1.05 'Instrument Serif', Georgia, serif; margin: 0 0 12px; }
          p { color: var(--muted); margin: 0 0 32px; max-width: 60ch; }
          a { color: inherit; text-decoration-color: var(--line); text-underline-offset: 3px; overflow-wrap: anywhere; }
          a:hover { color: var(--accent); text-decoration-color: currentColor; }
          .table { background: var(--card); border: 1px solid var(--line); border-radius: 12px; overflow-x: auto; }
          table { width: 100%; border-collapse: collapse; }
          th, td { text-align: left; padding: 14px 16px; border-bottom: 1px solid var(--line); vertical-align: top; }
          tr:last-child td { border-bottom: 0; }
          th { font-size: 12px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); }
          td.num { white-space: nowrap; color: var(--muted); font-variant-numeric: tabular-nums; }
          .alt { display: block; font-size: 13px; color: var(--muted); margin-top: 4px; }
          @media (max-width: 640px) { th + th, td.num { display: none; } }
          .lang { display: inline-block; min-width: 2.2em; font-weight: 600; color: var(--accent); }
        </style>
      </head>
      <body>
        <main>
          <h1>Sitemap</h1>
          <p>
            <xsl:value-of select="count(s:urlset/s:url)"/> páginas indexables de danielcantor.com.ar,
            cada una con sus versiones en otros idiomas. Este archivo es para buscadores.
          </p>
          <div class="table">
            <table>
              <thead>
                <tr><th>URL</th><th>Última modificación</th><th>Prioridad</th></tr>
              </thead>
              <tbody>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td>
                      <a href="{s:loc}"><xsl:value-of select="s:loc"/></a>
                      <xsl:for-each select="xhtml:link[@hreflang != 'x-default'][@href != current()/s:loc]">
                        <span class="alt">
                          <span class="lang"><xsl:value-of select="@hreflang"/></span>
                          <a href="{@href}"><xsl:value-of select="@href"/></a>
                        </span>
                      </xsl:for-each>
                    </td>
                    <td class="num"><xsl:value-of select="s:lastmod"/></td>
                    <td class="num"><xsl:value-of select="s:priority"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
