// HEADER HOUR AND DATE

setInterval(() => {
    let dataCurrent = new Date();
    //HOUR
    function fix(hour){
        if(hour < 10) {
            hour = "0" + hour
        }
        return hour;
    }
    document.querySelector('.menu__header-item-hour').innerHTML = 
    (fix(dataCurrent.getHours()) + ':' + fix(dataCurrent.getMinutes()));
    //DATE
    day = new Array ('Janeiro', 'Fevereiro', 
    'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto','Setembro', 'Outubro', 'Novembro', 'Dezembro');
    document.querySelector('.menu__header-item-date').innerHTML = 
    (dataCurrent.getDate() + ' de ' + day[dataCurrent.getMonth()] + ' de ' + dataCurrent.getFullYear());
}, 500);

// SELECT ELEMENTS

const toDoForm = document.querySelector('#toDo-form');
const toDoinput = document.querySelector('#toDo-input');
const toDoday = document.querySelector('#select-day');
const hourInput = document.querySelector('#hourInput');
const cardsPlanner = document.querySelector('.cards__planner-list');

// FUNCTIONS
    const saveTodo = (toDo,hourTodo) => {
        const toDoCard = document.createElement('li');
        toDoCard.classList.add('cards__planner-item');
        
        const toDoHour = document.createElement('div');
        toDoHour.classList.add('cards__planner-hour');
        
        const toDoTextHour = document.createElement('h2');
        toDoTextHour.innerHTML = hourTodo;


        toDoCard.appendChild(toDoHour);
        toDoHour.appendChild(toDoTextHour);

        
        const toDoActivity = document.createElement('div');
        toDoActivity.classList.add('cards__planner-task');
        
        const toDoTextActivity = document.createElement('p');
        toDoTextActivity.classList.add('cards__planner-task-text')
        toDoTextActivity.innerHTML = toDo;

        const toDoActivityRemove = document.createElement('button');
        toDoActivityRemove.classList.add('cards__planner-task-button');
        toDoActivityRemove.innerText = 'Apagar';

        toDoCard.appendChild(toDoActivity);
        toDoActivity.appendChild(toDoTextActivity);
        toDoActivity.appendChild(toDoActivityRemove);

        cardsPlanner.appendChild(toDoCard);

        toDoinput.value = "";
        hourInput.value = "";
    }

// EVENTS

toDoForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const inputValue = toDoinput.value;
    const toDodayValue = toDoday.value;
    const hourInputValue = hourInput.value;

    saveTodo(inputValue,hourInputValue);
   
})

 document.addEventListener('click', (e) => {
    const targetElement = e.target;
    const parentElement = targetElement.closest('li');

    if(targetElement.classList.contains('cards__planner-task-button')) {
        parentElement.remove();
    }
 })   