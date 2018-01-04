DROP TABLE IF EXISTS stories;

CREATE TABLE stories (
  id serial PRIMARY KEY,
  title text NOT NULL,
  content text
);

INSERT INTO stories (title, content) VALUES
('College is free.', 'Taxes.'),
('Cancer is cured.', 'AI + Nano-bot treatmeant'),
('AI Nanobots Takes Over The World', 'Infinite for loop.');
