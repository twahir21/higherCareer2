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

        console.log(filteredData); // Debugging

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
                    <button class="edit">Edit</button>
                    <button class="del">Delete</button>
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

// ✅ Sorting Function (Newest / Oldest)
document.getElementById("searchIndex").addEventListener("change", (event) => {
    const sortOrder = event.target.value;

    const sortedData = [...filteredData].sort((a, b) =>
        sortOrder === "Newest" ? b.createdat - a.createdat : a.createdat - b.createdat
    );

    displayParent(sortedData);
});

// Call fetch function to load data
fetchAllParents();
