function dragging(event) {
    console.log("Swipe is working")
    document.getElementByClass("swipe-line").innerHTML = "New text!";
    document.getElementByClass("swipe-line").classList.add("animate__animated animate__slideOutUp");
}

function clicked() {
    console.log("swipe is clicked")
}

