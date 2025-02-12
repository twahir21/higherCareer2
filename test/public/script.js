let currentPage = 1;
let totalPages = 1;

async function fetchData() {
    const search = document.getElementById("searchInput").value;
    const sortBy = document.getElementById("sortOptions").value;

    const res = await fetch(`http://localhost:5000/api/teachers?page=${currentPage}&search=${search}&sortBy=${sortBy}`);
    const data = await res.json();

    totalPages = data.totalPages;
    document.getElementById("teachers").innerHTML = data.data.map(teacher => `
        <div class="card">
            <h3>${teacher.name}</h3>
            <p>Subject: ${teacher.subject}</p>
            <p>Experience: ${teacher.experience} years</p>
        </div>
    `).join("");

    document.getElementById("pagination").innerHTML = `
        <button onclick="changePage(-1)" ${currentPage === 1 ? "disabled" : ""}>Prev</button>
        Page ${currentPage} of ${totalPages}
        <button onclick="changePage(1)" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
    `;
}

function changePage(direction) {
    if ((direction === -1 && currentPage > 1) || (direction === 1 && currentPage < totalPages)) {
        currentPage += direction;
        fetchData();
    }
}

fetchData();
