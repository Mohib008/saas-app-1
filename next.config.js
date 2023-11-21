/** @type {import('next').NextConfig} */
const nextConfig = {
    future: {
        webpack5: true,
    },
    images: {
        domains: ["github.com"]
    },
}

module.exports = nextConfig
