import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
    unoptimized:true,
  },
  useFileSystemPublicRoutes: false,
  output:"export",
};

// Export the Next.js configuration with video support
export default withVideos(nextConfig);
