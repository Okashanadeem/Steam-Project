/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable experimental srcDir support
    srcDir: true,
  },
  images: {
    domains: [
      'c4.wallpaperflare.com', 
      'encrypted-tbn0.gstatic.com', 
      'www.autoindustriya.com', 
      'dealerimages.dealereprocess.com', 
      'www.shutterstock.com', 
      'i.pinimg.com', 
      'www-europe.nissan-cdn.net', 
      'img.sm360.ca', 
      'imgcdn.zigwheels.us', 
      'images.edealer.ca', 
      'www.motortrend.com'
    ],
  },
};

module.exports = nextConfig;
