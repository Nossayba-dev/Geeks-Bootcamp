CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    name TEXT,
    capital TEXT,
    flag TEXT,
    subregion TEXT,
    population BIGINT
);
