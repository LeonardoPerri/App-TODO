//Referenciando os elementos da página HTML para botar obter e trabalhar com os mesmos;
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    //Limpa a lista antes de adicionar os elementos para exibição na tela;
    listElement.innerHTML = '';

    todos.forEach(todo => {
        //Cria a tag li no html dinamicamente;
        var todoElement = document.createElement('li');
        //Cria um nó de texto;
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        //Retorna a posição do item dentro do array;
        var pos = todos.indexOf(todo);
        //Cria o atributo de click chamando a função para deletar o TODO passando a posição do mesmo;
        //<a href="#" onclick="deleteTodo(0)">Excluir</a> - Ficando assim
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    });
    
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveLocalStorage();
}

function deleteTodo(pos) {
    //Remove quantidade de items de acordo com a posição passada;
    todos.splice(pos, 1);
    renderTodos();
    saveLocalStorage();
}

//Salva em um localStorage em formato de string chave : valor
function saveLocalStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
    renderTodos();
}

buttonElement.onclick = addTodo;

