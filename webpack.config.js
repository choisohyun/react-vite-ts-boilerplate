module.exports = function (env) {
  return require(`./webpack.${env.dev ? 'dev' : 'prod'}.js`);
};
