module.exports = {
  apps: [
    {
      name: "strapi-dev",
      script: "pnpm",
      args: "dev",
      interpreter: "none",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
