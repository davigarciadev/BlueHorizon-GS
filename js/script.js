document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");

    dropdown.addEventListener("click", function(event) {
        event.stopPropagation();
        const dropdownContent = this.querySelector(".dropdown-content");
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function() {
        const dropdownContent = document.querySelector(".dropdown-content");
        if (dropdownContent) {
            dropdownContent.style.display = "none";
        }
    });
});
