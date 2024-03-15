function toggleText() {
    var textBlock = document.getElementById("textBlock");
    if (textBlock.style.display === "none") {
        textBlock.style.display = "block";
        document.getElementById("toggleButton").innerText = "📧";
    } else {
        textBlock.style.display = "none";
        document.getElementById("toggleButton").innerText = "📧";
    }
}
