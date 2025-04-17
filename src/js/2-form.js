let form = document.querySelector('.feedback-form');
let emailInput = document.querySelector('#email');
let messageInput = document.querySelector('#message');

const STORAGE_KEY = 'feedback-form-state';

let form_data = { email: '', message: '' };

// Check if there is anything in localStorage
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    try {
        form_data = JSON.parse(savedData);
        emailInput.value = form_data.email || '';
        messageInput.value = form_data.message || '';
    } catch (error) {
        console.error('Error parsing saved data from localStorage:', error);
        localStorage.removeItem(STORAGE_KEY); // Clear corrupted data
    }
}

// Listen to input and save it to localStorage
form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    if (name && name in form_data) {
        form_data[name] = value.trim();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(form_data));
    }
});

// Helper function to validate form fields
function isFormValid() {
    return emailInput.value.trim() !== '' && messageInput.value.trim() !== '';
}

// Reset form and storage on submit
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted successfully with data:', form_data);
    if (!isFormValid()) {
        return alert('Please fill out all fields');
    }

    console.log(form_data);

    form_data = { email: '', message: '' };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form_data));
    form.reset();
});
