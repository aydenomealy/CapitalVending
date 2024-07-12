/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 31536000,
    },
    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|png|webp)',
                locale: false,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=9999999999, must-revalidate',
                    }
                ],
            },
        ]
    },
};



export default nextConfig;
