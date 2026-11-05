CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

-- INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');
-- INSERT INTO users (name, email) VALUES ('Jane Doe', 'jane.doe@example.com');
-- INSERT INTO users (name, email) VALUES ('Jim Doe', 'jim.doe@example.com');
-- INSERT INTO users (name, email) VALUES ('Jill Doe', 'jill.doe@example.com');
-- INSERT INTO users (name, email) VALUES ('Jack Doe', 'jack.doe@example.com');
-- INSERT INTO users (name, email) VALUES ('Jill Doe', 'jill.doe@example.com');