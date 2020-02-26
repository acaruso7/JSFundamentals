// preventing form submission and validating form inputs

let form = document.getElementById('myform');
form.addEventListener('submit', event => {
    let input = form.elements['myinput'];
    console.log(input.value);
    if (input.value.length > 5) {
        let spanError = document.getElementById('form-error');
        spanError.textContent = 'Input cannot be more than 5 characters';
        spanError.style.color = 'red';
        spanError.style.borderColor = 'red'; //must use camelCase instead of 'border-color' because of javascript
        // input.value = "";
        input.focus(); // bring cursor back to form
    } else {
        //set up object literal using form inputs here, and post to server using axios.post
    }
    event.preventDefault(); //prevent the page from reloading and posting data to path in 'action'
});

//accessing form fields