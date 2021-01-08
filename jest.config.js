module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    // 告诉 Jest 处理 `*.vue` 文件
    'vue'
  ],
  collectCoverageFrom: ['**/*.{vue}', '!**/node_modules/**']
  // testRegex: '(/__tests__/**/.*|(\\.|/)(test|spec))\\.(js?|jsx?|tsx?)$',
  // testMatch: ['<rootDir>/tests/unit/(**/)?*.spec.js']
}
