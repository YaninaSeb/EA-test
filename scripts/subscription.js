let popup = document.querySelector('.subs_popup');
let popupTitle = document.querySelector('.popup_title');
let popupInfo = document.querySelector('.popup_info');
let btnCancel = document.querySelector('.popup_cancel');
let btnClose = document.querySelector('.popup_close');


document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let email = form.querySelector('.footer_form-input');
        let isValidate = emailValidator(email.value);
        if (isValidate) {
            email.dataset.validate = true;
            sendData(form);
        } else {
            email.dataset.validate = false;
        }
    });

});

function emailValidator(email) {
    if (email.length < 8
        || !(/[a-z]/.test(email))
        || !(/[A-Z]/.test(email))
        || !(/[0-9]/.test(email)) 
        || !(/[@.]/.test(email)) 
    ) {
        return false;
    } else {
        return true;
    }
}

function sendData(form) {
    const XHR = new XMLHttpRequest();

    XHR.addEventListener('load', () => {
        if (XHR.status == 200) {
            popupTitle.textContent = 'Success!';
            popupInfo.textContent = 'You have successfully subscribed to the email newsletter';
            popup.classList.add('show_popup');
        }
    });

    XHR.addEventListener('error', () => {
        popupTitle.textContent = 'Ooops!';
        popupInfo.textContent = 'Something went wrong...';
        popup.classList.add('show_popup');
    });

    let FD = new FormData(form);
    XHR.open('POST', '', true);
    XHR.send(FD);
}


// POP UP

btnCancel.addEventListener('click', () => {
    popup.classList.remove('show_popup');
});

btnClose.addEventListener('click', () => {
    popup.classList.remove('show_popup');
});
