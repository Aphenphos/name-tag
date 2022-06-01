const nameInput = document.getElementById('name-input');
const roleInput = document.getElementById('role-input');
const ageInput = document.getElementById('age-input');

nameInput.addEventListener('input', () => {
    const name = nameInput.value;
    const nameDisplay = document.getElementById('name-display');
    nameDisplay.textContent = name;
});

roleInput.addEventListener('input', () => {
    const role = roleInput.value;
    const roleDisplay = document.getElementById('role-display');
    roleDisplay.textContent = role;
});

ageInput.addEventListener('input', () => {
    const age = ageInput.value;
    const ageDisplay = document.getElementById('age-display');
    ageDisplay.textContent = age;
});
