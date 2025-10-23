import MiniCssExtractPlugin from "mini-css-extract-plugin";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "apneajyhbpncbciasirk.supabase.co",
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: dev ? "[name].css" : "[name].[contenthash].css",
        chunkFilename: dev ? "[id].css" : "[id].[contenthash].css",
      })
    );

    return config;
  },
};

export default nextConfig;
