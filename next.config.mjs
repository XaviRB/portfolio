import mdx from '@next/mdx';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: { },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    turbopack: {
        resolveAlias: {
            'react':                 'next/dist/compiled/react',
            'react-dom':             'next/dist/compiled/react-dom',
            'react/jsx-runtime':     'next/dist/compiled/react/jsx-runtime',
            'react/jsx-dev-runtime': 'next/dist/compiled/react/jsx-dev-runtime',
        },
    },
    webpack(config) {
        config.resolve.alias['react']                 = path.resolve(__dirname, 'node_modules/next/dist/compiled/react');
        config.resolve.alias['react-dom']             = path.resolve(__dirname, 'node_modules/next/dist/compiled/react-dom');
        config.resolve.alias['react/jsx-runtime']     = path.resolve(__dirname, 'node_modules/next/dist/compiled/react/jsx-runtime');
        config.resolve.alias['react/jsx-dev-runtime'] = path.resolve(__dirname, 'node_modules/next/dist/compiled/react/jsx-dev-runtime');
        return config;
    },
};

export default withMDX(nextConfig);