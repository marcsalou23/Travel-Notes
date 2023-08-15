const getDB = require('../../getDB');
const { generateError } = require('../../../helpers');

const createNewCategoryQuery = async (name) => {
    let connection;

    try {
        connection = await getDB();
        const createdAt = new Date();

        await connection.query(
            'INSERT INTO categories (name, createdAt) VALUES (?, ?)',
            [name, createdAt]
        );
    } catch (error) {
        throw generateError('Error al crear la categoría', 500);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = createNewCategoryQuery;
