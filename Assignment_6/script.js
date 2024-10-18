document.addEventListener("DOMContentLoaded", function () {
    // Get references to the button and hidden content
    const learnMoreButton = document.querySelector(".learn-btn");
    const hiddenContent = document.querySelector(".hidden-content");

    // Add a click event listener to the button
    learnMoreButton.addEventListener("click", function () {
        // Toggle the visibility of the hidden content
        if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
            hiddenContent.style.display = "block";
        } else {
            hiddenContent.style.display = "none";
        }
    });
});
