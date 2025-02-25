var button = document.getElementsByClassName("father");
var content = document.getElementsByClassName("shop_body");

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        var id = this; // Get the button that was clicked
        for (var j = 0; j < content.length; j++) {
            // Toggle the display of the dropdown (shop_body) for the clicked button
            if (content[j].style.display === "none" || content[j].style.display === "") {
                content[j].style.display = "block";  // Show the dropdown
            } else {
                content[j].style.display = "none";   // Hide the dropdown
            }
        }
    });
}
