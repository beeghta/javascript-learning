import db from "../database/database.js";

beforeEach(() => {
    db.exec("DELETE FROM neurons");
});

afterAll(() => {
    db.close();
});