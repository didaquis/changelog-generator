module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	parser: 'babel-eslint',
	extends: 'eslint:recommended',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		React: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	plugins: [
		'react'
	],
	rules: {
		'react/jsx-uses-vars': [2],
		indent: [
			'error',
			'tab',
			{ SwitchCase: 1 }
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'never'
		],
		'no-console': 'warn',
		'no-alert': 'warn',
		'no-unused-vars': 'warn',
		'keyword-spacing': ['error', { before: true, after: true }],
		'space-infix-ops': ['error', { int32Hint: false}],
		'comma-spacing': ['error'],
		'arrow-spacing': ['error'],
		'semi-spacing': ['error'],
		'space-before-function-paren': ['error'],
		'no-multi-spaces': 'error',
		'valid-typeof': 'error'
	}
}