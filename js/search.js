document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.querySelector(".checkbox");
    const searchInput = document.getElementById("searchInput");

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
        } else {
        }
    });

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        
        console.log("Search Term:", searchTerm);
    });
});