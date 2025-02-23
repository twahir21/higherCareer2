CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE grade_subjects (
    id SERIAL PRIMARY KEY,
    grade_id INT REFERENCES grades(id) ON DELETE CASCADE,
    subject_id INT REFERENCES subjects(id) ON DELETE CASCADE,
    UNIQUE (grade_id, subject_id) -- Prevents duplicate entries
);


-- and then i insert permanent subjects
-- Insert subjects
INSERT INTO subjects (name) VALUES 
    ('Kiswahili'), 
    ('Mathematics'), 
    ('English'), 
    ('Environment'), 
    ('Dini'), 
    ('C.A.S.'), 
    ('Social Science'), 
    ('Science & Tech'), 
    ('Dini & Arabic'), 
    ('French');

-- Insert grades
INSERT INTO grades (name) VALUES 
    ('KG1'), 
    ('KG2'), 
    ('Standard 1'), 
    ('Standard 2'), 
    ('Standard 3'), 
    ('Standard 4'), 
    ('Standard 5'), 
    ('Standard 6'), 
    ('Standard 7');

-- Assign subjects to KG1 and KG2
INSERT INTO grade_subjects (grade_id, subject_id)
SELECT g.id, s.id FROM grades g, subjects s
WHERE g.name IN ('KG1', 'KG2') 
AND s.name IN ('Kiswahili', 'Mathematics', 'English', 'Environment', 'Dini', 'C.A.S.');

-- Assign subjects to Standard 1 - 7
INSERT INTO grade_subjects (grade_id, subject_id)
SELECT g.id, s.id FROM grades g, subjects s
WHERE g.name LIKE 'Standard %'
AND s.name IN ('Kiswahili', 'Mathematics', 'English', 'Social Science', 'Science & Tech', 'Dini & Arabic', 'C.A.S.', 'French');
