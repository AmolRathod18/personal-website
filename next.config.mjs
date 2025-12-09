/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.kletech.ac.in',
            },
            {
                protocol: 'https',
                hostname: 'kscd.ac.in',
            },
            {
                protocol: 'https',
                hostname: 'sspharmacycollege.in',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
        ],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    swcMinify: true,
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
};

export default nextConfig;
