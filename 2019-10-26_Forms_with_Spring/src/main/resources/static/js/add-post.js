$(function() {
    const isNotMoreThan25Validator = createIsNotMoreThanValidator(25);
    const isNotMoreThan50Validator = createIsNotMoreThanValidator(50);
    const isNotMoreThan4096Validator = createIsNotMoreThanValidator(4096);

    const addPostForm = {
        id: 'addNewPostForm',
        inputs: {
            title: [isEmptyValidator, isNotMoreThan50Validator],
            postBody: [isEmptyValidator, isNotMoreThan4096Validator],
            firstName: [isEmptyValidator, isNotMoreThan25Validator],
            lastName: [isEmptyValidator, isNotMoreThan50Validator]
        }
    };

    validateForm(addPostForm);

    $('input, textarea').on('blur', ()=> {
        console.log(isFormValid(addPostForm))
    })

});

