import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import nodePolyfills from 'vite-plugin-node-stdlib-browser'


export default defineConfig({
    resolve: { alias: { '@': '/src' } },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Vitest-fail-on-console',
            fileName: (format) => `vitest-fail-on-console.${format}.js`,
        },
        rollupOptions: {
            external: ['chalk', 'util'],
            output: {
                globals: {
                    chalk: 'chalk',
                },
                sourcemap: true,
                exports: 'named',
            },
        },
    },
    plugins: [dts(), nodePolyfills()],
    test: {
        environment: 'node',
        globals: true,
        mockReset: true,
        restoreMocks: true,
    },
});
