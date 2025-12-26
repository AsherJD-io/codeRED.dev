import { Helmet } from "react-helmet";

interface HelmetProps {
  title: string;
  name: string;
  content: string;
}

export default function SEO({ title, name, content }: HelmetProps) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name={name} content={content} />
    </Helmet>
  );
}
