-- Drops the  db if it exists currently --
DROP DATABASE IF EXISTS records_db;
-- Creates the "db" database --
CREATE DATABASE records_db;
USE records_db;
CREATE TABLE document
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    source VARCHAR(100),
    document_name VARCHAR(100),
    docdate VARCHAR(30),
    category VARCHAR(100),
    description VARCHAR(300),
    image BLOB,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
)
