// creating pagination
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;
let currentPage = 1;

function showPage(pageNumber) {
  pages.forEach((page, index) => {
    if (index + 1 === pageNumber) {
      page.classList.add('visible');
    } else {
      page.classList.remove('visible');
    }
  });
}

function renderPagination() {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  // Previous button
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', () => {
    currentPage--;
    updatePagination();
  });
  pagination.appendChild(prevButton);

  // Page buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.classList.toggle('active', currentPage === i);
    pageButton.addEventListener('click', () => {
      currentPage = i;
      updatePagination();
    });
    pagination.appendChild(pageButton);
  }

  // Next button
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', () => {
    currentPage++;
    updatePagination();
  });
  pagination.appendChild(nextButton);
}

function updatePagination() {
  showPage(currentPage);
  renderPagination();
}

// Initialize the pagination
updatePagination();


// CREATING SIGNATURE

const canvas = document.getElementById('signature-pad');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clear-button');
const saveButton = document.getElementById('save-button');
const img = document.getElementById("image_signature");

let isDrawing = false;

// Function to start drawing
function startDrawing(event) {
  isDrawing = true;
  const { offsetX, offsetY } = getEventCoordinates(event);
  ctx.beginPath();
  ctx.moveTo(offsetX, offsetY);
}

// Function to draw
function draw(event) {
  if (!isDrawing) return;
  const { offsetX, offsetY } = getEventCoordinates(event);
  ctx.lineTo(offsetX, offsetY);
  ctx.stroke();
}

// Function to stop drawing
function stopDrawing() {
  isDrawing = false;
  ctx.closePath();
}

// Helper function to get coordinates for mouse or touch events
function getEventCoordinates(event) {
  if (event.touches) {
    const rect = canvas.getBoundingClientRect();
    return {
      offsetX: event.touches[0].clientX - rect.left,
      offsetY: event.touches[0].clientY - rect.top
    };
  } else {
    return {
      offsetX: event.offsetX,
      offsetY: event.offsetY
    };
  }
}

// Mouse Events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Touch Events
canvas.addEventListener('touchstart', (event) => {
  event.preventDefault();
  startDrawing(event);
});
canvas.addEventListener('touchmove', (event) => {
  event.preventDefault();
  draw(event);
});
canvas.addEventListener('touchend', (event) => {
  event.preventDefault();
  stopDrawing();
});

// Clear button functionality
clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save button functionality
saveButton.addEventListener('click', () => {
  const dataURL = canvas.toDataURL();

  img.src = `${dataURL}`;
  Swal.fire({
    title: "Success!",
    text: "Signature saved successfully",
    icon: "success",
    showConfirmButton: false, // Hides the confirm button
    timer: 2000, // Closes the alert after 2 seconds
});

});

function validateForm(formId) {
  const form = document.getElementById(formId);
  let errors = [];

  // Select all required input fields in the form
  const inputs = form.querySelectorAll('input[required], input[type="text"], input[type="date"], input[type="radio"], input[type="file"]');
  
  inputs.forEach(input => {
      // Check for radio button selection
      if (input.type === 'radio' && !form.querySelector(`input[name="${input.name}"]:checked`)) {
          errors.push(`Please select a ${input.name} in form: ${formId}`);
      }

      // Check if required fields are filled out
      if (input.required && !input.value.trim()) {
          errors.push(`Please fill out the ${input.name} field in form: ${formId}`);
      }

      // Special case for file input (signature image in form-4)
      if (formId === 'form-4' && input.id === 'image_signature' && !input.src) {
          errors.push('Please provide a signature in form 4.');
      }
  });

  return errors;
}


// handle form submissions
document.getElementById('nurseryBtn').addEventListener('click', function(event) {
  event.preventDefault();

  let formsValid = true;
  let errors = [];
  let formData = {};

  const forms = ['form-1', 'form-2', 'form-3', 'form-4'];

  forms.forEach(function(formId) {
      const form = document.getElementById(formId);
      const formErrors = validateForm(formId);
      
      if (formErrors.length > 0) {
          formsValid = false;
          errors.push(...formErrors);
      } else {
          const formInputs = form.querySelectorAll('input');
          formInputs.forEach(input => {
              if (input.name) {
                  formData[input.name] = input.value;
              }
          });
          formData.signature = img.src;
      }
  });

  // If forms are valid, send data to backend
  if (formsValid) {
    console.log(formData);
      fetch('/generate-pdf', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ formData })
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              alert("PDF generated successfully.");
          } else {
              alert("An error occurred.");
          }
      })
      .catch(error => {
          alert("Error: " + error.message);
      });
  } else {
      alert("Please fill out all required fields correctly:\n\n" + errors.join('\n'));
  }
});