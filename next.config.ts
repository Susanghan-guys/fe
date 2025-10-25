import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "img1.kakaocdn.net",
      "t1.kakaocdn.net",
      "k.kakaocdn.net",
      "lh3.googleusercontent.com",
      "ssl.pstatic.net",
      "phinf.pstatic.net",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
