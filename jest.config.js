module.exports = {
  rootDir: `./src`,
  transform: {
    '^.+\\.tsx?$': `ts-jest`,
    '^.+\\.js?$': `babel-jest`,
  },
  testRegex: `.test.(js?|jsx?|tsx?)$`,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
};