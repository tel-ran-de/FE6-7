$(function() {
    const isNotMoreThan50Validator = createIsNotMoreThanValidator(50);
    const isNotMoreThan4096Validator = createIsNotMoreThanValidator(4096);

    const addPostForm = {
        id: 'addNewPostForm',
        inputs: {
            title: [isEmptyValidator, isNotMoreThan50Validator],
            postBody: [isEmptyValidator, isNotMoreThan4096Validator]
        }
    };

    disableFormButton(addPostForm);

    validateForm(addPostForm);



    $('input, textarea').on('blur', ()=> {
        console.log(isFormValid(addPostForm))
    })

});

