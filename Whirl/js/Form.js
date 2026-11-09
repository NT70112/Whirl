const domains = ['gmail.com', 'mail.ru'];
let isvalid

function prevent(event) {
    event.preventDefault()


    const firstName = document.querySelector('.communication_input');
    const secondName = document.querySelectorAll('.communication_input')[1];
    const thirdName = document.querySelectorAll('.communication_input')[2];
    validateForm(firstName, secondName, thirdName)
    if (isvalid == true) {
        objectMaker(firstName, secondName, thirdName)
    }
}

function validateForm(firstName, secondName, thirdName) {
    isvalid = true
    document.querySelectorAll('.error-message').forEach(error => {
        error.style.display = 'none';
        error.textContent = '';
    });
    if (firstName.value.trim() === '') {
        document.querySelectorAll('.error-message')[0].style.display = 'block';
        document.querySelectorAll('.error-message')[0].textContent = 'Please enter a valid name';
        isvalid = false
    }
    if (secondName.value.trim() === '') {
        document.querySelectorAll('.error-message')[1].style.display = 'block';
        document.querySelectorAll('.error-message')[1].textContent = 'Please enter a valid name';
        isvalid = false
    }
    if (thirdName.value.trim() === '') {
        document.querySelectorAll('.error-message')[2].style.display = 'block';
        document.querySelectorAll('.error-message')[2].textContent = 'Please enter a valid email address.';
        isvalid = false
    }
    if (!domains.some(domain => thirdName.value.trim().endsWith(`@${domain}`))) {
        document.querySelectorAll('.error-message')[2].style.display = 'block';
        document.querySelectorAll('.error-message')[2].textContent = 'Please enter a valid email address';
        isvalid = false
    }
}

function objectMaker(firstName, secondName, thirdName) {
    const DataObject = {
        firstName: firstName.value,
        secondName: secondName.value,
        thirdName: thirdName.value
    }
    let DataString = JSON.stringify(DataObject)
    console.log(DataString)
}

const btn = document.querySelector('.communication_btn');
const checkbox = document.querySelector('input[name = "agreeCheckbox"]');
checkbox.addEventListener('change', () =>{
    if (checkbox.checked === true){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
});

const applicantForm = document.getElementById('form1')
applicantForm.addEventListener('submit', prevent)


let nav = document.querySelector('.header_links')
nav.innerHTML = ``

