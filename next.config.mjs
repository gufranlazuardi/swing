/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com", // Add this for YouTube thumbnail images
            },
        ],
    },
};

export default nextConfig;
