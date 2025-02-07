CREATE TABLE announcements (
    id SERIAL PRIMARY KEY,
    tag VARCHAR(50) NOT NULL,
    date VARCHAR(5) NOT NULL,
    month VARCHAR(10) NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    class_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
