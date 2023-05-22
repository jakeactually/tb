/** @type {import('next').NextConfig} */

const rewrites = () => {
    return [
        {
        source: "/files/data",
        destination: "http://localhost:3000/files/data",
        },
    ];
};

const nextConfig = { rewrites }

module.exports = nextConfig
