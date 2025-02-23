CREATE TABLE teacher_assignments (
    id SERIAL PRIMARY KEY,
    teacher_id INT REFERENCES teacher(id) ON DELETE CASCADE,
    grade_id INT REFERENCES grades(id) ON DELETE CASCADE,
    subject_id INT REFERENCES subjects(id) ON DELETE CASCADE,
    UNIQUE (teacher_id, grade_id, subject_id) -- Prevents duplicate assignments
);


--Example:
INSERT INTO teacher_assignments (teacher_id, grade_id, subject_id)
VALUES 
    (1, 3, 2), -- Example: Assign Teacher with ID 1 to Subject ID 2 for Grade ID 3
    (2, 5, 1); -- Example: Assign Teacher with ID 2 to Subject ID 1 for Grade ID 5
