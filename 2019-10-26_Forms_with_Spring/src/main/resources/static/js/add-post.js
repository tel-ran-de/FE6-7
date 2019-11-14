$(function() {

    const isNotMoreThan50Validator = createIsNotMoreThanValidator(50);
    const isNotMoreThan4096Validator = createIsNotMoreThanValidator(4096);
    const isNotMoreThan25Validator = createIsNotMoreThanValidator(25);

    const addPostForm = {
        id: 'addNewPostForm',
        inputs: {
            title: [isEmptyValidator, isNotMoreThan50Validator],
            postBody: [isEmptyValidator, isNotMoreThan4096Validator],
            authorFirstName: [isEmptyValidator, isNotMoreThan25Validator],
            authorLastName: [isEmptyValidator, isNotMoreThan50Validator]
        }
    };

    //disableFormButton(addPostForm);

    validateForm(addPostForm);

    resetSubmit(addPostForm);


    /*$('input, textarea').on('blur', ()=> {
        console.log(isFormValid(addPostForm))
    })*/

});

