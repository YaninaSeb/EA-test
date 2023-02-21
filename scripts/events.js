let eventLink = document.querySelector('.link_event_title');
let arrowLink = document.querySelector('.link_event_arrow');
let eventPageTitle = document.querySelector('.event_page_title');

eventLink.addEventListener('click', (e) => {
    arrowLink.classList.add('link_event_arrow-animation');
    
    eventLink.setAttribute('href', '#event_page');

    eventPageTitle.classList.add('event_page_title-animation');
});
