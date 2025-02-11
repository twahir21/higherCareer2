const monthYearElement = document.getElementById("monthYear");
const datesElement = document.getElementById("dates");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentDate = new Date();

// Updates the calendar with correct dates and highlights
const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date for comparison

    const monthYearString = currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric",
    });

    monthYearElement.textContent = monthYearString;

    let datesHTML = "";

    // Add previous month's trailing dates
    for (let i = firstDayIndex; i > 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, -i + 1);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }

    // Add current month's dates
    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const isPastDate = date < today; // Check if the date is in the past
        const activeClass = date.toDateString() === today.toDateString() ? "active" : "";
        const inactiveClass = isPastDate ? "inactive" : "";

        datesHTML += `<div class="date ${activeClass} ${inactiveClass}">${i}</div>`;
    }

    // Add next month's leading dates
    for (let i = 1; i <= 7 - lastDayIndex - 1; i++) {
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }

    datesElement.innerHTML = datesHTML;

    // Reinitialize event listeners for the dates
    makeEvent();
};

// Event handler for selecting dates
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");

startDateInput.addEventListener("change", () => {
    endDateInput.setAttribute("min", startDateInput.value);
});

// Function to convert a date to YYYY-MM-DD while considering local time
const toLocalISOString = (date) => {
    const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000); // Adjust for time zone offset
    return offsetDate.toISOString().split("T")[0];
};

// Update the makeEvent function to use toLocalISOString
const makeEvent = () => {
    const dates = document.querySelectorAll(".date");

    dates.forEach((date) => {
        date.addEventListener("click", () => {
            if (date.classList.contains("inactive")) return;

            // Remove 'selected' class from all dates
            dates.forEach((d) => d.classList.remove("selected"));

            // Add 'selected' class to the clicked date
            date.classList.add("selected");

            // Update selected date display
            const clickedDate = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                date.innerHTML
            );

            const dayName = clickedDate.toLocaleDateString("en-GB", {
                weekday: "long",
            });

            const dateNumber = clickedDate.toLocaleDateString("en-GB", {
                day: "2-digit",
            });

            const monthName = clickedDate.toLocaleDateString("en-GB", {
                month: "long",
            });

            const year = clickedDate.toLocaleDateString("en-GB", {
                year: "numeric",
            });

            // Display the selected date
            document.querySelector(".current-day").innerHTML = dayName;
            document.querySelector(".current-date").innerHTML = `${dateNumber} ${monthName} ${year}`;

            // Update startDate input field in the popup
            startDateInput.value = toLocalISOString(clickedDate);

            // Update min value of endDate to match startDate
            endDateInput.setAttribute("min", startDateInput.value);

            // Fetch event data from localStorage for the clicked date
            const events = JSON.parse(localStorage.getItem("eventsData")) || []; // Array of all events

            // Filter events that match the clicked date
            const matchedEvents = events.filter(
                (event) => event.startDate === toLocalISOString(clickedDate)
            );

            // Display the matched events
            const eventsList = document.querySelector(".events-container");
            eventsList.innerHTML = ""; // Clear previous events

            if (matchedEvents.length === 0) {
                eventsList.innerHTML = `<p class="no-event">No events for this date.</p>`;
            } else {
                matchedEvents.forEach((event) => {
                    const eventCard = `
                        <div class="event-card" data-id="${event.id}">
                            <div class="wrap">
                                <h3 class="event-card-title">${event.title}</h3>
                                <p class="event-card-desc">${event.desc}</p>
                                <i class="event-dates">${event.range}</i>
                            </div>
                            <div class="actions">
                                <i class="fa-solid fa-edit edit-btn"></i>
                                <i class="fa-solid fa-trash delete-btn"></i>
                            </div>
                        </div>
                    `;
                    eventsList.innerHTML += eventCard;
                });

                // Add delete and edit functionality
                document.querySelectorAll(".delete-btn").forEach((btn) => {
                    btn.addEventListener("click", () => {
                        const eventId = btn.closest(".event-card").getAttribute("data-id");
                        deleteEvent(eventId);
                    });
                });

                document.querySelectorAll(".edit-btn").forEach((btn) => {
                    btn.addEventListener("click", () => {
                        const eventId = btn.closest(".event-card").getAttribute("data-id");
                        editEvent(eventId);
                    });
                });
            }
        });
    });
};

// Display today's info
const today = new Date();
document.querySelector(".current-day").innerHTML = today.toLocaleDateString("en-GB", {
    weekday: "long",
});
document.querySelector(".current-date").innerHTML = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
});

// Navigation buttons
prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

// Popup logic
const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const eventForm = document.getElementById("eventForm");
const cancelButton = document.getElementById("cancelButton");
const eventsContainer = document.querySelector(".events-container");

// Open popup
openPopupButton.addEventListener("click", () => {
    overlay.classList.add("active");
    popup.classList.add("active");
});

// Close popup
const closePopup = () => {
    overlay.classList.remove("active");
    popup.classList.remove("active");
    eventForm.reset(); // Reset form fields
};

closePopupButton.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);
cancelButton.addEventListener("click", closePopup);

// Handle form submission
eventForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const eventTitle = document.getElementById("eventTitle").value;
    const eventDescription = document.getElementById("eventDescription").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    // Store data in localStorage
    const eventData = {
        id: Date.now(), // Unique ID for each event
        title: eventTitle,
        desc: eventDescription,
        startDate: startDate,
        endDate: endDate,
        range: `from ${startDate} to ${endDate}`,
    };

    const events = JSON.parse(localStorage.getItem("eventsData")) || [];
    events.push(eventData);
    localStorage.setItem("eventsData", JSON.stringify(events));

    // Refresh the calendar and events list
    updateCalendar();
    makeEvent();

    closePopup();
});

// Delete event
function deleteEvent(eventId) {
    let events = JSON.parse(localStorage.getItem("eventsData")) || [];
    events = events.filter((event) => event.id !== parseInt(eventId));
    localStorage.setItem("eventsData", JSON.stringify(events));

    // Refresh the calendar and events list
    updateCalendar();
    makeEvent();
}

// Edit event
function editEvent(eventId) {
    const events = JSON.parse(localStorage.getItem("eventsData")) || [];
    const eventToEdit = events.find((event) => event.id === parseInt(eventId));

    if (eventToEdit) {
        // Populate the form with the event data
        document.getElementById("eventTitle").value = eventToEdit.title;
        document.getElementById("eventDescription").value = eventToEdit.desc;
        document.getElementById("startDate").value = eventToEdit.startDate;
        document.getElementById("endDate").value = eventToEdit.endDate;

        // Open the popup
        overlay.classList.add("active");
        popup.classList.add("active");

        // Update form submission to handle editing
        eventForm.onsubmit = (e) => {
            e.preventDefault();
            eventToEdit.title = document.getElementById("eventTitle").value;
            eventToEdit.desc = document.getElementById("eventDescription").value;
            eventToEdit.startDate = document.getElementById("startDate").value;
            eventToEdit.endDate = document.getElementById("endDate").value;
            eventToEdit.range = `from ${eventToEdit.startDate} to ${eventToEdit.endDate}`;

            localStorage.setItem("eventsData", JSON.stringify(events));
            updateCalendar();
            makeEvent();
            closePopup();
        };
    }
}

// Initialize calendar
updateCalendar();