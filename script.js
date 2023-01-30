const forms = document.querySelector('form');
const nameInput = document.getElementById('inputName');
const age = document.getElementById('inputAge');

const registration = [
    {
        name: 'viviane',
        age: 20
    },
    {
        name: 'Gabriel',
        age: 23
    },
    {
        name: 'Beatriz',
        age: 24
    }
]

forms.addEventListener('submit', (event) => {
    event.preventDefault();
    data = {
        name: nameInput.value,
        age: age.value
    }
    registration.push(data);
    console.log(registration);
    
    appendUserRegistration(data.name, data.age);
})

registration.forEach(item => {
    appendUserRegistration(item.name, item.age);
})

function appendUserRegistration(name, age){
    const liElement = document.createElement('li');
    const textNode = document.createTextNode(`${name} ${age}`);
    liElement.appendChild(textNode);
    document.querySelector('.user-registration').appendChild(liElement);
}