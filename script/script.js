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
const buttonRemoveAll = document.querySelector('.filter__form-removeButton');
const cardsPlanner = document.querySelector('.cards__planner-list');
const buttonSaveLocalStorage = document.querySelector('.menu__header-item-saveButton');
const buttonCleanLocalStorage = document.querySelector('.menu__header-item-deleteButton');
const buttonMonday = document.getElementById('monday')
const buttonTuesday = document.getElementById('tuesday')
const buttonWednesday = document.getElementById('wednesday')
const buttonThursday = document.getElementById('thursday')
const buttonFriday = document.getElementById('friday')
const buttonSaturday = document.getElementById('saturday')
const buttonSunday = document.getElementById('sunday')

// FUNCTIONS
    const schedule = []

    function saveTodo(toDo, toDoday ,hourTodo) {

        schedule.push({toDo, toDoday , hourTodo})

        renderSchedule();
        
    }

    function renderSchedule(schedule) {

        cardsPlanner.innerHTML = '';

       
        for (let index = 0; index < schedule.length; index++) {

            const item = schedule[index]   
             
            const toDoCard = document.createElement('li');
            toDoCard.classList.add('cards__planner-item');
    
            const toDoHour = document.createElement('div');
            toDoHour.classList.add('cards__planner-hour');
            toDoHour.classList.add(item.toDoday);
                
            const toDoTextHour = document.createElement('h2');
            toDoTextHour.innerHTML = item.hourTodo;

            toDoCard.appendChild(toDoHour);
            toDoHour.appendChild(toDoTextHour);
                
            const toDoActivity = document.createElement('div');
            toDoActivity.classList.add('cards__planner-task');
            toDoActivity.classList.add(item.toDoday + 'Before')
                
            const toDoTextActivity = document.createElement('p');
            toDoTextActivity.classList.add('cards__planner-task-text')
            toDoTextActivity.innerHTML = item.toDo;

            const toDoActivityRemove = document.createElement('button');
            toDoActivityRemove.classList.add('cards__planner-task-button');
            toDoActivityRemove.innerText = 'Apagar';

            toDoCard.appendChild(toDoActivity);
            toDoActivity.appendChild(toDoTextActivity);
            toDoActivity.appendChild(toDoActivityRemove);
        
            cardsPlanner.appendChild(toDoCard);

        }
    }

// EVENTS

toDoForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const inputValue = toDoinput.value;
    const toDodayValue = toDoday.value;
    const hourInputValue = hourInput.value;

    saveTodo(inputValue, toDodayValue, hourInputValue);
})

 buttonSaveLocalStorage.addEventListener('click', () => {
    alert('TESTE');
 })

 buttonCleanLocalStorage.addEventListener('click', () => {
    localStorage.clear();
 })

 buttonMonday.addEventListener('click' , () => {
    const filteredArray = schedule.filter((item) => item.toDoday === 'Monday');
    renderSchedule(filteredArray);
    toDoinput.value = "";
    hourInput.value = "";
 })
 buttonTuesday.addEventListener('click' , () => {
    const filteredArray = schedule.filter((item) => item.toDoday === 'Tuesday');
    renderSchedule(filteredArray);
    toDoinput.value = "";
    hourInput.value = "";
 })
 buttonWednesday.addEventListener('click' , () => {
    const filteredArray = schedule.filter((item) => item.toDoday === 'Wednesday');
    renderSchedule(filteredArray);
    toDoinput.value = "";
    hourInput.value = "";
 })
 buttonThursday.addEventListener('click' , () => {
    const filteredArray = schedule.filter((item) => item.toDoday === 'Thursday');
    renderSchedule(filteredArray);
    toDoinput.value = "";
    hourInput.value = "";
 })
 buttonFriday.addEventListener('click' , () => {
    const filteredArray = schedule.filter((item) => item.toDoday === 'Friday');
    renderSchedule(filteredArray);
    toDoinput.value = "";
    hourInput.value = "";
 })
 buttonSaturday.addEventListener('click' , () => {
    const filteredArray = schedule.filter((item) => item.toDoday === 'Saturday');
    renderSchedule(filteredArray);
    toDoinput.value = "";
    hourInput.value = "";
 })
 buttonSunday.addEventListener('click' , () => {
    const filteredArray = schedule.filter((item) => item.toDoday === 'Sunday');
    renderSchedule(filteredArray);
    toDoinput.value = "";
    hourInput.value = "";
 })