CREATE TABLE classes (
    id SERIAL PRIMARY KEY, 
    classname VARCHAR(50) NOT NULL, 
    stream CHAR(1) NOT NULL CHECK (stream IN ('A', 'B', 'C', 'D', 'E', 'F')), 
    capacity INT NOT NULL CHECK (capacity > 0), 
    teacher_name VARCHAR(255) NOT NULL, 
    assignedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
