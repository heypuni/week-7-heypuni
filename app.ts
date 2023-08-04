import { type } from "os";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('formId') as HTMLFormElement;
  const addButton = document.querySelector(".addButton") as HTMLButtonElement;

  addButton.addEventListener("click", () => {
    // Get input values
    const typeInput = (document.getElementById("type") as HTMLSelectElement).value;
    const nameInput = (document.getElementById("form") as HTMLInputElement).value;
    const detailsInput = (document.getElementById("details") as HTMLInputElement).value;
    const amountInput = (document.getElementById("amount") as HTMLInputElement).value;

    // Create the result string
    const resultString = typeInput + nameInput + detailsInput + amountInput;

    // Clear the form inputs
    (document.getElementById("form") as HTMLInputElement).value = "";
    (document.getElementById("details") as HTMLInputElement).value = "";
    (document.getElementById("amount") as HTMLInputElement).value = "";

    // Append the result to the results section
    const resultSection = document.getElementById('results');
    const resultItem = document.createElement('p');
    resultItem.textContent = resultString;
    resultItem.className = "result-item";
    resultSection?.appendChild(resultItem);
  });

});
