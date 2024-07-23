let greeting = document.querySelector("#greeting")
greeting.addEventListener("mouseover", domClick);

function domClick() {
   this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}

// Navbar shrink function
