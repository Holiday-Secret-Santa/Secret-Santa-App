const utils = require("../utils");

test("prints test output", () => {
    expect(utils()).toBe("testing circleci");
});