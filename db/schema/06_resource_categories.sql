DROP TABLE IF EXISTS resource_categories CASCADE;

CREATE TABLE resource_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  type VARCHAR(255) NOT NULL,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
);
