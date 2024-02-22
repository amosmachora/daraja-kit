module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    setupFiles: ["./jest.setup.js"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    collectCoverageFrom: ["src/**/*.ts"],
};
