$(function() {
    const isNotMoreThan50Validator = createIsNotMoreThanValidator(50);
    const isNotMoreThan4096Validator = createIsNotMoreThanValidator(4096);
    const isNotMoreThan25ValidatorAuthorFirstName = createIsNotMoreThanValidator(25);

    const addPostForm = {
        id: 'addNewPostForm',
        inputs: {
            title: [isEmptyValidator, isNotMoreThan50Validator],
            postBody: [isEmptyValidator, isNotMoreThan4096Validator],
            first_name: [isEmptyValidator, isNotMoreThan25ValidatorAuthorFirstName],
            last_name: [isEmptyValidator, isNotMoreThan50Validator]
        }
    };

    validateForm(addPostForm);

    $('input, textarea').on('blur', ()=> {
        console.log(isFormValid(addPostForm))
    })

});

