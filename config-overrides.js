const {alias} = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    alias({
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@containers': 'src/containers',
        '@hoc-helpers': 'src/hoc-helpers',
        '@services': 'src/services',
        '@utils': 'src/utils',
        '@styles': 'src/styles',
        '@routes': 'src/routes',
        '@static': 'src/static',
        '@hooks': 'src/hooks',
        '@ui': 'src/components/UI',
        '@redux': 'src/redux',
        '@context': 'src/context',
      })(config);
    return config;
}
