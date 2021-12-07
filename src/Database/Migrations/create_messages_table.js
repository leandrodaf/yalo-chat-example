const query = `
    CREATE TABLE IF NOT EXISTS messages(
        id INT AUTO_INCREMENT PRIMARY KEY,
        botslug VARCHAR(255) NOT NULL,
        phoneNumber VARCHAR(255) NOT NULL,
        body json NOT NULL,
        status tinyint(1) DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX (botslug, phoneNumber, status, created_at),
        INDEX (botslug, phoneNumber, created_at)
    );
`

module.exports = async (mysql) => mysql(query)
