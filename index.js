const defaultConfig = {
  svgoConfig: {
    plugins: [
      { removeViewBox: false },
      { removeDimensions: true },
      {
        prefixIds: {
          delim: "_",
          prefixIds: true,
          prefixClassNames: false,
        },
      },
    ],
  },
};

exports.defaultConfig = defaultConfig;

module.exports = (pluginOptions = defaultConfig) => (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: pluginOptions,
          },
        ],
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};
