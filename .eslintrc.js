module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },

  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-restricted-syntax': 0,
    'react-hooks/exhaustive-deps': 'off',
  },
};
