var user = require('../user');

test("sum 1 + 2 to equal 3", () => {
    expect(user.sum(1, 2)).toBe(3);
});