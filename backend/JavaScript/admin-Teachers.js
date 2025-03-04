document.addEventListener("DOMContentLoaded", () => {
    let allTeachers = [];  // Store all teachers globally
    let filteredTeachers = []; // Store filtered data after search
    let currentPage = 1;
    const itemsPerPage = 6; // Adjust as needed

    const fetchAllTeachers = async () => {
        try {
            const response = await fetch("/api/teachers");

            if (!response.ok) {
                console.log("Internal server error!");
                return;
            }

            const result = await response.json();

            allTeachers = result.data.map(({ fullname, subjecttaught, createdat, id }) => ({
                id, // ✅ Add ID for deletion
                fullname,
                createdAt: new Date(createdat),
                subject: subjecttaught
            }));

            filteredTeachers = [...allTeachers]; // Initially, filtered = all teachers
            updateDisplay(); // Call this to apply pagination
        } catch (error) {
            console.error("Server cannot be reached", error.message);
        }
    };

    fetchAllTeachers();

    const updateDisplay = () => {
        const searchInput = document.getElementById("teacherAdminSearch").value.toLowerCase();
        const sortValue = document.getElementById("searchIndexAdminTeacher").value;

        // 1️⃣ **Filtering (Search)**
        filteredTeachers = allTeachers.filter(teacher =>
            teacher.fullname.toLowerCase().includes(searchInput)
        );

        // 2️⃣ **Sorting**
        if (sortValue === "Newest") {
            filteredTeachers.sort((a, b) => b.createdAt - a.createdAt);
        } else {
            filteredTeachers.sort((a, b) => a.createdAt - b.createdAt);
        }

        // 3️⃣ **Apply Pagination**
        paginateData();
    };

    const paginateData = () => {
        const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);

        if (currentPage > totalPages) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedData = filteredTeachers.slice(startIndex, endIndex);

        displayAllTeachers(paginatedData);

        // Update pagination controls
        document.getElementById("pageInfoAdminTeacher").innerText = `Page ${currentPage} of ${totalPages || 1}`;
        document.getElementById("prevPageAdmiTeacher").disabled = currentPage === 1;
        document.getElementById("nextPageAdmiTeacher").disabled = currentPage === totalPages || totalPages === 0;
    };

    const displayAllTeachers = (data) => {
        const cards = document.getElementById("cardsAdmin");

        const subjectClasses = {
            "Kiswahili": "kisw",
            "Mathematics": "math",
            "English": "english",
            "Environment": "env",
            "Social Science": "social",
            "Science &Tech": "science",
            "Dini": "dini",
            "C.A.S.": "cas",
            "French": "french"
        };

        cards.innerHTML = "";

        data.forEach((teacher) => {
            const subjectClass = subjectClasses[teacher.subject] || "default-class";

            const card = `
                <div class="card" data-id="${teacher.id}">
                    <div class="upper">
                        <img src="/img/placeholder.jpg" alt="teacher_img">
                    </div>

                    <div class="center">
                        <h3>${teacher.fullname}</h3>
                        <p>Teacher</p>
                        <div class="subjects">
                            <h5 class="${subjectClass}">${teacher.subject}</h5>
                        </div>
                    </div>

                    <div class="lower">
                        <button class="profile teacher_profile">
                            <i class='bx bxs-user'></i> Profile
                        </button>
                        <button class="delete-teacher">
                            <i class='bx bxs-trash' ></i>Delete
                        </button>
                    </div>
                </div>
            `;

            cards.innerHTML += card;
        });
    };

    // 🔹 **Event Listeners for Sorting & Searching**
    document.getElementById("teacherAdminSearch").addEventListener("input", updateDisplay);
    document.getElementById("searchIndexAdminTeacher").addEventListener("change", updateDisplay);

    // 🔹 **Pagination Controls**
    document.getElementById("prevPageAdmiTeacher").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            paginateData();
        }
    });

    document.getElementById("nextPageAdmiTeacher").addEventListener("click", () => {
        const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            paginateData();
        }
    });

    // ✅ **DELETE FUNCTION**
    document.getElementById("cardsAdmin").addEventListener("click", async (event) => {
        if (event.target.closest(".delete-teacher")) {
            const card = event.target.closest(".card");
            const teacherId = card.dataset.id;

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to undo this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const response = await fetch(`/api/teachers/${teacherId}`, {
                            method: "DELETE",
                        });

                        if (!response.ok) {
                            throw new Error("Failed to delete teacher!");
                        }

                        // Remove from `allTeachers`
                        allTeachers = allTeachers.filter(teacher => teacher.id != teacherId);

                        // Re-filter and re-render
                        updateDisplay();

                        Swal.fire("Deleted!", "Teacher has been deleted.", "success");
                    } catch (error) {
                        console.error("Error:", error);
                        Swal.fire("Error!", "Failed to delete teacher. Please try again.", "error");
                    }
                }
            });
        }
    });

});
