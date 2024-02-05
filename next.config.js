/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "viofo.vn",
      "nhaantoan.com",
      "img.freepik.com",
      "www.mnp.ca",
      "images.pexels.com",
      "www.sammyfans.com",
      "cdn.tgdd.vn",
      "www.x-cart.com",
      "images.unsplash.com",
      "vnn-imgs-f.vgcloud.vn",
      "res.cloudinary.com",
    ],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: "/_next/image",
    loader: "default",
  },
};

module.exports = nextConfig;
