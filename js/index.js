console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", function (event) {
  const inputElement = event.target;
  const value = inputElement.value;
  inputElement.value = value.toUpperCase();
});
