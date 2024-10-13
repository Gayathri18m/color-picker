let selectedColorHexCodeElement = document.getElementById("selectedColorHexCode")
let colorpickerContainerElement = document.getElementById("colorPickerContainer")

function CallButtonOne() {
    colorpickerContainerElement.style.backgroundColor = "#e0e0e0";
    selectedColorHexCodeElement.textContent = "#e0e0e0";
}

function CallButtonTwo() {
    colorpickerContainerElement.style.backgroundColor = "#6fcf97";
    selectedColorHexCodeElement.textContent = "#6fcf97";
}

function CallButtonThree() {
    colorpickerContainerElement.style.backgroundColor = "#56ccf2";
    selectedColorHexCodeElement.textContent = "#56ccf2";
}

function CallButtonFour() {
    colorpickerContainerElement.style.backgroundColor = "#bb6bd9";
    selectedColorHexCodeElement.textContent = "#bb6bd9";
}