const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'my_remote_app',
      library: { type: 'var', name: 'my_remote_app' },
      filename: 'remoteEntry.js',
      exposes: {
        './MyComponent': './src/MyComponent',
        './MyModule': './src/MyModule',
        // add more module mappings as needed
      },
      // add any other configuration options as needed
    })
  ]
}
