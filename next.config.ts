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
    // 개발 서버에서만 rewrites 사용 (CORS 문제 해결)
    // 프로덕션 서버에서는 백엔드 CORS 설정으로 해결
    const isDevServer = process.env.NODE_ENV === 'development' || 
                        process.env.VERCEL_ENV === 'development' ||
                        process.env.NEXT_PUBLIC_ENV === 'development';
    
    if (isDevServer) {
      return [
        {
          source: "/api/:path*",
          destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
        },
      ];
    }
    
    // 프로덕션에서는 rewrites 사용하지 않음
    return [];
  },
};

export default nextConfig;
