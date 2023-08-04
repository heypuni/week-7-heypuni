document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('formId');
    form.onsubmit = function (event) {
        // Prevent the form from being submitted in the traditional way (which would refresh the page)
        event.preventDefault();
        var addButton = document.querySelector(".addButton");
        addButton.addEventListener("click", function () {
        });
        var typeInput;
        ("type");
        var nameInput;
        ("form");
        var detailsInput;
        ("details");
        var amountInput;
        ("amount");
        
        // Create a new list item with the input values
        var resultSection = document.getElementById('results');
        var resultItem = document.createElement('p');
        resultItem.textContent = "Cash ".concat(typeInput, " Anda telah ").concat(nameInput, " sebesar ").concat(amountInput, " untuk ").concat(detailsInput);
        // Add the "result-item" class to the result item
        resultItem.className = "result-item";
        // Append the result item to the results section
        resultSection.appendChild(resultItem);
    };
    var elementRemove = document.getElementById("formId");
});
