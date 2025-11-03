
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.visitarizona.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'theofficialhavasupaitribe.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.theofficialhavasupaitribe.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.havasupai-nsn.gov',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'indigenouspeoplesresources.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
