CREATE TABLE teacher (
    id SERIAL PRIMARY KEY, -- Auto-incrementing ID
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    tel VARCHAR(20),
    qualifications TEXT NOT NULL,
    subjectTaught VARCHAR(255) NOT NULL,
    role VARCHAR(50), -- Role column added here
    isApproved BOOLEAN DEFAULT FALSE,
    isVerified BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
