//grabs name
const nameInput = document.getElementByID('name-input');
const nameDisplay = document.getElementById('name-display');
console.log(name-display);

console.log(nameInput);

nameInput.addEventListener('name-input', () => {
    const name = nameInput.value;
    nameDisplay.textContent = name;
    console.log('input happened');
    console.log(name);
});

