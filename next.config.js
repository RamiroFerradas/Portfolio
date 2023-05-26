const nextConfig = {
  // Tu configuración existente aquí
  // ...

  webpack(config, options) {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },

  // Agrega el código proporcionado por mí
  ...{
    images: {
      // domains: ...,
      reactStrictMode: true,
      path: `/_next/image`,
      swcMinify: true,
      experimental: {
        appDir: true,
        // turbotrace: true,
      },
    },
  },
};

module.exports = nextConfig;
