$(function() {
    const isNotMoreThan50Validator = createIsNotMoreThanValidator(50);
    const isNotMoreThan4096Validator = createIsNotMoreThanValidator(4096);
    const isNotMoreThan25Validator = createIsNotMoreThanValidator(25);
    const isNotMoreThanValidator = createIsNotMoreThanValidator(50);

    const addPostForm = {
        id: 'addNewPostForm',
        inputs: {
            title: [isEmptyValidator, isNotMoreThan50Validator],
            postBody: [isEmptyValidator, isNotMoreThan4096Validator],
            authorName: [isEmptyValidator, isNotMoreThan25Validator],
            authorSurname :[isEmptyValidator, isNotMoreThanValidator]

        }
    };

    validateForm(addPostForm);

    $('input, textarea').on('blur', ()=> {
        console.log(isFormValid(addPostForm))
    })

});

