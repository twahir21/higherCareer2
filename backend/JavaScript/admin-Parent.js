document.addEventListener("DOMContentLoaded", () => {
    let filteredData = []; // Store global data for search & sorting

const fetchAllParents = async () => {
    try {
        const response = await fetch("/api/parents");

        if (!response.ok) {
            throw new Error("Server broke due to errors");
        }

        const result = await response.json();
        const data = result.data;

        // Extract required fields and update student_class
        const classMapping = {
            standard1: "I",
            standard2: "II",
            standard3: "III",
            standard4: "IV",
            standard5: "V",
            standard6: "VI",
            standard7: "VII"
        };

        // ✅ Include `createdat` for sorting
        filteredData = data.map(({ student_fullname, id, fullname, student_class, createdat }) => ({
            student_fullname,
            id,
            fullname,
            student_class: classMapping[student_class] || student_class, // Convert standard1-7 to Roman numerals
            createdat: new Date(createdat) // Convert to Date object for sorting
        }));

        // ✅ Display initially without filtering
        displayParent(filteredData);

    } catch (err) {
        console.error("Network error!", err.message);
    }
};

// ✅ Accept data parameter for dynamic updates
const displayParent = (data) => {
    const classMappings = {
        kg1: "other1",
        kg2: "other1",
        I: "other3",
        II: "other4",
        III: "other5",
        IV: "other6",
        V: "other7",
        VI: "other8",
        VII: "other9"
    };

    const tableBody = document.querySelector(".admin-parent");

    // ✅ Clear previous data
    tableBody.innerHTML = `
        <tr class="head">
            <th>Student Name</th>
            <th>ID</th>
            <th>Parent Name</th>
            <th>Chat</th>
            <th>Grade</th>
            <th>Action</th>
        </tr>
    `;

    // ✅ If no results, show "No row found"
    if (data.length === 0) {
        tableBody.innerHTML += `
            <tr>
                <td colspan="6" style="text-align: center; font-weight: bold; padding: 10px;">No row found</td>
            </tr>
        `;
        return;
    }

    data.forEach(({ student_fullname, id, fullname, student_class }) => {
        const className = classMappings[student_class] || "other1"; // Default class

        const row = `
            <tr>
                <td class="name student_profile">${student_fullname}</td>
                <td class="id">${id}</td>
                <td class="parent parent_profile">${fullname}</td>
                <td class="icon"><i class="fa-regular fa-message"></i></td>
                <td class="darasa"><p class="${className}">${student_class} A</p></td>
                <td>
                    <button class="del" onclick="deleteParent(${id})">Delete</button>
                </td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
};

// ✅ Search Function (Filters by student name)
document.querySelector(".admin-parent-search").addEventListener("input", (event) => {
    const searchValue = event.target.value.toLowerCase().trim(); // Convert to lowercase

    const filteredResults = filteredData.filter(({ student_fullname }) =>
        student_fullname.toLowerCase().includes(searchValue)
    );

    displayParent(filteredResults);
});

document.getElementById("searchIndexStudent").addEventListener("change", (event) => {
    const sortOrder = event.target.value;

    // Sort only the currently displayed data instead of full filteredData
    const tableRows = document.querySelectorAll(".admin-parent tr:not(.head)");
    
    let displayedData = [...tableRows].map(row => ({
        student_fullname: row.querySelector(".student_profile").textContent,
        id: row.querySelector(".id").textContent,
        fullname: row.querySelector(".parent_profile").textContent,
        student_class: row.querySelector(".darasa p").textContent.split(" ")[0],
        createdat: new Date(filteredData.find(item => item.id == row.querySelector(".id").textContent)?.createdat) 
    }));

    const sortedData = displayedData.sort((a, b) =>
        sortOrder === "Newest" ? b.createdat - a.createdat : a.createdat - b.createdat
    );

    displayParent(sortedData);
});

let currentPage = 1;
const rowsPerPage = 5;

// ✅ Function to update pagination display
const updatePagination = () => {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    document.getElementById("pageInfoAdminStudent").textContent = `Page ${currentPage} of ${totalPages}`;

    // Enable/Disable buttons based on page
    document.getElementById("prevPageAdminStudent").disabled = currentPage === 1;
    document.getElementById("nextPageAdminStudent").disabled = currentPage === totalPages;
};

// ✅ Function to display paginated data
const displayPaginatedData = () => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = filteredData.slice(start, end);

    displayParent(paginatedData); // Display only the required data
    updatePagination(); // Update pagination controls
};

// ✅ Handle Next Page Click
document.getElementById("nextPageAdminStudent").addEventListener("click", () => {
    if (currentPage < Math.ceil(filteredData.length / rowsPerPage)) {
        currentPage++;
        displayPaginatedData();
    }
});

// ✅ Handle Previous Page Click
document.getElementById("prevPageAdminStudent").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayPaginatedData();
    }
});

// ✅ Call fetch function to load data
fetchAllParents().then(() => {
    displayPaginatedData(); // Display first page initially
});

// deleting the parent
const deleteParent = async (parentId) => {
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
                const response = await fetch(`/api/parents/${parentId}`, {
                    method: "DELETE",
                });

                if (!response.ok) {
                    throw new Error("Failed to delete parent!");
                }

                // Remove parent from `filteredData`
                filteredData = filteredData.filter(parent => parent.id !== parentId);

                // Re-render table
                displayParent(filteredData);

                Swal.fire("Deleted!", "Parent has been deleted.", "success");
            } catch (error) {
                console.error("Error:", error);
                Swal.fire("Error!", "Failed to delete parent. Please try again.", "error");
            }
        }
    });
};


})