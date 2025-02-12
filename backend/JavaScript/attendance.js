const dateSelected = document.getElementById('date-selected');

dateSelected.value = `${new Date().getFullYear()}-${new Date().toLocaleDateString('en-US', { month: '2-digit' })}-${new Date().toLocaleDateString('en-US', { day: '2-digit' })}`;

const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
};

const updateDays = () => {
    const [day, month, year] = dateSelected.value.split('-');
    const daysInMonth = getDaysInMonth(month, year);
    return daysInMonth;
};

updateDays()

dateSelected.addEventListener('change', () => {
    updateDays();
    clearTable();
    setDateDetails();
    updateTable();
});

//setup date details
const setDateDetails = () => {
    const dateDetails = document.getElementById('date-details');
    const [day, month, year] = dateSelected.value.split('-');
    let logic = month === '01'? 'Jan' : month === '02'? 'Feb' : month === '03'? 'Mar' : month === '04'? 'Apr' : month === '05'? 'May' : month === '06'? 'Jun' : month === '07'? 'Jul' : month === '08'? 'Aug' : month === '09'? 'Sep' : month === '10'? 'Oct' : month === '11'? 'Nov' : 'Dec';
    dateDetails.textContent = `${year} ${logic}, ${day}`;
}

// setup the table upon month selection
const updateTable = () => {
    for (let i = 1; i <= updateDays(); i++) {
        const table = document.getElementById('table-header');
        const th = document.createElement('th');
        th.textContent = i;
        table.appendChild(th);
    
        const tRows = document.querySelectorAll('.table-row');
        tRows.forEach(row => {
            const td = document.createElement('td');
            td.innerHTML = '<input type="checkbox" />';
            row.appendChild(td);    
        });
    }
}

// clear the table
const clearTable = () => {
    document.querySelectorAll('th:nth-child(n+3), td:nth-child(n+3)').forEach(el => el.remove());
};
     
updateTable();
setDateDetails();

// now fetching data from the server
const fetchAllStudents = async () => {
    try {
        const response  = await fetch("/api/parents");
        
        if(!response.ok) {
            throw new Error("Internal Server Error!")
        }

        const result = await response.json();

        const data = result.data;


        const attendanceData = data.map(({id, student_fullname}) => ({
            id,
            fullname: student_fullname
        }))

        displayStudent(attendanceData);
    } catch (error) {
        console.log("Server can not be reached", error.message)
    }
}

fetchAllStudents();


const displayStudent = (data) => {

}