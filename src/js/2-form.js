let form = document.querySelector('.feedback-form');
let email = document.querySelector('#email');
let message = document.querySelector('#message');

const STORAGE_KEY = 'feedback-form-state';

let form_data = {
    email: '',
    message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (form_data) {
    JSON.parse(localStorage.getItem(STORAGE_KEY));
    email.value = form_data.email;
    message.value = form_data.message;
}

form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    if (name in form_data) {
        form_data[name] = value.trim();
        localStorage.setItem('STORAGE_KEY', JSON.stringify(form_data));
    }

    localStorage.setItem('STORAGE_KEY', JSON.stringify(form_data));

    console.log(name, value);
});

form.addEventListener('submit', (event) => {
    // e.preventDefault();
    form_data.email = email.value;
    form_data.message = message.value;
    localStorage.setItem('STORAGE_KEY', JSON.stringify(form_data));
    console.log(form_data);
    localStorage.removeItem('STORAGE_KEY');
});

// localStorage.setItem('feedback-form-state', JSON.stringify(form_data));
