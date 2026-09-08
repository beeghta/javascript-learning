import db from "./database.js";

const getAllNeurons = (page, limit) => {
    const offset = (page - 1) * limit;

    const statement = db.prepare(`
        SELECT * FROM neurons
        LIMIT ?
        OFFSET ?
    `);

    return statement.all(limit, offset);
};

const getNeuronCount = () => {
    const statement = db.prepare(`
        SELECT COUNT(*) AS total
        FROM neurons
    `);

    return statement.get().total;
};

const getNeuronById = (id) => {
    const statement = db.prepare(`
        SELECT * FROM neurons
        WHERE id = ?
    `);

    return statement.get(id);
};

const createNeuron = (name, activity) => {
    const statement = db.prepare(`
        INSERT INTO neurons (name, activity)
        VALUES (?, ?)
    `);

    const result = statement.run(name, activity);

    return {
        id: result.lastInsertRowid,
        name,
        activity
    };
};

const updateNeuron = (id, name, activity) => {
    const statement = db.prepare(`
        UPDATE neurons
        SET name = ?, activity = ?
        WHERE id = ?
    `);

    const result = statement.run(name, activity, id);

    if (result.changes === 0) {
        return null;
    }

    return {
        id,
        name,
        activity
    };
};

const deleteNeuron = (id) => {
    const statement = db.prepare(`
        DELETE FROM neurons
        WHERE id = ?
    `);

    const result = statement.run(id);

    return result.changes > 0;
};

const getFiringNeurons = () => {
    const statement = db.prepare(`
        SELECT * FROM neurons
        WHERE activity >= ?
    `);

    return statement.all(0.8);
};

const getNeuronStatus = (id) => {
    const statement = db.prepare(`
        SELECT
            id,
            name,
            CASE
                WHEN activity >= 0.8 THEN 'firing'
                ELSE 'inactive'
            END AS status
        FROM neurons
        WHERE id = ?
    `);

    return statement.get(id);
};

const searchNeurons = (minActivity, sort) => {
    let query = `
        SELECT * FROM neurons
        WHERE activity >= ?
    `;

    if (sort === "activity") {
        query += ` ORDER BY activity ASC`;
    }

    if (sort === "-activity") {
        query += ` ORDER BY activity DESC`;
    }

    const statement = db.prepare(query);

    return statement.all(minActivity);
};

const createNeuronPair = db.transaction(() => {
    const statement = db.prepare(`
        INSERT INTO neurons (name, activity)
        VALUES (?, ?)
    `);

    statement.run("Neuron Transaction A", 0.91);
    statement.run("Neuron Transaction B", 0.87);
});

export {
    getAllNeurons,
    getNeuronById,
    createNeuron,
    updateNeuron,
    deleteNeuron,
    getFiringNeurons,
    getNeuronStatus,
    searchNeurons,
    getNeuronCount,
    createNeuronPair
};