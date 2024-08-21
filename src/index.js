const input = document.getElementById("input");
const button = document.getElementById("button");
const notes = document.getElementById("notes");
const deleteBtn = document.getElementById("delete-btn");

// Get the value from local storage
const storedValue = localStorage.getItem("value");
if (storedValue) {
  notes.innerHTML = storedValue;
  deleteBtn.classList.remove("hidden"); // Show the delete button if there is a value in local storage
}

// Set the value to the new value in local storage
const getInput = () => {
  if (input.value.trim() !== "") {
    notes.innerHTML = input.value;
    localStorage.setItem("value", input.value);
    deleteBtn.classList.remove("hidden"); // Show the delete button
    input.value = "";
  }
};

// Create a delete button to remove the value from local storage
deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("value");
  notes.innerHTML = "";
  deleteBtn.classList.add("hidden"); // Hide the delete button
});

// Add the value to local storage
button.addEventListener("click", (e) => {
  e.preventDefault();
  getInput();
});
