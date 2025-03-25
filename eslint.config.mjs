import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
		plugins: ['prettier'],
		rules: {
			'prettier/prettier': 'error',
			'arrow-body-style': ['error', 'always'],
			'prefer-arrow-callback': 'error',
			semi: ['error'],
			quotes: ['error', 'single'],
			'prefer-template': 'error',
			'func-style': ['error', 'expression'],
			indent: ['error', 'tab'],
			'jsx-quotes': ['error', 'prefer-single'],
		},
		ignorePatterns: ['node_modules/', 'build/', 'dist/'],
	}),
];

export default eslintConfig;
