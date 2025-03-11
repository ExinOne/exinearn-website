let userConfig = undefined;
try {
  userConfig = await import("./v0-user-next.config");
} catch (e) {
  // 忽略错误
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 让 Next.js 生成静态 HTML
  reactStrictMode: false, // 避免某些依赖在 StrictMode 下运行问题
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // 避免 Next.js 在静态导出时优化图片
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// 确保 output: "export" 不会被 userConfig 覆盖
mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (key === "output") {
      continue; // 确保 output: "export" 不会被覆盖
    }

    if (typeof nextConfig[key] === "object" && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;