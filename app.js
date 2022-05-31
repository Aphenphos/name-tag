const nameInput = document.getElementById('name-input');
const roleInput = document.getElementById('role-input');
const ageInput = document.getElementById('age-input');

nameInput.addEventListener('input', () => {
    console.log('input happened!');
    const name = nameInput.value;
    console.log(name);
});

roleInput.addEventListener('input', () => {
    console.log('input happened!');
    const role = roleInput.value;
    console.log(role);
});

ageInput.addEventListener('input', () => {
    console.log('input happened!');
    const age = ageInput.value;
    console.log(age);
});

