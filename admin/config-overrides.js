const { override, fixBabelImports } = require('customize-cra');
const path = require('path');
const paths = require('react-scripts/config/paths');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    (config) => {
        const outputPath = path.join(__dirname, '/blog-admin') 
        paths.appBuild = outputPath;
        config.output.path = outputPath;
        return config;
    }
);