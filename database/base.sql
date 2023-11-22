CREATE TABLE life_map_vA (
    Id SERIAL PRIMARY KEY,
    submission_id VARCHAR(255),
    birth VARCHAR(255),
    email VARCHAR(255),
    mapJson TEXT,
    Data TIMESTAMP DEFAULT NOW()
);