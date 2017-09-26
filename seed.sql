
CREATE TABLE users (
id SERIAL PRIMARY KEY,
name TEXT DEFAULT NULL,
email TEXT
);

TRUNCATE TABLE users, tweets;

INSERT INTO users (name, email) VALUES ('Guille', 'guille@plataforma5.la');
INSERT INTO users (name, email) VALUES ('Toni', 'toni@plataforma5.la');
INSERT INTO users (name, email) VALUES ('Santi', 'santi@plataforma5.la');
INSERT INTO users (name, email) VALUES ('Facu', 'facu@plataforma5.la');
INSERT INTO users (name, email) VALUES ('Alan', 'alan@plataforma5.la');
