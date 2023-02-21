document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let email = form.querySelector('.footer_form-input');
        let isValidate = emailValidator(email.value);
        if (isValidate) {
            email.dataset.validate = true;
            //sendData();
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




let popup = document.querySelector('.subs_popup');
let btnCancel = document.querySelector('.popup_cancel');
let btnClose = document.querySelector('.popup_close');

btnCancel.addEventListener('click', () => {
    popup.classList.remove('show_popup');
});

btnClose.addEventListener('click', () => {
    popup.classList.remove('show_popup');
});



function sendData() {
    const XHR = new XMLHttpRequest();

        const FD = new FormData(form);

        XHR.addEventListener('load', (event) => {
            // let response = JSON.parse(event.target.responseText);

            // if (response.errors) {
            //     console.log('error XHR')
            // } else {
            //     console.log('yes XHR')
            // }
        });

        XHR.addEventListener('error', (event) => {
            alert('oops')
        });

        XHR.open('POST', '/', true);

        XHR.send(FD);
}
