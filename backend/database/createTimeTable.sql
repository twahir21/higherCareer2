CREATE TABLE timetables (
    id SERIAL PRIMARY KEY,
    class VARCHAR(50) NOT NULL,
    stream VARCHAR(50) NOT NULL,
    time_slots JSONB NOT NULL,
    timetable JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
