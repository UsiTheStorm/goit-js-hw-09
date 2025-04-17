let form = document.querySelector('.feedback-form');
let email = document.querySelector('#email');
let message = document.querySelector('#message');

let form_data = {
    email: '',
    message: '',
};

if (form_data) {
    JSON.parse(localStorage.getItem('feedback-form-state'));
    email.value = form_data.email;
    message.value = form_data.message;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form_data.email = email.value;
    form_data.message = message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(form_data));
    console.log(form_data);
    localStorage.removeItem('feedback-form-state');
});

// localStorage.setItem('feedback-form-state', JSON.stringify(form_data));
