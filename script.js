const forms = document.querySelector('form');
const nome = document.getElementById('inputName');
const age = document.getElementById('inputAge');
const button = document.querySelector('button');
const lista = document.querySelector('ul');

let cadastros = [
    {
        nome: 'viviane',
        age: 20
    },
    {
        nome: 'Gabriel',
        age: 23
    },
    {
        nome: 'Beatriz',
        age: 24
    }
]

forms.addEventListener('submit', (event) => {
    event.preventDefault();
    dados = {
        nome: nome.value,
        age: age.value
    }
    cadastros.push(dados);
    console.log(cadastros);
})
