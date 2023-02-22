let eventLink = document.querySelector('.link_event_title');
let arrowLink = document.querySelector('.link_event_arrow');
let eventsWrap = document.querySelector('.events_wrapper');

let dataEvent = [
    ['01', 'Hawaiian party', '13.02.2023', 'assets/img/event1.png'],
    ['02', 'Мafia party', '04.12.2022', 'assets/img/event1.png'],
    ['03', 'Party', '20.09.2022', 'assets/img/event1.png'],
    ['04', 'Party on the beach', '04.07.2022', 'assets/img/event1.png'],
    ['05', 'Home Security', '13.04.2022', 'assets/img/event1.png'],
    ['06', 'Network Design & Implementation', '27.02.2022', 'assets/img/event1.png'],
    ['07', 'System Design & Engineering', '15.01.2022', 'assets/img/event1.png'],
    ['08', 'Client Care Plans', '10.11.2021', 'assets/img/event1.png']
];

dataEvent.forEach((e) => {
    let item = document.createElement('li');
    item.classList.add('events_item')
    item.innerHTML = `
        <div class="events_item_title">
            <div class="item_title_num">${e[0]}</div>
            <div class="item_title_name">${e[1]}</div>
        </div>
        <div class="events_item_about">
            <div class="item_about_num">${e[0]}</div>
            <div class="item_about_title">${e[1]}</div>
            <div class="item_about_date">${e[2]}</div>
            <div class="item_about_btn"><a href="https://egorovagency.by/#main" target="_blank">More information</a></div>
        </div>
        <img class="events_item_bg" src="${e[3]}" alt="event">
    `
    eventsWrap.appendChild(item);
});

let eventPageTitle = document.querySelector('.event_page_title');
let eventsList = document.querySelectorAll('.events_item');
let eventAsideBlock = document.querySelectorAll('.events_item_title')


eventLink.addEventListener('click', (e) => {
    arrowLink.classList.add('link_event_arrow-animation');
    eventLink.setAttribute('href', '#event_page');
    eventPageTitle.classList.add('event_page_title-animation');
});


eventsList.forEach((item, ind) => {
    item.addEventListener('click', () => {
        resetEventStyle();
        item.classList.add('events_item_show');
        eventAsideBlock[ind].classList.add('events_item_title_show');
    })
});
eventsList[0].click();

function resetEventStyle() {
    eventsList.forEach((item, ind) => {
        item.classList.remove('events_item_show');
        eventAsideBlock[ind].classList.remove('events_item_title_show')
    });
}
