DROP TABLE IF EXISTS stories;
DROP TABLE IF EXISTS authors;
CREATE TABLE authors (
  id serial PRIMARY KEY,
  username text NOT NULL,
  email text NOT NULL
);

CREATE TABLE stories (
  id serial PRIMARY KEY,
  author_id int REFERENCES authors ON DELETE CASCADE,
  title text NOT NULL,
  content text
);

INSERT INTO authors (username, email) VALUES
('Ryt', 'ryt@aol.com'),
('Suyik', 'suyik@hotmail.com'),
('aiRocks', 'aiRocks@gmail.com');

INSERT INTO stories (title, content, author_id) VALUES
('College is free.', 'Taxes.', '1'),
('Cancer is cured.', 'AI + Nano-bot treatmeant', '2'),
('AI Nanobots Takes Over The World', 'Infinite for loop.', '3');
