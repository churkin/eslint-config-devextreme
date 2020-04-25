module.exports = {
    env: {
        jest: true,
        node: true
    },
    plugins: [
        'jest',
        'jest-formatting'
    ],
    extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
        'devextreme/typescript'
    ],
    rules: {
        // Use devDependencies modules in the tests
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

        // Create temporary JSX components in the tests without props validation 
        'react/prop-types': ['error', { skipUndeclared: true }],

        // Allow to use props spreading for the JSX components
        'react/jsx-props-no-spreading': 'off',

        // Allow to define widg et's 'accessKey' attribute
        'jsx-a11y/no-access-key': 'off'
    }
};
