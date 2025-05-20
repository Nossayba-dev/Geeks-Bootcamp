-- 1.
SELECT * FROM language;

-- 2.
SELECT
    film.title,
    film.description,
    language.name AS language_name
FROM
    film
JOIN language ON film.language_id = language.language_id;

-- 3.
SELECT
    film.title,
    film.description,
    language.name AS language_name
FROM
    language
LEFT JOIN film ON film.language_id = language.language_id;

-- 4.
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- 5.
INSERT INTO new_film (name) VALUES
('Inception'),
('The Matrix'),
('Interstellar');

-- 6. 
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL,
    language_id INT NOT NULL,
    title VARCHAR(255),
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_film FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    CONSTRAINT fk_language FOREIGN KEY (language_id) REFERENCES language(language_id)
);

-- 7.
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Amazing sci-fi', 9, 'Inception is a masterpiece of mind-bending storytelling.'),
(2, 1, 'Cyberpunk Classic', 10, 'The Matrix redefined the genre with its visuals and themes.');

-- 8. 
DELETE FROM new_film WHERE id = 1;

-- 9.
SELECT * FROM customer_review;
