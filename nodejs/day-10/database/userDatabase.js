import db from "./database.js";

const getUserByUsername = (username) => {
    const statement = db.prepare(`
        SELECT * FROM users
        WHERE username = ?
    `);

    return statement.get(username);
};

const createUser = (
    username,
    password,
    role = "user"
) => {
    const statement = db.prepare(`
        INSERT INTO users (username, password, role)
        VALUES (?, ?, ?)
    `);

    const result = statement.run(
        username,
        password,
        role
    );

    return {
        id: result.lastInsertRowid,
        username,
        role
    };
};

export {
    getUserByUsername,
    createUser
};