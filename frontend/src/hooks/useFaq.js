import { useEffect } from "react";

const useFaq = () => {
  useEffect(() => {
    // Select all FAQ items
    const faqItems = document.querySelectorAll(".faq-item");

    // Add click event listeners to each FAQ item
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const questionHeader = question.querySelector("h3"); // Select the specific h3 inside the clicked item

      question.addEventListener("click", () => {
        // Toggle the expanded state for the clicked item
        const isExpanded = item.getAttribute("data-expanded") === "true";
        item.setAttribute("data-expanded", !isExpanded);

        // Toggle the .expand class for the specific h3 of the clicked item
        questionHeader.classList.toggle("expand");

        // Close other items and remove their .expand class if needed
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.setAttribute("data-expanded", "false");

            // Remove .expand class from h3 of non-clicked items
            const otherHeader = otherItem.querySelector(".faq-question h3");
            if (otherHeader) {
              otherHeader.classList.remove("expand");
            }
          }
        });
      });
    });

    // Search functionality
    const searchInput = document.getElementById("search");

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();

        faqItems.forEach((item) => {
          const questionText = item
            .querySelector(".faq-question h3")
            .textContent.toLowerCase();
          const answerText = item
            .querySelector(".faq-answer p")
            .textContent.toLowerCase();

          // Check if the query matches the question or the answer
          if (questionText.includes(query) || answerText.includes(query)) {
            item.style.display = "block"; // Show matching item
          } else {
            item.style.display = "none"; // Hide non-matching item
          }
        });
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        if (question) {
          question.replaceWith(question.cloneNode(true)); // Remove event listener by cloning the element
        }
      });

      if (searchInput) {
        searchInput.replaceWith(searchInput.cloneNode(true));
      }
    };
  }, []);
};

export default useFaq;