document.addEventListener('DOMContentLoaded', function() {
    // Initially show the dashboard section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    document.getElementById('dashboardSection').style.display = 'block'; // Show the dashboard section by default

    // Add event listeners to each menu item
    document.getElementById('dashboard').addEventListener('click', function() {
        showSection('dashboardSection');
    });
    document.getElementById('verifyUsers').addEventListener('click', function() {
        showSection('verifyUsersSection');
    });
    document.getElementById('teacher').addEventListener('click', function() {
        showSection('teacherSection');
    });

    document.getElementById('subject').addEventListener('click', function() {
        showSection('subjectSection');
    });

    document.getElementById('timetable').addEventListener('click', function() {
        showSection('timetableSection');
    });

    document.getElementById('eventAdmin').addEventListener('click', function() {
        showSection('eventAdminSection');
    });

    document.getElementById('adminProfile').addEventListener('click', function() {
        showSection('adminProfileSection');
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

    document.getElementById('joiningInstruction').addEventListener('click', function() {
        showSection('joiningInstructionSection');
    });
    document.getElementById('studentAdmin').addEventListener('click', function() {
        showSection('stdSection');
    });

    // Function to show the selected section
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = 'none'; // Hide all sections
        });
        document.getElementById(sectionId).style.display = 'block'; // Show the selected section
    }
});
