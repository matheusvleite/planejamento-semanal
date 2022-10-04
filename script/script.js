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
const cardsPlannerScroll = document.querySelector('.cards__planner')
const cardsPlanner = document.querySelector('.cards__planner-list');
const buttonSaveLocalStorage = document.querySelector('.menu__header-item-saveButton');
const buttonCleanLocalStorage = document.querySelector('.menu__header-item-deleteButton');
const buttonMonday = document.getElementById('monday');
const buttonTuesday = document.getElementById('tuesday');
const buttonWednesday = document.getElementById('wednesday');
const buttonThursday = document.getElementById('thursday');
const buttonFriday = document.getElementById('friday');
const buttonSaturday = document.getElementById('saturday');
const buttonSunday = document.getElementById('sunday');


// VARIABLES

const schedule = [] = JSON.parse(localStorage.getItem('toDo')) || [];

let selectedDay = 'Monday';

let filteredArray;


// FUNCTIONS

function clear() { // CLEAR INPUT

   toDoinput.value = "";
   hourInput.value = "";

}

function saveLocalStorage() { // LOCALSTORAGE

   localStorage.setItem('toDo', JSON.stringify(schedule));

}

function filter() { // FILTER FOR DAY

   filteredArray = schedule.filter((item) => item.toDoday === selectedDay);

}

function deletCard(index) { // DELET ONLY ONE CARD
  
   schedule.splice(index, 1);

   saveLocalStorage()

   filter()

   renderSchedule(filteredArray);

}


function saveTodo(toDo, toDoday, hourTodo) { // GET VALUES

   schedule.push({ toDo, toDoday, hourTodo });

   if(selectedDay) {

      filter()
 
      if(filteredArray.length >= 0) renderSchedule(filteredArray);
   }
    
}

filter()

renderSchedule(filteredArray);

function renderSchedule(schedule) { // RENDERING CARDS

   cardsPlanner.innerHTML = '';
   
   schedule.sort(function (a,b) { // FUNCTION ORDER TIME CARDS
      if(a.hourTodo < b.hourTodo) {
         return -1;
      }else {
         return true;
      }
   });
   
   for (let index = 0; index < schedule.length; index++) {

      const item = schedule[index]

      const element = document.getElementById(item.hourTodo.replace(':', '')+'_hour' + item.toDoday); // IF HAVE CONFLIT IN HOUR AND DAY

      let toDoCard;

      if(element) { // ADD NEW CARD IN CONFLIT
         
         const toDoActivity = document.createElement('div');
         toDoActivity.classList.add('cards__planner-task');
         toDoActivity.classList.add('sameHourBg')

         const toDoTextActivity = document.createElement('p');
         toDoTextActivity.classList.add('cards__planner-task-text')
         toDoTextActivity.innerHTML = item.toDo;
   
         const toDoActivityRemove = document.createElement('button');
         toDoActivityRemove.classList.add('cards__planner-task-button');
         toDoActivityRemove.innerText = 'Apagar';
         toDoActivityRemove.setAttribute('onclick', `deletCard(${schedule.indexOf(item)})`);
   
         toDoCard.appendChild(toDoActivity);
         toDoActivity.appendChild(toDoTextActivity);
         toDoActivity.appendChild(toDoActivityRemove);

      } else {
         
         toDoCard = document.createElement('li');
         toDoCard.classList.add('cards__planner-item');
         toDoCard.setAttribute('id', `${item.hourTodo.replace(':', '')+'_hour' + item.toDoday}`);
       
         const toDoHour = document.createElement('div');
         toDoHour.classList.add('cards__planner-hour');
         toDoHour.classList.add(item.toDoday);
   
         const toDoTextHour = document.createElement('h2');
         toDoTextHour.innerHTML = item.hourTodo.replace(':', 'h')+'m';
   
         toDoCard.appendChild(toDoHour);
         toDoHour.appendChild(toDoTextHour);
   
         const toDoActivity = document.createElement('div');
         toDoActivity.classList.add('cards__planner-task');
         toDoActivity.classList.add(item.toDoday + 'Before');
 
         const toDoTextActivity = document.createElement('p');
         toDoTextActivity.classList.add('cards__planner-task-text')
         toDoTextActivity.innerHTML = item.toDo;
   
         const toDoActivityRemove = document.createElement('button');
         toDoActivityRemove.classList.add('cards__planner-task-button');
         toDoActivityRemove.innerText = 'Apagar';
         toDoActivityRemove.setAttribute('onclick', `deletCard(${schedule.indexOf(index)})`);
   
         toDoCard.appendChild(toDoActivity);
         toDoActivity.appendChild(toDoTextActivity);
         toDoActivity.appendChild(toDoActivityRemove);
   
         cardsPlanner.appendChild(toDoCard);
      }
   }
}

// EVENTS

toDoForm.addEventListener('submit', (e) => { // EVENT SUBMIT FORM

   e.preventDefault();

   const inputValue = toDoinput.value;
   const toDodayValue = toDoday.value;
   const hourInputValue = hourInput.value;
   clear();
   saveTodo(inputValue, toDodayValue, hourInputValue);
  
})

buttonRemoveAll.addEventListener('click', () => { //EVENT REMOVE ALL CARDS SELECTED FOR DAY
   if(selectedDay) {
     const filter = schedule.splice(schedule.findIndex((item) => 
         item.toDoday === selectedDay));
         saveLocalStorage();
         renderSchedule();
   }else {
      alert('Não há nenhum dia selecionado para excluir.');
   }
})

// BUTTONS LOCALSTORAGE

buttonSaveLocalStorage.addEventListener('click', () => { // SAVE IN LOCALSTORAGE
   saveLocalStorage();
})

buttonCleanLocalStorage.addEventListener('click', () => { // CLEAR LOCALSTORAGE
   localStorage.removeItem('toDo');
   schedule.length = 0;
   renderSchedule(schedule);
})


//BUTTONS DAYS

buttonMonday.addEventListener('click', () => {

   selectedDay = 'Monday';

   filter()
   renderSchedule(filteredArray);


})

buttonTuesday.addEventListener('click', () => {

   selectedDay = 'Tuesday';
   filter()
   renderSchedule(filteredArray);

})

buttonWednesday.addEventListener('click', () => {

   selectedDay = 'Wednesday'

   filter()
   renderSchedule(filteredArray);

})

buttonThursday.addEventListener('click', () => {

   selectedDay = 'Thursday'

   filter()
   renderSchedule(filteredArray);
   
})

buttonFriday.addEventListener('click', () => {

   selectedDay = 'Friday'

   filter()
   renderSchedule(filteredArray);
  
})

buttonSaturday.addEventListener('click', () => {

   selectedDay = 'Saturday'

   filter()
   renderSchedule(filteredArray);
  
})

buttonSunday.addEventListener('click', () => {

   selectedDay = 'Sunday'

   filter()
   renderSchedule(filteredArray);
 
})

cardsPlannerScroll.scrollTo(0,200) // SCROLL FIX

// MENU ACTIVE 

$(document).ready(function() {
    $('.filter__days-list-item').on('click', 
    function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
})



