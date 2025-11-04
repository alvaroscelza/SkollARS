import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, ogImage, type = 'website', structuredData }) => {
    const siteUrl = 'https://skollars.github.io/SkollARS';
    const fullTitle = title ? `${title} | SkollARS` : 'SkollARS - Innovación y Soluciones Tecnológicas';
    const defaultDescription = 'SkollARS ofrece desarrollo de software a medida, soluciones empresariales, consultoría tecnológica y software de gestión. Innovación tecnológica para tu negocio.';
    const finalDescription = description || defaultDescription;
    const defaultKeywords = 'software a medida, desarrollo de software, consultoría tecnológica, gestión empresarial, software de inventario, punto de venta, CRM, finanzas personales, adopción de mascotas, Odoo, Uruguay';
    const finalKeywords = keywords || defaultKeywords;
    const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const ogImageUrl = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/img/logo.png`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={finalKeywords} />
            <link rel="canonical" href={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content="SkollARS" />
            <meta property="og:locale" content="es_UY" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={ogImageUrl} />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="language" content="Spanish" />
            <meta name="author" content="SkollARS" />
            <meta name="geo.region" content="UY" />
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;

