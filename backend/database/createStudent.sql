CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    class VARCHAR(50) NOT NULL,
    stream CHAR(1) CHECK (stream IN ('A', 'B', 'C', 'D', 'E', 'F')),
    relationship VARCHAR(100) NOT NULL, -- Each student has a unique relationship with the parent
    parent_id INT NOT NULL REFERENCES parents(id) ON DELETE CASCADE,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
