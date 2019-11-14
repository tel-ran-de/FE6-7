$(function() {
    const isNotMoreThan25Validator = createIsNotMoreThanValidator(25);
    const isNotMoreThan50Validator = createIsNotMoreThanValidator(50);

    const addAuthorForm = {
        id: 'addNewAuthorForm',
        inputs: {
            firstName: [isEmptyValidator, isNotMoreThan25Validator],
            lastName: [isEmptyValidator, isNotMoreThan50Validator]
        }
    };

    validateForm(addAuthorForm);

    $('input, textarea').on('blur', ()=> {
        console.log(isFormValid(addAuthorForm))
    })

});

