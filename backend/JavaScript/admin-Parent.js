document.addEventListener("DOMContentLoaded", () => {
    let filteredData = []; // Store global data for search & sorting
    let currentPage = 1;
    const rowsPerPage = 5;

    // ✅ Fetch all parents from API
    const fetchAllParents = async () => {
        try {
            const response = await fetch("/api/parents");
            if (!response.ok) throw new Error("Server broke due to errors");

            const result = await response.json();
            const data = result.data;

            // ✅ Include `createdat` for sorting
            filteredData = data.map(({ id, full_name, tel, email, createdat }) => ({
                id,
                fullname: full_name,
                tel,
                email,
                createdat: new Date(createdat) // Convert to Date object for sorting
            }));

            displayPaginatedData(); // Display first page initially

        } catch (err) {
            console.error("Network error!", err.message);
        }
    };

    // ✅ Display parent data
    const displayParent = (data) => {
        const tableBody = document.querySelector(".admin-parent");

        tableBody.innerHTML = `
            <tr class="head">
                <th>ID</th>
                <th>Parent Name</th>
                <th>Telephone</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        `;

        // ✅ If no results, show "No row found"
        if (data.length === 0) {
            tableBody.innerHTML += `
                <tr>
                    <td colspan="5" style="text-align: center; font-weight: bold; padding: 10px;">No row found</td>
                </tr>
            `;
            return;
        }

        data.forEach(({ id, fullname, tel, email }) => {
            const row = `
                <tr>
                    <td class="id">${id}</td>
                    <td class="parent_profile">${fullname}</td>
                    <td class="tel">${tel}</td>
                    <td class="email"><p>${email}</p></td>
                    <td>
                        <button class="del" onclick="deleteParent(${id})">Delete</button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    };

    // ✅ Search Function (Filters by parent name)
    document.querySelector(".admin-parent-search").addEventListener("input", (event) => {
        const searchValue = event.target.value.toLowerCase().trim();

        const filteredResults = filteredData.filter(({ fullname }) =>
            fullname.toLowerCase().includes(searchValue)
        );

        currentPage = 1; // Reset to first page after search
        displayPaginatedData(filteredResults);
    });

    // ✅ Sort Function
    document.getElementById("searchIndexStudent").addEventListener("change", (event) => {
        const sortOrder = event.target.value;

        filteredData.sort((a, b) =>
            sortOrder === "Newest" ? b.createdat - a.createdat : a.createdat - b.createdat
        );

        displayPaginatedData(); // Refresh displayed data
    });

    // ✅ Pagination Controls
    const updatePagination = () => {
        const totalPages = Math.ceil(filteredData.length / rowsPerPage);

        document.getElementById("pageInfoAdminStudent").textContent = `Page ${currentPage} of ${totalPages || 1}`;
        document.getElementById("prevPageAdminStudent").disabled = currentPage === 1;
        document.getElementById("nextPageAdminStudent").disabled = currentPage === totalPages;
    };

    // ✅ Display Paginated Data
    const displayPaginatedData = (data = filteredData) => {
        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedData = data.slice(start, end);

        displayParent(paginatedData);
        updatePagination();
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

    // ✅ Delete Parent
    window.deleteParent = async (parentId) => {
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

                    if (!response.ok) throw new Error("Failed to delete parent!");

                    filteredData = filteredData.filter(parent => parent.id !== parentId);
                    displayPaginatedData(); // Refresh table

                    Swal.fire("Deleted!", "Parent has been deleted.", "success");
                } catch (error) {
                    console.error("Error:", error);
                    Swal.fire("Error!", "Failed to delete parent. Please try again.", "error");
                }
            }
        });
    };

    // ✅ Load Data Initially
    fetchAllParents();
});
