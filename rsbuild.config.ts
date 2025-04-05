import { defineConfig, rspack } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [
    pluginReact(),
  ],
  source: {
    entry: {
      popup: './src/Popup/index.tsx',
      app: './src/App/index.tsx'
    },
  },
  tools: {
    htmlPlugin: {
      title: 'redirect-master',
    },
    rspack: {
      plugins: [
        new rspack.CopyRspackPlugin({
          patterns: [
            'manifest.json',
            {
              from: './src/assets',
              to: 'assets',
            }
          ]
        }),
      ],
      module: {
        rules: []
      },
    },
  },
  dev: {
    writeToDisk: true,
  }
});
