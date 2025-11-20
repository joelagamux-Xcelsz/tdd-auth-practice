// Simple login function
function login(username, password, validUser) {
    if (!username || !password) return { success: false, message: "Fields cannot be empty" };
    if (username.toLowerCase() !== validUser.username.toLowerCase()) return { success: false, message: "Invalid username" };
    if (password !== validUser.password) return { success: false, message: "Incorrect password" };
    return { success: true, message: "Login successful" };
}

module.exports = login;
