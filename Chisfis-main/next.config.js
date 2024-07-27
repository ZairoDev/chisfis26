/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    typedRoutes: true,
    client: {
      useWebpack: false, // Optional: this can be false if you don't need custom webpack configuration for client builds
      useClient: true
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a0.muscache.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.bunnycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imagepicker.b-cdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vacationsaga.b-cdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mi4realestate.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.visitgreece.gr",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.athens-car-rental.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn3.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.greece-is.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
