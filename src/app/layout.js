import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechPlato.Inc - Innovation and Industry Expertise",
  description:
    "At TechPlato, our focus on product development is driven by a deep well of industry knowledge. Our team of seasoned experts doesn't just create products; we engineer experiences that resonate with your target audience.",
  keywords:
    "TechPlato, product development, industry expertise, innovation, technical prowess, market landscape, emerging technologies",
  author: "TechPlato, Inc.",
  openGraph: {
    title: "TechPlato, Inc. - Innovation and Industry Expertise",
    description:
      "At TechPlato, our focus on product development is driven by a deep well of industry knowledge. Our team of seasoned experts doesn't just create products; we engineer experiences that resonate with your target audience.",
    url: "https://www.techplato.com",
    images: [
      {
        url: "https://i.ibb.co/wYbTb9s/Frame-10.png",
        width: "auto",
        height: "auto",
        alt: "TechPlato",
      },
    ],
    site_name: "TechPlato",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "TechPlato, Inc. - Innovation and Industry Expertise",
    description:
      "At TechPlato, our focus on product development is driven by a deep well of industry knowledge. Our team of seasoned experts doesn't just create products; we engineer experiences that resonate with your target audience.",
    card: "summary_large_image",
    images: [
      {
        url: "https://i.ibb.co/wYbTb9s/Frame-10.png",
        alt: "TechPlato",
      },
    ],
  },
  longDescription:
    "Navigating Innovation and Industry Expertise at TechPlato, Inc.! 🚀 At TechPlato, our focus on product development is driven by a deep well of industry knowledge. We understand that crafting exceptional solutions requires a blend of creativity, technical prowess, and a keen understanding of the market landscape. Our team of seasoned experts doesn't just create products; we engineer experiences that resonate with your target audience. We stay ahead of industry trends and emerging technologies to ensure that your product not only meets but exceeds expectations. From concept to execution, our development process is infused with strategic thinking and a passion for excellence. We collaborate closely with our clients to grasp the nuances of their vision and transform it into reality. Whether you're looking to revamp an existing product or embark on a new venture, TechPlato is your partner in innovation. Our commitment to pushing the boundaries of possibility ensures that your product stands out in a crowded digital landscape. Experience the fusion of product development and industry knowledge with TechPlato, Inc. Reach out to us to start a conversation about turning your ideas into remarkable realities.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <head>
        <link rel="icon" href="/public/vercel.svg" />
        <title>{metadata.title}</title>

        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0].url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechPlato, Inc.",
              url: "https://www.techplato.com",
              logo: "https://www.techplato.com/assets/Images/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/techplato",
                "https://www.facebook.com/techplato",
                "https://twitter.com/techplato",
                "https://www.instagram.com/techplato",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-647-333-1934",
                contactType: "Customer Service",
                areaServed: "US",
                availableLanguage: ["en", "es"],
              },
            }),
          }}
        />
        <script src="https://cdn.tailwindcss.com" async />
      </head>
      <body
        style={{
          backgroundImage: `url('https://i.ibb.co/qC5sw4f/Background-lines.png')`,
        }}
        className={inter.className}
        bg-auto
        bg-center
        bg-fixed
      >
        {children}
      </body>
    </html>
  );
}
