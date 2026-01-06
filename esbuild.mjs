import * as esbuild from 'esbuild';

const watch = process.argv.includes('--watch');

const extensionConfig = {
  entryPoints: ['src/extension.ts'],
  bundle: true,
  outfile: 'dist/extension.js',
  external: ['vscode'],
  format: 'cjs',
  platform: 'node',
  sourcemap: true,
  minify: !watch,
};

const previewConfig = {
  entryPoints: ['src/preview.ts'],
  bundle: true,
  outfile: 'dist/preview.bundle.js',
  format: 'iife',
  platform: 'browser',
  sourcemap: true,
  minify: !watch,
};

if (watch) {
  const extCtx = await esbuild.context(extensionConfig);
  const prevCtx = await esbuild.context(previewConfig);
  await Promise.all([extCtx.watch(), prevCtx.watch()]);
  console.log('Watching for changes...');
} else {
  await esbuild.build(extensionConfig);
  await esbuild.build(previewConfig);
  console.log('Build complete');
}
