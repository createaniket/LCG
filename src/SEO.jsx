import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, url, image }) => {
  const siteName = "Lowercase Groups";
  const siteUrl = "https://lowercasegroup.com";

  const fullUrl = url ? siteUrl + url : siteUrl;
  const previewImg = image || siteUrl + "/assets/seo-preview.png";

  return (
    <Helmet>
      {/* Primary */}
      <title> {siteName}  | {title} </title>

      <meta name="description" content={description} />

      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={`${siteName}| ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={previewImg} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${siteName}| ${title}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={previewImg} />
    </Helmet>
  );
};

export default SEO;
