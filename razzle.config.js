const path = require('path');

module.exports = {
  modifyWebpackConfig({ env, webpackConfig }) {
    webpackConfig.module.rules.forEach(rule => {
      if ('include' in rule && Array.isArray(rule.include)) {
        rule.include = rule.include.map(loc => {
          if (
            loc.endsWith('/apps/web/lib') ||
            loc.endsWith('/apps/web/apps') ||
            loc.endsWith('/apps/web/apps/server/src') ||
            loc.endsWith('/apps/web/apps/dependencyResolver/src') ||
            loc.endsWith('/apps/web/components') ||
            loc.endsWith('/apps/web/apps/web/src')
          ) {
            return loc.replace('/apps/web', '');
          }
          return loc;
        });
      }
    });
    webpackConfig.resolve.alias['#lib'] = path.join(__dirname, '/lib');
    webpackConfig.resolve.alias['#apps'] = path.join(__dirname, '/apps');
    webpackConfig.resolve.alias['#server'] = path.join(
      __dirname,
      '/apps/server/src',
    );
    webpackConfig.resolve.alias['#dependencyResolver'] = path.join(
      __dirname,
      '/apps/dependencyResolver/src',
    );
    webpackConfig.resolve.alias['#components'] = path.join(
      __dirname,
      '/components',
    );
    webpackConfig.resolve.alias['#web'] = path.join(__dirname, '/apps/web/src');
    return webpackConfig;
  },
  modifyPaths({ paths }) {
    paths.appPath = path.join(__dirname, '/apps/web');
    paths.appBuild = path.join(__dirname, '/dist/apps/web/build');
    paths.appBuildPublic = path.join(__dirname, '/dist/apps/web/build/public');
    paths.appAssetsManifest = path.join(
      __dirname,
      '/dist/apps/web/build/assets.json',
    );
    paths.appBuildStaticExport = path.join(
      __dirname,
      '/dist/apps/web/build/static_export.js',
    );
    paths.appBuildStaticExportRoutes = path.join(
      __dirname,
      '/dist/apps/web/build/public/static_routes.js',
    );
    paths.appPublic = path.join(__dirname, '/dist/apps/web/build/public');
    paths.appSrc = path.join(__dirname, '/apps/web/src');
    paths.appHtml = path.join(__dirname, '/dist/apps/web/build/index.html');
    paths.appServerJs = path.join(__dirname, '/apps/web/src/server');
    paths.appServerIndexJs = path.join(__dirname, '/apps/web/src');
    paths.appClientIndexJs = path.join(__dirname, '/apps/web/src/client');
    paths.appStaticExportJs = path.join(
      __dirname,
      '/apps/web/src/static_export',
    );
    paths.tsTestsSetup = path.join(__dirname, '/apps/web/src/setupTests.ts');
    paths.jsTestsSetup = path.join(__dirname, '/apps/web/src/setupTests.js');
    return paths;
  },
  plugins: ['graphql', 'scss'],
};
