const submit = document.querySelector('#submit-button');


submit.addEventListener('mouseover', () => {
    submit.textContent = "Read to submit?"
});

submit.addEventListener('mouseout', () => {
    submit.textContent = "Submit"
});