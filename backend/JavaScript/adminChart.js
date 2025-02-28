        const stdGraph = async () => {
            try {
                const res = await fetch("/api/studentsGraph");
                if (!res.ok) {
                    console.log("API request failed.");
                    return;
                }
                const dataStd = await res.json();

                
                // Define all possible classes
                const allClasses = ['kg1', 'kg2', 'standard1', 'standard2', 'standard3', 'standard4', 'standard5', 'standard6', 'standard7'];

                // Convert data into a map for quick lookup
                const dataMap = new Map(dataStd.data.map(item => [item.class, parseInt(item.total_students, 10)]));

                // Create an array of total students ensuring all classes are represented
                const studentCounts = allClasses.map(cls => dataMap.get(cls) || 0);

                // Update the bar chart
                updateStudentBarChart(studentCounts);

            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };

        // Function to initialize/update the bar chart
        let studentBarChart;
        function updateStudentBarChart(studentCounts) {
            const ctx = document.getElementById('studentBarChart').getContext('2d');

            if (studentBarChart) {
                studentBarChart.data.datasets[0].data = studentCounts;
                studentBarChart.update();
            } else {
                studentBarChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['KG1', 'KG2', 'Standard 1', 'Standard 2', 'Standard 3', 'Standard 4', 'Standard 5', 'Standard 6', 'Standard 7'],
                        datasets: [{
                            label: 'Number of Students',
                            data: studentCounts,
                            backgroundColor: 'rgba(54, 162, 235, 0.7)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
        }

        stdGraph();

        // Recent Announcements Animation
        $('.announcement-item').hover(
            function() {
                $(this).addClass('highlight');
            },
            function() {
                $(this).removeClass('highlight');
            }
        );

        // Profile Dropdown Icons Fix
        $('#profileDropdown a').each(function() {
            const iconClass = $(this).data('icon');
            if (iconClass) {
                $(this).prepend(`<i class="${iconClass} mr-2"></i>`);
            }
        });


        // Dummy data
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const totalAttendance = [350, 420, 400, 380, 450, 460, 440, 430, 410, 470, 480, 490];
        const totalFeesCollected = [5000, 6000, 5800, 5500, 7000, 7200, 6800, 6600, 6400, 7500, 7800, 8000];

        // Chart configuration
        const ctx = document.getElementById('attendanceFeesChart').getContext('2d');
        const attendanceFeesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [
                    {
                        label: 'Total Attendance',
                        data: totalAttendance,
                        borderColor: '#007bff',
                        backgroundColor: 'rgba(0, 123, 255, 0.2)',
                        pointBackgroundColor: '#007bff',
                        tension: 0.4,
                        yAxisID: 'y',
                    },
                    {
                        label: 'Total Fees Collected ($)',
                        data: totalFeesCollected,
                        borderColor: '#28a745',
                        backgroundColor: 'rgba(40, 167, 69, 0.2)',
                        pointBackgroundColor: '#28a745',
                        tension: 0.4,
                        yAxisID: 'y1',
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Attendance and Fees Collected Over the Year',
                        font: {
                            size: 18
                        }
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Attendance',
                            font: {
                                size: 14
                            }
                        }
                    },
                    y1: {
                        type: 'linear',
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Fees Collected ($)',
                            font: {
                                size: 14
                            }
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        });


