/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
    webpack: (config) => {
        // Custom webpack rules can be added here
        return config;
    },
};

export default nextConfig;
