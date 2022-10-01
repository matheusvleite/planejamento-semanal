// HEADER HOUR AND DATE

setInterval(() => {

   let dataCurrent = new Date();

   //HOUR

   function fix(number) {
      if (number < 10) {
         number = "0" + number
      }
      return number;
   }
   document.querySelector('.menu__header-item-hour').innerHTML =
      (fix(dataCurrent.getHours()) + ':' + fix(dataCurrent.getMinutes()));
   //DATE

   day = new Array('Janeiro', 'Fevereiro',
      'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
   document.querySelector('.menu__header-item-date').innerHTML =
      (fix(dataCurrent.getDate()) + ' de ' + day[dataCurrent.getMonth()] + ' de ' + dataCurrent.getFullYear());
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
const buttonRemoveTask = document.querySelector('.cards__planner-task-button');


// FUNCTIONS

function clear() {

   toDoinput.value = "";
   hourInput.value = "";

}

function deletCard(index) {
   schedule.splice(index, 1);
   renderSchedule(schedule);
}


const schedule = [];

function saveTodo(toDo, toDoday, hourTodo) {

   schedule.push({ toDo, toDoday, hourTodo })

   renderSchedule(schedule);

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
      toDoActivityRemove.setAttribute('onclick', `deletCard(${schedule.indexOf(item)})`)

      toDoCard.appendChild(toDoActivity);
      toDoActivity.appendChild(toDoTextActivity);
      toDoActivity.appendChild(toDoActivityRemove);

      cardsPlanner.appendChild(toDoCard);

   }
}

// LOCALSTORAGE

function saveLocalStorage() {
   alert('.')
}

// EVENTS

toDoForm.addEventListener('submit', (e) => {

   e.preventDefault();

   const inputValue = toDoinput.value;
   const toDodayValue = toDoday.value;
   const hourInputValue = hourInput.value;
   clear();
   saveTodo(inputValue, toDodayValue, hourInputValue);

})

buttonRemoveAll.addEventListener('click', () => {
   alert('TESTE')
})

// BUTTONS LOCALSTORAGE

buttonSaveLocalStorage.addEventListener('click', () => {
   saveLocalStorage()
})

buttonCleanLocalStorage.addEventListener('click', () => {
   localStorage.clear();
})

//BUTTONS DAYS

buttonMonday.addEventListener('click', () => {

   const filteredArray = schedule.filter((item) => item.toDoday === 'Monday');
   renderSchedule(filteredArray);

})

buttonTuesday.addEventListener('click', () => {

   const filteredArray = schedule.filter((item) => item.toDoday === 'Tuesday');
   renderSchedule(filteredArray);

})

buttonWednesday.addEventListener('click', () => {

   const filteredArray = schedule.filter((item) => item.toDoday === 'Wednesday');
   renderSchedule(filteredArray);

})

buttonThursday.addEventListener('click', () => {

   const filteredArray = schedule.filter((item) => item.toDoday === 'Thursday');
   renderSchedule(filteredArray);

})

buttonFriday.addEventListener('click', () => {

   const filteredArray = schedule.filter((item) => item.toDoday === 'Friday');
   renderSchedule(filteredArray);

})

buttonSaturday.addEventListener('click', () => {

   const filteredArray = schedule.filter((item) => item.toDoday === 'Saturday');
   renderSchedule(filteredArray);
})

buttonSunday.addEventListener('click', () => {

   const filteredArray = schedule.filter((item) => item.toDoday === 'Sunday');
   renderSchedule(filteredArray);
})


