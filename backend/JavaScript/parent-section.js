document.addEventListener('DOMContentLoaded', function() {
    // Initially show the dashboard section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    document.getElementById('dashboardSection').style.display = 'block'; // Show the dashboard section by default

    // Add event listeners to each menu item
    document.getElementById('studentParent').addEventListener("click", function () {
        showSection("studentParentSection");
    });
    
    document.getElementById('teacher').addEventListener('click', function() {
        showSection('teacherSection');
    });

    document.getElementById('dashboardParent').addEventListener('click', function() {
        showSection('dashboardParentSection');
    });

    document.getElementById('student').addEventListener('click', function() {
        showSection('studentSection');
    });

    document.querySelectorAll('.teacher_profile').forEach(
        profile => {
            profile.addEventListener('click', () => {
                showSection('teacherProfile');
            })
        }
    )

    document.querySelectorAll('.parent_profile').forEach(
        profile => {
            profile.addEventListener('click', () => {
                showSection('parentSection');
            })
        }
    )

    document.querySelectorAll('.student_profile').forEach(
        profile => {
            profile.addEventListener('click', () => {
                showSection('studentDetails');
            })
        }
    )

    document.getElementById('classManagement').addEventListener('click', function() {
        showSection('classManagementSection');
    });
    document.getElementById('attendance').addEventListener('click', function() {
        showSection('attendanceSection');
    });
    document.getElementById('communication').addEventListener('click', function() {
        showSection('communicationSection');
    });
    document.getElementById('settings').addEventListener('click', function() {
        showSection('settingsSection');
    });

    // Function to show the selected section
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = 'none'; // Hide all sections
        });
        document.getElementById(sectionId).style.display = 'block'; // Show the selected section
    }
});
