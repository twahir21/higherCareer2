CREATE TABLE classes (
    id SERIAL PRIMARY KEY, -- Unique class ID
    classname VARCHAR(50) NOT NULL, -- Class name (e.g., KG1, Standard1)
    stream CHAR(1) NOT NULL CHECK (stream IN ('A', 'B', 'C', 'D', 'E', 'F')), -- Stream validation
    capacity INT NOT NULL CHECK (capacity > 0), -- Ensure capacity is positive
    teacher_id INT NOT NULL, -- Assigned teacher (supervisor)
    assignedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of assignment
    FOREIGN KEY (teacher_id) REFERENCES teacher(id) ON DELETE SET NULL
);
