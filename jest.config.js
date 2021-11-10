module.exports = {
  moduleNameMapper: {
    "@core/(.*)": "<rootDir>/src/app/core/$1",
    "@env/(.*)": ["<rootDir>/src/environments/$1"],
    "@shared/(.*)": ["<rootDir>/src/app/modules/shared/$1"],
    "@store/(.*)": ["<rootDir>/src/app/modules/store/$1"],
  },
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
};
