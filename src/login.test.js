const login = require("./login");

const validUser = { username: "testuser", password: "password123" };

test("should fail when fields are empty", () => {
    expect(login("", "", validUser).success).toBe(false);
});

test("should fail with invalid username", () => {
    expect(login("wronguser", "password123", validUser).success).toBe(false);
});

test("should fail with wrong password", () => {
    expect(login("testuser", "wrongpass", validUser).success).toBe(false);
});

test("should succeed with correct credentials", () => {
    expect(login("testuser", "password123", validUser).success).toBe(true);
});
