/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
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
};

export default nextConfig;
