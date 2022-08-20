
function getInputValue(input) {
  const inputField = document.getElementById(input);
  const inputValue = parseFloat(inputField.value);
  return inputValue;
}

function getElementValue(input) {
  const element = document.getElementById(input);
  const elementValue = parseFloat(element.innerText);
  return elementValue;
}

function setElementTextValue(input, value) {
  const element = document.getElementById(input);
  element.innerText = value;
}
