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
