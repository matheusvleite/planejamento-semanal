// HEADER HOUR AND DATE

setInterval(() => {
    let dataCurrent = new Date();
    //HOUR
    document.querySelector('.menu__header-item-hour').innerHTML = 
    (dataCurrent.getHours() + ':' + dataCurrent.getMinutes());

    //DATE
    monName = new Array ('Janeiro', 'Fevereiro', 
    'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto','Setembro', 'Outubro', 'Novembro', 'Dezembro');
    document.querySelector('.menu__header-item-date').innerHTML = 
    (dataCurrent.getDate() + ' de ' + monName[dataCurrent.getMonth()] + ' de ' + dataCurrent.getFullYear());
}, 1000);
