/** @type {import('next').NextConfig} */
const nextConfig = {
	paths: {
		'@/*': ['./src/*'],
		'@/styles/*': ['./src/styles/*'],
	},
};

module.exports = nextConfig;
