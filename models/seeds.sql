-- write insert queries to populate the `burgers` table with at least three entries.

-- id INTEGER NOT NULL AUTO_INCREMENT,
--     source VARCHAR(100),
--     document_name VARCHAR(100),
--     docdate DATETIME,
--     category VARCHAR(100),
--     description VARCHAR(300),
--     image BLOB,
--     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
--     updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
--     PRIMARY KEY (id)




INSERT INTO documents (source,document_name, docdate, category , description, image, createdAt, updatedAt) 
VALUES ('file:///F:/test-folder/table-sort.3/index.html#', 'test01', CURRENT_TIMESTAMP, 'politics', 'test document data1', '', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO documents (source,document_name, docdate, category , description, image, createdAt, updatedAt)
VALUES ('file:///F:/test-folder/table-sort.3/index.html#', 'test02', CURRENT_TIMESTAMP, 'politics', 'test document data2', '', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO documents (source,document_name, docdate, category , description, image, createdAt, updatedAt)
VALUES ('file:///F:/test-folder/table-sort.3/index.html#', 'test03', CURRENT_TIMESTAMP, 'personal', 'test document data3', '', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); 
INSERT INTO documents (source,document_name, docdate, category , description, image, createdAt, updatedAt)
VALUES ('file:///F:/test-folder/table-sort.3/index.html#', 'test04', CURRENT_TIMESTAMP, 'personal', 'test document data4', '', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);