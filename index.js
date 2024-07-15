// Write your code here!
// Get the main element with ID "main"
const mainElement = document.getElementById("main");

// Check if the main element exists (optional, for robustness)
if (mainElement) {
  // Remove the main element
  mainElement.parentNode.removeChild(mainElement);
}

// Create a new h1 element
const newHeader = document.createElement("h1");

// Set the ID of the h1 element
newHeader.id = "victory";

// Get your name (replace with your logic to retrieve the name)
const yourName = "YOUR_NAME"; // Replace with how you fetch the actual name

// Create the text content for the h1 element
const textContent = yourName + " is the champion";

// Set the text content of the h1 element
newHeader.textContent = textContent;

// Get the parent element where you want to insert the h1 (optional)
const targetParent = document.body; // Replace with the desired parent element

// Append the newly created h1 element to the target parent
targetParent.appendChild(newHeader);
